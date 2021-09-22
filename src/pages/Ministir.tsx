import React from 'react'
import { TableComponent } from '../components'

export const Ministir = () => {
    const columns = [
        {
          title: "#",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "FIO",
          dataIndex: "fullname",
          key: "name",
        },
        {
            title: "Rasm",
            dataIndex: "image",
            key: "name",
        },
        {
            title: "Telefon raqami",
            dataIndex: "telefon",
            key: "age",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "age",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "age",
        },
      ];
      const dataSource = [
        {
          id: "1",
          fullname: "Turtkul hospital",
          image: "10 Downing Street",
          telefon: '+999999999',
          email: 'aaaaaa',
          description: 'ssssss'
        }
      ];
    return (
        <>
          <TableComponent title='Vazirlar royhati' dataSource={dataSource} columns={columns}/>   
        </>
    )
}
