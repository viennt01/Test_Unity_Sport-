import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button, Flex, Image } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Technique {
  name: string;
  difficulty: number;
}

interface Player {
  name: string;
  number: number;
  defense: number;
  techniques: Technique[];
  score: number;
  eliminatedOrder: number | null;
}

const techniques: Technique[] = [
  { name: "Neymar Rainbow Flick", difficulty: 6 },
  { name: "El Tornado", difficulty: 6 },
  { name: "Waka Waka", difficulty: 5 },
  { name: "Sombrero Flick", difficulty: 5 },
  { name: "Okocha Sombrero Flick", difficulty: 4 },
  { name: "Bolasie Flick", difficulty: 4 },
  { name: "Fake Pass", difficulty: 3 },
  { name: "Ball Roll Chop", difficulty: 3 },
  { name: "Ball Roll Cut", difficulty: 3 },
  { name: "Ball Hop", difficulty: 2 },
  { name: "Simple Rainbow", difficulty: 2 },
];

const createPlayers = (): Player[] => {
  const players: Player[] = [];
  for (let i = 1; i <= 10; i++) {
    players.push({
      name: `Player ${i}`,
      number: i,
      defense: Math.floor(Math.random() * 5) + 1,
      techniques: [...techniques].sort(() => 0.5 - Math.random()).slice(0, 5),
      score: 0,
      eliminatedOrder: null,
    });
  }
  return players;
};

const PlayerSimulation: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [excludedPlayers, setExcludedPlayers] = useState<number[]>([]);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const initialPlayers = createPlayers();
    setPlayers(initialPlayers);
  }, []);

  const simulatePass = (activePlayers: Player[]) => {
    let updatedPlayers = [...activePlayers];
    const excluded = [...excludedPlayers];

    // Chọn người chuyền và người nhận bóng
    while (updatedPlayers.length > 1) {
      const sender =
        updatedPlayers[Math.floor(Math.random() * updatedPlayers.length)];
      let receiver: Player;
      do {
        receiver =
          updatedPlayers[Math.floor(Math.random() * updatedPlayers.length)];
      } while (receiver === sender);

      //   Kiểm tra chuyền bóng
      const technique =
        sender.techniques[Math.floor(Math.random() * sender.techniques.length)];
      if (technique.difficulty > receiver.defense) {
        excluded.push(sender.number);
        sender.eliminatedOrder = excluded.length;
        updatedPlayers = updatedPlayers.filter(
          (p) => p.number !== sender.number
        );
      }
    }
    return { winner: updatedPlayers[0], excluded };
  };

  const startSimulation = () => {
    let updatedPlayers = [...players];
    let excluded: number[] = [];
    const techniqueCount: { [key: string]: number } = {};

    // Chạy 10 lượt chơi
    for (let i = 1; i <= 10; i++) {
      const { excluded: newExcluded } = simulatePass(
        updatedPlayers.filter((p) => !excluded.includes(p.number))
      );
      excluded = newExcluded;
    }

    // Đếm số lần sử dụng kỹ thuật
    updatedPlayers.forEach((player) => {
      player.techniques.forEach((tech) => {
        techniqueCount[tech.name] = (techniqueCount[tech.name] || 0) + 1;
      });
    });

    // Tính điểm cho từng cầu thủ
    updatedPlayers.forEach((player) => {
      if (player.eliminatedOrder !== null) {
        player.score =
          10 -
          player.eliminatedOrder +
          player.techniques.reduce((sum, tech) => sum + tech.difficulty, 0);
      } else {
        player.score = 50;
      }
    });

    // Sắp xếp và tạo dữ liệu biểu đồ
    updatedPlayers.sort((a, b) => b.score - a.score);
    setPlayers(updatedPlayers);
    setChartData({
      labels: Object.keys(techniqueCount),
      datasets: [
        {
          label: "Số lần sử dụng",
          data: Object.values(techniqueCount),
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
      ],
    });
  };

  return (
    <Flex style={{ padding: "20px" }} vertical>
      <Button
        style={{
          height: 38,
          borderRadius: 16,
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: "rgb(101, 139, 236)",
          background:
            "linear-gradient(124.54deg, #1553EF 0%, #0C3089 27.66%, #0C1A4C 70.02%)",
          color: "#FFFFFF",
          font: "Oswald",
          fontWeight: 600,
          fontSize: 12,
        }}
        onClick={startSimulation}
      >
        <Image preview={false} alt="logo" src="/images/Football-icon.svg" />
        Bắt đầu trò chơi
      </Button>
      <Flex style={{ marginTop: "20px" }} vertical>
        <h2>Danh sách cầu thủ</h2>
        <ul>
          {players.map((player, index) => (
            <li
              key={index}
              style={{ fontWeight: index < 3 ? "bold" : "normal" }}
            >
              {player.name} - Điểm: {player.score} - Chỉ số phòng thủ:{" "}
              {player.defense}
            </li>
          ))}
        </ul>
      </Flex>
      {chartData && (
        <Flex style={{ marginTop: "20px" }} vertical>
          <h2>Biểu đồ kỹ thuật</h2>
          <Bar data={chartData} />
        </Flex>
      )}
    </Flex>
  );
};

export default PlayerSimulation;
