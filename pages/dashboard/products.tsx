import React from 'react';
import { Table, Tag, Space, Button } from 'antd';

const dataSource = [{
   key: '1',
   id:'1',
   name: 'John',
   category: "cards",
   created_at:"Apr 1"
   
  },
  {
    key: '2',
    id:'2',
    name: 'Baskaran',
    category: "cards",
    created_at:"Mar 21",
   
  },
  {
    key: '3',
    id:'3',
   name: 'valar',
   category: "cards",
   created_at:"Mar 29",
    
  },
  {
    key: '4',
    id:'4',
    name: 'kanna',
    category: "Banners",
    created_at:"Feb 28",
    
  },
  {
    key: '5',
    id:'5',
    name: 'John',
    category: "Banners",
    created_at:"May 15",
    
  },
  {
    key: '6',
    id:'6',
    name: 'Devi',
    category: "Banners",
    created_at:"Mar 31",
    
  },
];
  

const columns = [
     {
       title:'id',
       dataIndex:'id',
       key:'id',
       sorter: (a, b) => a.id - b.id,
     },


    {
      title: 'Name',
      dataIndex: 'name',
      key:'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend','ascend'],
    },
    
    {
      title: 'Category',
      dataIndex: 'category',
      key:'category',
      filters: [
        {
          text: 'cards',
          value: 'cards',
        },
        {
          text: 'Banners',
          value: 'Banners',
        },
       ],
    
      onFilter: (value: any, record: { category: string | any[]; }) => record.category.indexOf(value) === 0,
      sorter: (a, b) => a.category.length - b.category.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title:'Created_at',
        dataIndex:'created_at',
        key:'created_at',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => {
        return (
          
          <Space>
            <span><a>Edit</a></span>
           <span><a>Delete</a></span>
          </Space>
        );
      }
    },
  ];

function onChange( filters: any, sorter: any) {
  console.log('params', filters, sorter);
}



const sort = () => {
    return(
        <div>
            <Table dataSource={dataSource} onChange={onChange} columns={columns}  className="pt-5 p-6 w-auto content-center" />
        </div>
    )
}
export default(sort)