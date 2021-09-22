import React, { useState } from 'react'
import {ModalComponent, TableComponent} from '../components'
import { Button, Form, Input, Space } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const News = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "id",
        },
        {
            title: "description",
            dataIndex: "description",
            key: "id",
        },
        {
            title: "time",
            dataIndex: "time",
            key: "id",
        },
        {
            title: "rasm",
            dataIndex: "image",
            key: "id",
        },
        {
            title: "Count",
            dataIndex: "count",
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
          title: "Turtkul hospital",
          description: "10 Downing Street",
          time: '+999999999',
          image: 'aaaaaa',
          count: '111'
        }
      ];
    return (
        <>
           <TableComponent showModal={showModal} title='Yangiliklar royhati' dataSource={dataSource} columns={columns}/>
           <ModalComponent isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
              <Form layout='horizontal'>
                <Form.Item label='Title'>
                    <Input/>
                </Form.Item>
                <Form.Item label='description'>
                    <Input/>
                </Form.Item>
                <Form.Item label='time'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Count'>
                    <Input/>
                </Form.Item>
                <Form.Item label='Rasm'>
                    <Input/>
                </Form.Item>
              </Form>
           </ModalComponent>
        </>
    )
}

export default News
