import React, { FC } from 'react'
import { ITable } from '../../interfaces';
import { Button, Col, Row, Table, Typography } from 'antd'
import {Input} from 'antd';

export const TableComponent:FC<ITable> = ({dataSource,columns,title,value,onChange,showModal}:ITable) => {
    const { Search } = Input;
    const onSearch = (value:string) => console.log(value);
    return  <Table 
        title={() => (
            <Row justify='space-between' align='middle'>
                <Col span={6}>
                    <Typography.Title style={{marginBottom: 0}} level={4}>{title}</Typography.Title>
                </Col>
                <Col span={8} offset={8}>
                    <Search  placeholder="input search text" onSearch={onSearch} enterButton />
                </Col>
                <Col span={2}>
                    <Button type='primary' onClick={showModal}>
                        Qoshish
                    </Button>
                </Col>
            </Row>
        )}
        dataSource={dataSource} 
        columns={columns}
        bordered
        />;
};
