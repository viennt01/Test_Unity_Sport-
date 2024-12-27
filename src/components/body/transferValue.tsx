import { Col, Flex, Image, Row } from "antd";

export default function TransferValue() {
  const listChelsea = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <Row
      style={{
        maxWidth: 1226,
        width: "100%",
        background: "#020c20",
        borderRadius: 8,
        color: "#FFFFFF",
        marginTop: 24,
      }}
    >
      <Col span={12} xs={24} sm={24} md={12}>
        <Flex vertical style={{ padding: 24 }}>
          <Flex>
            <h3
              style={{
                fontSize: 14,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              TRANSFER VALUE
            </h3>
          </Flex>
          <Flex vertical>
            <Image
              alt="chart"
              src="/images/chart.png"
              width={358}
              height={192}
              style={{
                marginRight: 24,
              }}
            />
            <Flex justify="space-between">
              <Flex align="center">
                <Image
                  alt="Line dot"
                  src="/images/LineDot.png"
                  width={20}
                  style={{
                    marginRight: 24,
                  }}
                />
                <h5
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#8D8E92",
                    marginLeft: 8,
                  }}
                >
                  Current player value
                </h5>
              </Flex>
              <h5
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#8D8E92",
                  marginLeft: 8,
                }}
              >
                11.6M $
              </h5>
            </Flex>
            <Flex
              justify="space-between"
              style={{
                marginTop: 12,
              }}
            >
              <Flex align="center">
                <Image
                  alt="Line solid"
                  src="/images/LineSolid.png"
                  width={20}
                  style={{
                    marginRight: 24,
                  }}
                />
                <h5
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#8D8E92",
                    marginLeft: 8,
                  }}
                >
                  Transfer fee
                </h5>
              </Flex>
              <h5
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#8D8E92",
                  marginLeft: 8,
                }}
              >
                (Highest) 66M
              </h5>
            </Flex>
          </Flex>
        </Flex>
      </Col>
      <Col
        span={12}
        xs={24}
        sm={24}
        md={12}
        style={{
          borderLeft: "1px solid #171B2E",
          padding: "0 16px",
        }}
      >
        {listChelsea.map((item, index) => {
          const isLastItem = index === listChelsea.length - 1;
          return (
            <Flex
              key={item.id}
              justify="space-between"
              align="center"
              style={{
                borderBottom: isLastItem ? "none" : "1px solid #272A31",
                height: 63,
              }}
            >
              <Flex>
                <Image
                  alt="chelsea"
                  src="/images/chelsea.png"
                  preview={false}
                  width={36}
                  style={{
                    marginRight: 24,
                  }}
                />
                <Flex
                  vertical
                  justify="center"
                  style={{
                    fontWeight: 400,
                    marginLeft: 8,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 13,
                      marginBottom: 6,
                    }}
                  >
                    Chelsea
                  </h3>
                  <h4
                    style={{
                      fontSize: 11,
                      color: "#8D8E92",
                    }}
                  >
                    30 Jun 2020
                  </h4>
                </Flex>
              </Flex>
              <Flex
                vertical
                justify="center"
                align="flex-end"
                style={{
                  fontWeight: 400,
                  color: "#48FF5A",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                  }}
                >
                  -
                </div>
                <h4
                  style={{
                    fontSize: 11,
                  }}
                >
                  End of loan
                </h4>
              </Flex>
            </Flex>
          );
        })}
      </Col>
    </Row>
  );
}
