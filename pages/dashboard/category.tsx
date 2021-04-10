import React from 'react';
import { Table, Tag, Space, Button } from 'antd';


const dataSource = [{
   key: '1',
   id:'1',
   productname: 'cards',
   paymentstatus:'Success',
   created_at:"Apr 1"
   
  },
  {
    key: '2',
    id:'2',
    productname: 'letterhead',
    paymentstatus:'Success',
    created_at:"Mar 21",
   
  },
  {
    key: '3',
    id:'3',
    productname: 'banner',
    paymentstatus:'Success',
   created_at:"Mar 29",
    
  },
  {
    key: '4',
    id:'4',
    productname: 'cards',
    paymentstatus:'Fail',
    created_at:"Feb 28",
    
  },
  {
    key: '5',
    id:'5',
    productname: 'letterhead',
    paymentstatus:'Success',
    created_at:"May 15",
    
  },
  {
    key: '6',
    id:'6',
    productname: 'banner',
    paymentstatus:'Fail',
    created_at:"Mar 31",
    
  },
];
  

const columns= [
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



function onChange(  sorter) {
  console.log('params',sorter);
}

const sort = () => {
    return(
        <div>
            <Table dataSource={dataSource} onChange={onChange} columns ={columns}  className="pt-5 p-6 w-auto content-center" />
        </div>
    )
}
export default(sort)