import { Avatar, Col, Flex, Image, Row } from "antd";
import playerData from "@/data/playerInfo.json";

export default function Profile() {
  const { player } = playerData.data;
  function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    return `${day} ${monthNames[month]} ${year}`;
  }
  function calculateAge(dateOfBirthTimestamp: number) {
    const birthDate = new Date(dateOfBirthTimestamp * 1000);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  return (
    <Row
      style={{
        maxWidth: 1226,
        width: "100%",
        background: "#020c20",
        borderRadius: 8,
        color: "#FFFFFF",
      }}
    >
      <Col span={12} xs={24} sm={24} md={12}>
        <Flex vertical style={{ padding: 24, height: 204 }}>
          <Flex justify="flex-end">
            <Image
              preview={false}
              alt="icon"
              src="/images/star.svg"
              width={24}
              height={24}
            />
          </Flex>
          <Flex align="center">
            <Avatar
              alt="avatar"
              src={`https://img.uniscore.com/football/player/${player.id}/image/medium`}
              size={90}
              style={{
                marginRight: 24,
              }}
            />
            <Flex vertical justify="center">
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  marginBottom: 12,
                }}
              >
                {player.name}
              </div>
              <Flex>
                <Image
                  preview={false}
                  alt="team"
                  src={`https://img.uniscore.com/football/team/${player.team.id}/image/small`}
                  width={40}
                  height={40}
                />
                <Flex
                  vertical
                  justify="center"
                  style={{
                    marginLeft: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    {player.team.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 400,
                      color: "#8D8E92",
                    }}
                  >
                    Contract until{" "}
                    {formatDate(Number(player.contractUntilTimestamp))}
                  </div>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Col>
      <Col span={12} xs={24} sm={24} md={12}>
        <Row
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Col
            span={12}
            style={{
              height: 68,
              borderLeft: "1px solid #171B2E",
              borderBottom: "1px solid #171B2E",
            }}
          >
            <Flex
              vertical
              justify="center"
              style={{ height: "100%", marginLeft: 16 }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#8D8E92",
                  marginBottom: 8,
                }}
              >
                Nationality
              </h3>
              <Flex align="center">
                <Image
                  preview={false}
                  alt="team"
                  src="/images/Spain.svg"
                  width={24}
                  height={24}
                />
                <h2
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    marginLeft: 8,
                  }}
                >
                  {player.nationality.name}
                </h2>
              </Flex>
            </Flex>
          </Col>
          <Col
            span={12}
            style={{
              height: 68,
              borderLeft: "1px solid #171B2E",
              borderBottom: "1px solid #171B2E",
            }}
          >
            <Flex
              vertical
              justify="center"
              style={{ height: "100%", marginLeft: 16 }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#8D8E92",
                  marginBottom: 8,
                }}
              >
                Date of birth
              </h3>
              <Flex align="center">
                <Image
                  preview={false}
                  alt="team"
                  src="/images/date.svg"
                  width={24}
                  height={24}
                />
                <Flex
                  vertical
                  style={{
                    marginLeft: 8,
                  }}
                >
                  <h2
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {formatDate(Number(player.dateOfBirthTimestamp))}
                  </h2>
                  <h2
                    style={{
                      fontSize: 11,
                      fontWeight: 400,
                      color: "#AAAAAA",
                    }}
                  >
                    {calculateAge(Number(player.dateOfBirthTimestamp))} years
                    old
                  </h2>
                </Flex>
              </Flex>
            </Flex>
          </Col>
          <Col
            span={12}
            style={{
              height: 68,
              borderLeft: "1px solid #171B2E",
              borderBottom: "1px solid #171B2E",
            }}
          >
            <Flex
              vertical
              justify="center"
              style={{ height: "100%", marginLeft: 16 }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#8D8E92",
                  marginBottom: 8,
                }}
              >
                Height
              </h3>
              <Flex align="center">
                <Image
                  preview={false}
                  alt="team"
                  src="/images/Height.svg"
                  width={24}
                  height={24}
                />
                <h2
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    marginLeft: 8,
                  }}
                >
                  {player.height} cm
                </h2>
              </Flex>
            </Flex>
          </Col>
          <Col
            span={12}
            style={{
              height: 68,
              borderLeft: "1px solid #171B2E",
              borderBottom: "1px solid #171B2E",
            }}
          >
            <Flex
              vertical
              justify="center"
              style={{ height: "100%", marginLeft: 16 }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#8D8E92",
                  marginBottom: 8,
                }}
              >
                Preferred foot
              </h3>
              <Flex align="center">
                <Image
                  preview={false}
                  alt="team"
                  src="/images/Foot.svg"
                  width={24}
                  height={24}
                />
                <h2
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    marginLeft: 8,
                  }}
                >
                  {player.preferredFoot || "-"}
                </h2>
              </Flex>
            </Flex>
          </Col>
          <Col
            span={12}
            style={{
              height: 68,
              borderLeft: "1px solid #171B2E",
            }}
          >
            <Flex
              vertical
              justify="center"
              style={{ height: "100%", marginLeft: 16 }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#8D8E92",
                  marginBottom: 8,
                }}
              >
                Jersey number
              </h3>
              <Flex align="center">
                <Image
                  preview={false}
                  alt="team"
                  src="/images/Jersey.svg"
                  width={24}
                  height={24}
                />
                <h2
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    marginLeft: 8,
                  }}
                >
                  -
                </h2>
              </Flex>
            </Flex>
          </Col>
          <Col
            span={12}
            style={{
              height: 68,
              borderLeft: "1px solid #171B2E",
            }}
          >
            <Flex
              vertical
              justify="center"
              style={{ height: "100%", marginLeft: 16 }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#8D8E92",
                  marginBottom: 8,
                }}
              >
                Position
              </h3>
              <Flex align="center">
                <Image
                  preview={false}
                  alt="team"
                  src="/images/Football.svg"
                  width={24}
                  height={24}
                />
                <h2
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    marginLeft: 8,
                  }}
                >
                  {player.position || "-"}
                </h2>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
