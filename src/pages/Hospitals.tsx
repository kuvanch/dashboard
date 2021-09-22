import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space,Form, Input} from 'antd';
import React, { useState } from 'react'
import { ModalComponent, TableComponent } from '../components'

export const Hospitals = () => {
      const columns = [
        {
          title: "#",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Shifoxona nomi",
          dataIndex: "name",
          key: "name",
        },
        {
            title: "Manzil",
            dataIndex: "address",
            key: "name",
        },
        {
            title: "Telefon raqami",
            dataIndex: "telefon",
            key: "age",
        },
        {
            title: "Shifoxona admini",
            dataIndex: "admin",
            key: "age",
        },
        {
            title: "Malumot",
            dataIndex: "info",
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
          name: "Turtkul hospital",
          address: "10 Downing Street",
          telefon: '+999999999',
          admin: 'aaaaaa',
          info: 'ssssss'
        }
      ];
      const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

      const showModal = () => {
        setIsModalVisible(true);
      };
    return (
        <>
           <TableComponent showModal={showModal} title='Shifoxonalar' dataSource={dataSource} columns={columns}/>
           <ModalComponent isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
              <Form layout='horizontal'>
                <Form.Item label='Shifoxona nomi'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Manzil'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Telefon raqami'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Shifoxona admini'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Malumot'>
                    <Input/>
                </Form.Item>
              </Form>
           </ModalComponent>
        </>
    )
}
