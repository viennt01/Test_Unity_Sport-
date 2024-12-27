import Matches from "@/components/body/matches";
import Profile from "@/components/body/profile";
import TransferValue from "@/components/body/transferValue";
import Header from "@/components/header";
import { Flex } from "antd";

export default function Home() {
  return (
    <Flex
      style={{
        width: "100vW",
        minHeight: "100vh",
        background: "#02040d",
      }}
      vertical
      align="center"
    >
      <Header />
      <Flex vertical>
        <Profile />
        <TransferValue />
        <Matches />
      </Flex>
    </Flex>
  );
}
