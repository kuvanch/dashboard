import React, { useState } from 'react'
import {ModalComponent, TableComponent, UploadComponent} from '../components'
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
            key: "title",
        },
        {
            title: "description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "time",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "rasm",
            dataIndex: "image",
            key: "image",
        },
        {
            title: "Count",
            dataIndex: "count",
            key: "count",
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
              <Form layout='vertical'>
                <Form.Item label='Title'>
                    <Input/>
                </Form.Item>
                <Form.Item label='description'>
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item label='Rasm'>
                    <UploadComponent/>
                </Form.Item>
              </Form>
           </ModalComponent>
        </>
    )
}

export default News