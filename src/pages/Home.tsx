import {
  BankOutlined,
  ContainerOutlined,
  PlusSquareOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { TableComponent } from "../components";
import { RouteNames } from "../router";

const Home = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "name",
    },
    {
      title: "Shifohona nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Reyting",
      dataIndex: "rating",
      key: "age",
    }
  ];
  return (
    <>
      <Typography.Title level={2}>Bosh sahifa</Typography.Title>
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <Link to={RouteNames.HOSPITALS}>
            <Card>
              <PlusSquareOutlined
                style={{ fontSize: "40px", textAlign: "center" }}
              />
              <Typography.Title level={3}>Shifoxonalar</Typography.Title>
            </Card>
          </Link>
        </Col>
        <Col span={12}>
          <Link to={RouteNames.NEWS}>
            <Card>
              <ContainerOutlined
                style={{ fontSize: "40px", textAlign: "center" }}
              />
              <Typography.Title level={3}>Yangiliklar</Typography.Title>
            </Card>
          </Link>
        </Col>
        <Col span={12}>
          <Link to={RouteNames.CONSULTATIONS}>
            <Card>
              <UserSwitchOutlined
                style={{ fontSize: "40px", textAlign: "center" }}
              />
              <Typography.Title level={3}>
                Online Konsultatsiya
              </Typography.Title>
            </Card>
          </Link>
        </Col>
        <Col span={12}>
          <Link to={RouteNames.MINISTERS}>
            <Card>
              <BankOutlined style={{ fontSize: "40px", textAlign: "center" }} />
              <Typography.Title level={3}>Vazirlik</Typography.Title>
            </Card>
          </Link>
        </Col>
        <Col span={24}>
          <TableComponent title='Shifoxonalar reytingi' dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
