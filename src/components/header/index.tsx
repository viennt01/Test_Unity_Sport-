"use client";
import { Button, Flex, Image, Modal } from "antd";
import { useState } from "react";
import PlayerSimulation from "../game";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex
      style={{
        width: "100vW",
        height: 62,
        padding: "0 24px",
        background:
          "linear-gradient(264.06deg, #091557 4.35%, #122690 59.76%, #203397 95.98%)",
      }}
      align="center"
      justify="space-between"
    >
      <Flex>
        <Image preview={false} alt="logo" src="/images/logo+hamburger.png" />
        <Button
          style={{
            marginLeft: 60,
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
          onClick={showModal}
        >
          <Image preview={false} alt="logo" src="/images/Football-icon.svg" />
          FOOTBALL
        </Button>
      </Flex>
      <Image
        preview={false}
        alt="logo"
        src="/images/avatar.svg"
        width={36}
        height={36}
      />
      <Modal
        title="Mô phỏng trò chơi bóng đá ma"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PlayerSimulation />
      </Modal>
    </Flex>
  );
}
