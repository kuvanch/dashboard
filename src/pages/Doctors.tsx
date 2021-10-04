import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Col, Row, Form, Input, Space, Button} from 'antd'
import React, { useState } from 'react'
import { ModalComponent, TableComponent, UploadComponent } from '../components'

export const Doctors = () => {
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
            title: "Mutaxassislik",
            dataIndex: "address",
            key: "name",
        },
        {
            title: "toifa",
            dataIndex: "telefon",
            key: "age",
        },
        {
            title: "Rasm",
            dataIndex: "admin",
            key: "age",
        },
        {
            title: "Pochta",
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
          name: "Ivan Ivanov",
          address: "Urolog",
          telefon: 'Oliy',
          admin: 'Rasm',
          info: 'test@test.uz',
          key: 0
        }
      ];
      const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
      const [imgUpload, setImgUpload] = useState<File>();
      const showModal = () => {
        setIsModalVisible(true);
      };
      console.log(imgUpload);
      
    return (
        <>
            <TableComponent showModal={showModal} title='Shifoxonalar' dataSource={dataSource} columns={columns}/>
            <ModalComponent isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <Form layout='vertical'>
              <Row>
                  <Col span={12}>
                    <Form.Item label='FIO'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={1}>
                    <Form.Item label='Mutaxassislik'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='toifa'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={1}>
                    <Form.Item label='Pochta'>
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label='Rasm'>
                        <UploadComponent setImgUpload={setImgUpload}/>
                    </Form.Item>
                  </Col>
              </Row>  
            </Form>
           </ModalComponent>
        </>
    )
}