import { BankOutlined, ContainerOutlined, HomeOutlined, PlusSquareOutlined,  UserSwitchOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ISidebar } from '../../interfaces'

export const Sidebar:FC<ISidebar> = ({collapsed}) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Menu.Item className='menu__item' key="0" icon={<HomeOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/'>{!collapsed && 'Bosh sahifa'}</Link>
            </Menu.Item>
            <Menu.Item className='menu__item' key="1" icon={<PlusSquareOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/hospitals'>{!collapsed && 'Shifoxonalar'}</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ContainerOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/news'>{!collapsed && 'Yangiliklar'}</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserSwitchOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/consultations'>{!collapsed && 'Online Konsultasiya'}</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BankOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/ministers'>{!collapsed && 'Vazirlik'}</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

