import React from 'react'
import { Card,Form, Input, Button, Typography, Row} from 'antd'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export const Login = () => {
    const { login } = useActions()
    const onFinish = (values: any) => {
        login(values)
    };
    const {isLoading} = useTypedSelector(state => state.auth)
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className='login'>
             <Card>
                <Row justify='center'>
                    <Typography.Title level={4}>
                        Kirish
                    </Typography.Title>
                </Row>
             <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                        label="Telefon raqam"
                        name="user_phone"
                        rules={[{ required: true, message: 'Iltimos login kiriting' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Parol"
                        name="user_password"
                        rules={[{ required: true, message: 'Iltimos parol kiriting' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Row justify='end'>
                            <Button loading={isLoading} type="primary" htmlType="submit">
                                Kirish
                            </Button>
                        </Row>
                    </Form.Item>
                </Form>
             </Card>
        </div>
    )
}
