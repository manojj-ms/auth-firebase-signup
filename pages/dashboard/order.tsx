
import React from 'react';
import { Table, Tag, Space, Button } from 'antd';



const dataSource = [{
    key: '1',
    id:'1',
    productname: 'cards',
    paymentstatus: "Success",
    created_at:"apr 1",
  },
  {
    key: '2',
    id:'2',
    productname: 'cards',
    paymentstatus: "Fail",
    created_at:"apr 1",
  },
  {
    key: '3',
    id:'3',
    productname: 'cards',
    paymentstatus: "Success",
    created_at:"apr 1",
  },
  {
    key: '4',
    id:'4',
    productname: 'cards',
    paymentstatus: "success",
    created_at:"apr 1",
  },
  {
    key: '5',
    id:'5',
    productname: 'cards',
    paymentstatus: "success",
    created_at:"apr 1",
  },
  {
    key: '6',
    id:'6',
    productname: 'cards',
    paymentstatus: "success",
    created_at:"apr 1",
  },
];
  
  const columns = [{
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
  sorter: (a, b) => a.id - b.id,
}, {
  title: 'ProductName',
  dataIndex: 'productname',
  key: 'productname',
  sorter:true,
}, {
  title: 'Paymentstatus',
  dataIndex: 'paymentstatus',
  key: 'paymentstatus',
},
{
  title: 'Created_at',
  dataIndex: 'created_at',
  key: 'created_at',
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
  const orders= () => {
      return(
          <div>
<Table dataSource={dataSource} columns={columns} className="pt-5 p-6 w-auto space-x-6 content-center" />
          </div>
      )
  }
  

  export default (orders)
