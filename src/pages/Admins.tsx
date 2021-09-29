import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input,Form, Space, Button, Row, Col } from 'antd'
import React, { useState } from 'react'
import { ModalComponent, TableComponent, UploadComponent } from '../components'

export const Admins = () => {
    const columns = [
        {
          title: "#",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Shifoxona nomi",
          dataIndex: "hospitalName",
          key: "name",
        },
        {
            title: "FIO",
            dataIndex: "fullname",
            key: "name",
        },
        {
            title: "manzil",
            dataIndex: "address",
            key: "age",
        },
        {
            title: "telefon raqam",
            dataIndex: "telefon",
            key: "age",
        },
        {
            title: "Rasm",
            dataIndex: "image",
            key: "age",
        },
        {
            title: "login",
            dataIndex: "login",
            key: "age",
        },
        {
            title: "parol",
            dataIndex: "password",
            key: "age",
        },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: () => <Space>
              <Button ghost type='primary' onClick={showModal}><EditOutlined /></Button>
              <Button danger><DeleteOutlined /></Button>
            </Space>,
        }
      ];
      const dataSource = [
        {
          id: "1",
          hospitalName: "Turtkul hospital",
          fullname: 'Ivan Ivanov',
          address: "10 Downing Street",
          telefon: '+999999999',
          rasm: 'aaaaaa',
          login: 'ssssss',
          password: 'ssssss',
        }
      ];
      const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

      const showModal = () => {
        setIsModalVisible(true);
      };
    return (
        <div>
            <TableComponent title='Shifoxona adminlari' showModal={showModal} dataSource={dataSource} columns={columns}/>
            <ModalComponent isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <Form layout='vertical'>
                <Row>
                    <Col span={24}>
                        <Form.Item label='FIO'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label='Shifoxona'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label='Manzil'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={11} offset={1}>
                        <Form.Item label='Telefon raqam'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label='Login'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={11} offset={1}>
                        <Form.Item label='Parol'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label='Rasm'>
                            <UploadComponent/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
           </ModalComponent>
        </div>
    )
}
