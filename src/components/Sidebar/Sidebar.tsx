import { BankOutlined, ContainerOutlined, HomeOutlined, PlusSquareOutlined,  UserSwitchOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ISidebar } from '../../interfaces'
import { RouteNames } from '../../router'
import { useLocation } from 'react-router-dom'


export const Sidebar:FC<ISidebar> = ({collapsed}) => {
    const location = useLocation()
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[RouteNames.HOME]} selectedKeys={[location.pathname]}>
            <Menu.Item className='menu__item'  key={RouteNames.HOME} icon={<HomeOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link  to='/'>
                  {!collapsed && 'Bosh sahifa'}
              </Link>
            </Menu.Item>
            <Menu.Item className='menu__item' key={RouteNames.HOSPITALS} icon={<PlusSquareOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/hospitals'>{!collapsed && 'Shifoxonalar'}</Link>
            </Menu.Item>
            <Menu.Item key={RouteNames.NEWS} icon={<ContainerOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/news'>{!collapsed && 'Yangiliklar'}</Link>
            </Menu.Item>
            <Menu.Item key={RouteNames.CONSULTATIONS} icon={<UserSwitchOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/consultations'>{!collapsed && 'Online Konsultasiya'}</Link>
            </Menu.Item>
            <Menu.Item key={RouteNames.MINISTERS} icon={<BankOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/ministers'>{!collapsed && 'Vazirlik'}</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

