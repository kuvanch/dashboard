import { Content } from 'antd/lib/layout/layout'
import React, { FC } from 'react'

export const ContentPage:FC = ({children}) => {
    return (
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
    )
}