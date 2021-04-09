import React from 'react';
import { Table, Tag, Space, Button } from 'antd';




const dataSource = [{
    key: '1',
    id:'1',
    name: 'John',
    category: "cards",
    created_at:"apr 1",
  },
  {
    key: '2',
    id:'2',
    name: 'John',
    category: "cards",
    created_at:"apr 1",
  },
  {
    key: '3',
    id:'3',
    name: 'John',
    category: "cards",
    created_at:"apr 1",
  },
  {
    key: '4',
    id:'4',
    name: 'John',
    category: "Banners",
    created_at:"apr 1",
  },
  {
    key: '5',
    id:'5',
    name: 'John',
    category: "cards",
    created_at:"apr 1",
  },
  {
    key: '6',
    id:'6',
    name: 'John',
    category: "Banners",
    created_at:"apr 1",
  },
];
  
  const columns = [{
   
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
  sorter: (a, b) => a.id - b.id,
}, {
  
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
 sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend','ascend'],
  
}, {
  title: 'Category',
  dataIndex: 'category',
  key: 'category',
  filters: [
    { text: 'Cards', value: 'cards' },
    { text: 'Banners', value: 'banners' },
  ],
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

  const products= () => {
      return(
          <div>
<Table dataSource={dataSource} columns={columns} className="pt-5 p-6 w-auto content-center" />
          </div>
         
      )
  }
  

  export default (products)