import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ISidebar } from '../../interfaces'
import { RouteNames, routes } from '../../router'
import { useLocation } from 'react-router-dom'


export const Sidebar:FC<ISidebar> = ({collapsed}) => {
    const location = useLocation()
    return (
        <Sider theme='dark' trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme='dark' mode="inline" defaultSelectedKeys={[RouteNames.HOME]} selectedKeys={[location.pathname]}>
            {
              routes.map(item => (
                <Menu.Item key={item.path} icon={<item.icon className={!collapsed ? '' : 'sidebar__icon'}/>}>
                  <Link to={item.path}>{!collapsed && item.title}</Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
    )
}

