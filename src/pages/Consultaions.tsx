import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Form, Input } from 'antd';
import React, { useState } from 'react'
import { ModalComponent, TableComponent, UploadComponent } from '../components'

export const Consultaions = () => {
    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "FIO",
            dataIndex: "fullname",
            key: "id",
        },
        {
            title: "Mutaxassis",
            dataIndex: "expert",
            key: "id",
        },
        {
            title: "Rasm",
            dataIndex: "image",
            key: "id",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "id",
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
          fullname: "Turtkul hospital",
          expert: "10 Downing Street",
          image: '+999999999',
          email: 'aaaaaa',
        }
      ];
      const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

      const showModal = () => {
        setIsModalVisible(true);
      };
      
    return (
        <>
            <TableComponent title='Konsultatsiya otuvchilar' showModal={showModal} dataSource={dataSource} columns={columns}/>
            <ModalComponent title='Министер' isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <Form layout='vertical'>
                <Form.Item label='FIO'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Mutaxassiliki'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Email'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Rasm'>
                    <UploadComponent/>
                </Form.Item>
            </Form>
           </ModalComponent>
        </>
    )
}
