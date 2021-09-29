import React, { FC } from 'react'
import { MenuUnfoldOutlined,MenuFoldOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import { Col, Dropdown,  Menu, Row} from 'antd';
import { IHeader } from '../../interfaces';
import { useActions } from '../../hooks/useActions';


export const HeaderPage:FC<IHeader> = ({collapsed,handleTrigger}) => {
    const {logout} = useActions()

    const handleLogout = () => {
        logout()        
    }
    const menu = (
        <Menu>
          <Menu.Item key="0">
            {localStorage.getItem('name')}
          </Menu.Item>
          <Menu.Item key="1" onClick={handleLogout}>
              Chiqish
          </Menu.Item>
        </Menu>
    );
    return (
        <Header className="site-layout-background"  style={{ padding: 0 }}>
            <Row align='middle'>
                <Col span={1}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: handleTrigger,
                        })}
                </Col>
                <Col span={9} offset={1} style={{display: 'flex',alignItems: 'center'}}>
                    
                </Col>
                <Col span={1} offset={11}>
                    <BellOutlined onClick={handleTrigger} style={{fontSize: '22px', display: 'flex', alignItems: 'flex-end'}}/>
                </Col>
                <Col span={1}>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <UserOutlined style={{fontSize: '22px', display: 'flex', alignItems: 'flex-end'}} />
                    </Dropdown>
                </Col>
           </Row>
        </Header>
    )
}