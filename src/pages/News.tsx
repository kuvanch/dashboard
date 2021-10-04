import React, { ChangeEvent, useEffect, useState } from 'react'
import {ModalComponent, TableComponent, UploadComponent} from '../components'
import { Button, Form, Input, Space } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { INewsState } from '../interfaces';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addKeyObj } from '../helpers/addKeyObj';

const News = () => {
    
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [form, setForm] = useState({} as INewsState)
    const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form,[e.target.name]: e.target.value})
    }
    const showModal = () => {
      setIsModalVisible(true);
    };
    const {getAllBlogs,addBlog} = useActions()
    const {data, isLoading} = useTypedSelector(state => state.blog)
    const newData = addKeyObj(data)
    
    useEffect(() => {
        getAllBlogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const columns = [
        {
            title: "#",
            dataIndex: "num",
            key: "num",
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
            title: "rasm",
            dataIndex: "image",
            key: "image",
        },
        {
            title: "Views",
            dataIndex: "views",
            key: "views",
        },
        {
            title: "createdAt",
            dataIndex: "createdAt",
            key: "createdAt",
        },
        {
            title: "updatedAt",
            dataIndex: "updatedAt",
            key: "updatedAt",
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
      
    const onSendBlog = () => {
        addBlog(form)
        getAllBlogs()
    }
    return (
        <>
           <TableComponent loading={isLoading} showModal={showModal} title='Yangiliklar royhati' dataSource={newData} columns={columns}/>
           <ModalComponent isModalVisible={isModalVisible} handleOk={onSendBlog} setIsModalVisible={setIsModalVisible}>
              <Form layout='vertical' >
                <Form.Item label='Title'>
                    <Input name='title' onChange={onChange}/>
                </Form.Item>
                <Form.Item label='description' name='description'>
                    <Input.TextArea name='description' onChange={onChange}/>
                </Form.Item>
                <Form.Item label='Rasm' name='photoId'>
                    <UploadComponent imgUpload={form} setImgUpload={setForm}/>
                </Form.Item>
              </Form>
           </ModalComponent>
        </>
    )
}

export default News