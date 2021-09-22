import React from 'react'
import { TableComponent } from '../components'

export const Consultaions = () => {
    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "FIO",
            dataIndex: "fullname",
            key: "id",
        },
        {
            title: "Mutaxassis",
            dataIndex: "expert",
            key: "id",
        },
        {
            title: "Rasm",
            dataIndex: "image",
            key: "id",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "id",
        },
      ];
      const dataSource = [
        {
          id: "1",
          fullname: "Turtkul hospital",
          expert: "10 Downing Street",
          image: '+999999999',
          email: 'aaaaaa',
        }
      ];
    return (
        <>
            <TableComponent title='Konsultatsiya otuvchilar' dataSource={dataSource} columns={columns}/>
        </>
    )
}
