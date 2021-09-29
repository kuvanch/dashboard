import { ContainerOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { TableComponent } from '../components'
import { RouteNames } from '../router'

export const HospitalHome = () => {
    const columns = [
        {
          title: "#",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "FIO",
          dataIndex: "name",
          key: "name",
        },
        {
            title: "Manzil",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Telefon raqami",
            dataIndex: "telefon",
            key: "telefon",
        }
      ];
      const dataSource = [
        {
          id: "1",
          name: "Ivan Ivanov",
          address: "10 Downing Street",
          telefon: '+999999999',
          key: 0
        }
      ];
    return (
        <>
            <Typography.Title level={2}>Bosh sahifa</Typography.Title>
            <Row gutter={[20, 20]}>
                <Col span={12}>
                <Link to={RouteNames.DOCTORS}>
                    <Card>
                    <UsergroupAddOutlined
                        style={{ fontSize: "40px", textAlign: "center" }}
                    />
                    <Typography.Title level={3}>Shifokorlar</Typography.Title>
                    </Card>
                </Link>
                </Col>
                <Col span={12}>
                <Link to={RouteNames.KVP}>
                    <Card>
                    <ContainerOutlined
                        style={{ fontSize: "40px", textAlign: "center" }}
                    />
                    <Typography.Title level={3}>KVP</Typography.Title>
                    </Card>
                </Link>
                </Col>
                <Col span={24}>
                    <TableComponent title='086 oluvchilar royhati' dataSource={dataSource} columns={columns} />
                </Col>
            </Row>
        </>
    )
}
