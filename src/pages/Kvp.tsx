import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Col, Row, Form, Input, Space, Button} from 'antd'
import React, { useState } from 'react'
import { ModalComponent, TableComponent } from '../components'

export const Kvp = () => {
    const columns = [
        {
          title: "#",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Nomi",
          dataIndex: "name",
          key: "name",
        },
        {
            title: "Manzil",
            dataIndex: "address",
            key: "name",
        },
        {
            title: "Telefon",
            dataIndex: "telefon",
            key: "age",
        },
        {
            title: "Mudir FIO",
            dataIndex: "admin",
            key: "age",
        },
        {
            title: "Masul shifokor",
            dataIndex: "info",
            key: "age",
        },
        {
            title: "Malumot",
            dataIndex: "desc",
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
          name: "Turtkul KVP",
          address: "Shoroxon OFY",
          telefon: '+9999999999',
          admin: 'Ivan Ivanov',
          info: 'Ivan Ivanov',
          desc: 'Shifoxona 2010-yil ochilib zor ishlamoqda gap yoq respect',
          key: 0
        }
      ];
      const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

      const showModal = () => {
        setIsModalVisible(true);
      };
    return (
        <>
            <TableComponent showModal={showModal} title='Shifoxonalar' dataSource={dataSource} columns={columns}/>
            <ModalComponent title='Министер' isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <Form layout='vertical'>
              <Row>
                  <Col span={24}>
                    <Form.Item label='KVP Nomi'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Manzil'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={1}>
                    <Form.Item label='Telefon'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Mudir FIO'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={1}>
                    <Form.Item label='Masul shifokor'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label='Malumot'>
                        <Input.TextArea/>
                    </Form.Item>
                  </Col>
              </Row>  
            </Form>
           </ModalComponent>
        </>
    )
}
