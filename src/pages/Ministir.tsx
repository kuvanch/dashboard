/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input,Form, Space, Button, Row, Col, Popconfirm } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ModalComponent, TableComponent, UploadComponent } from '../components'
import { addKeyObj } from '../helpers/addKeyObj';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IMinisterData } from '../interfaces';

export const Ministir = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [form, setForm] = useState({} as IMinisterData)
    const [refresh, setRefresh] = useState<boolean>(false)
    const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form,[e.target.name]: e.target.value})
    }
    const showModal = () => {
      setIsModalVisible(true);
    };
    const columns = [
        {
          title: "#",
          dataIndex: "num",
          key: "num",
        },
        {
          title: "Familiya",
          dataIndex: "lastName",
          key: "lastName",
        },
        {
            title: "Ism",
            dataIndex: "firstName",
            key: "firstName",
        },
        {
            title: "Otasining ismi",
            dataIndex: "middleName",
            key: "middleName",
        },
        {
            title: "Malumot",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Telefon",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "Pochta",
            dataIndex: "email",
            key: "email",
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (value) => <Space>
                <Button ghost type='primary' onClick={showModal}><EditOutlined /></Button>
                <Popconfirm placement="topLeft" title='Siz ochirmoqchimisiz' onConfirm={()=> onDelete(value.id)} okText="Ha" cancelText="Yoq">
                  <Button danger><DeleteOutlined /></Button>
                </Popconfirm>
              </Space>,
        }
      ];
    const {getAllMinister, addMinister,deleteMinister} = useActions()
    const {data,isLoading} = useTypedSelector(state => state.minister)
    useEffect(() => {
      getAllMinister()
    }, [refresh])
    const newData = addKeyObj(data)

    const onDelete = async (id) => {
      await deleteMinister(id)
      setRefresh(!refresh)
    }

    const onSend = async () => {
      await addMinister(form)
      setForm({} as IMinisterData)
      setIsModalVisible(false)
      setRefresh(!refresh)
    }
    return (
        <>
          <TableComponent loading={isLoading} showModal={showModal} title='Vazirlar royhati' dataSource={newData} columns={columns}/>
          <ModalComponent title='Министер' handleOk={onSend} width={1000} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
              <Form layout='vertical' >
                <Row gutter={20}>
                  <Col span={12}>
                    <Form.Item label='Familiya'>
                      <Input name='lastName' value={form.lastName} onChange={onChange}/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Ism'>
                      <Input name='firstName' value={form.firstName} onChange={onChange}/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Otasining Ismi'>
                      <Input name='middleName' value={form.middleName} onChange={onChange}/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Telefon raqam'>
                      <Input name='phoneNumber' value={form.phoneNumber} onChange={onChange}/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Elektron pochta'>
                      <Input name='email' type='email' value={form.email} onChange={onChange}/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label='Malumot'>
                      <Input.TextArea name='description' value={form.description} rows={4} onChange={onChange}/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label='Rasm' name='photoId'>
                      <UploadComponent imgUpload={form} setImgUpload={setForm}/>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
           </ModalComponent>
        </>
    )
}
