
import React from 'react';
import { Table, Tag, Space, Button } from 'antd';



const dataSource = [{
    key: '1',
    id:'1',
    productname: 'cards',
    
  },
  {
    key: '2',
    id:'2',
    productname: 'cards',
    
  },
  {
    key: '3',
    id:'3',
    productname: 'cards',
    
  },
  {
    key: '4',
    id:'4',
    productname: 'cards',
    
  },
  {
    key: '5',
    id:'5',
    productname: 'cards',
    
  },
  {
    key: '6',
    id:'6',
    productname: 'cards',
    
  },
];
  
  const columns = [{
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'ProductName',
  dataIndex: 'productname',
  key: 'productname',
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
},];
  const category= () => {
      return(
          <div>
    <Table dataSource={dataSource} columns={columns} className="pt-5 p-6 w-auto space-x-8 content-center" />
          </div>
      )
  }
  

  export default (category)
