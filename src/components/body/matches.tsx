import { Flex, Image } from "antd";
import MatchList from "@/data/matchList.json";

export default function Matches() {
  const { events } = MatchList.data;

  function formatTimestampToDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}`;
  }

  const containerStyle: React.CSSProperties = {
    maxHeight: 530,
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  return (
    <Flex
      vertical
      style={{
        maxWidth: 1226,
        width: "100%",
        background: "#020c20",
        borderRadius: 8,
        color: "#FFFFFF",
        margin: "24px 0",
        padding: 24,
      }}
    >
      <h3
        style={{
          fontSize: 14,
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        MATCHES
      </h3>

      <div style={containerStyle}>
        {events.map((item, index) => {
          const isLastItem = index === events.length - 1;
          return (
            <Flex
              key={item.id}
              justify="space-between"
              align="center"
              style={{
                height: 66,
                width: "100%",
                padding: "0 24px",
                borderRadius: 8,
                border: "1px solid #09379447",
                background:
                  "linear-gradient(124.54deg, rgba(10, 31, 85, 0.4) 0%, rgba(16, 44, 115, 0.4) 27.66%, rgba(12, 26, 76, 0.4) 70.02%)",
                marginBottom: isLastItem ? 0 : 8,
              }}
            >
              <Flex>
                <Flex
                  vertical
                  justify="center"
                  align="center"
                  style={{
                    fontWeight: 400,
                    fontSize: 13,
                  }}
                >
                  <h3
                    style={{
                      marginBottom: 6,
                    }}
                  >
                    {formatTimestampToDate(Number(item.startTimestamp))}
                  </h3>
                  <h4
                    style={{
                      color: "#8D8E92",
                    }}
                  >
                    {item.status.type === "finished" ? "FT" : "AET"}
                  </h4>
                </Flex>

                <Flex
                  vertical
                  justify="center"
                  style={{
                    fontWeight: 400,
                    fontSize: 13,
                    marginLeft: 16,
                  }}
                >
                  <h3
                    style={{
                      color: "#8D8E92",
                      marginBottom: 6,
                    }}
                  >
                    <Image
                      alt="home team"
                      src={`https://img.uniscore.com/football/team/${item.homeTeam.id}/image/small`}
                      preview={false}
                      width={20}
                      style={{
                        marginRight: 24,
                      }}
                    />{" "}
                    {item.homeTeam.shortName}
                  </h3>
                  <h3>
                    <Image
                      alt="away team"
                      src={`https://img.uniscore.com/football/team/${item.awayTeam.id}/image/small`}
                      preview={false}
                      width={20}
                      style={{
                        marginRight: 24,
                      }}
                    />{" "}
                    {item.awayTeam.shortName}
                  </h3>
                </Flex>
              </Flex>
              <Flex>
                <Flex
                  vertical
                  justify="center"
                  style={{
                    fontWeight: 400,
                    color: "#fff",
                  }}
                >
                  <Flex
                    align="center"
                    justify="center"
                    style={{
                      borderRadius: "4px 4px 0 0",
                      width: 22,
                      height: 23,
                      background:
                        item.homeScore.display > item.awayScore.display
                          ? "#2187E5"
                          : item.homeScore.display < item.awayScore.display
                          ? "linear-gradient(186.86deg, #00289F 10%, #001F7B 28.46%, #091557 50.54%)"
                          : "#0038E0",
                    }}
                  >
                    {item.homeScore.display}
                  </Flex>
                  <Flex
                    align="center"
                    justify="center"
                    style={{
                      borderRadius: "0px 0px 4px 4px",
                      width: 22,
                      height: 23,
                      background:
                        item.awayScore.display > item.homeScore.display
                          ? "#2187E5"
                          : item.awayScore.display < item.homeScore.display
                          ? "linear-gradient(186.86deg, #091557 56.43%, #001F7B 76.8%, #00289F 91.46%)"
                          : "#0038E0",
                    }}
                  >
                    {item.awayScore.display}
                  </Flex>
                </Flex>
                <Flex justify="center" align="center">
                  <Image
                    alt="chair"
                    src="/images/chair.png"
                    preview={false}
                    width={24}
                    style={{
                      marginLeft: 8,
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </div>
    </Flex>
  );
}
