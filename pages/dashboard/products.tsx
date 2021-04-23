import React from 'react';
import { Table, Tag, Space, Button,Modal,Input,Select} from 'antd';
import { useState } from "react"
import Icon from "@ant-design/icons";
import {db} from '../utils/firebase-config';
import { useEffect } from 'react';

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
    name: 'Devil',
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
    
      onFilter: (value, record) => record.category.indexOf(value) === 0,
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


function onChange( filters, sorter) {
  console.log('params', filters, sorter);
}



const sort = () => {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');


  useEffect(() => {
    console.log('useEffect Hook!!!');

    db.collection('todos').orderBy('datetime', 'desc').onSnapshot(snapshot => {
      console.log('Firebase Snap!');
      setTodos(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          name: doc.data().todo,
          datatime: doc.data().datatime
        }
      }))
    })

  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      datetime: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete().then(res => {
      console.log('Deleted!', res);
    });
  }

  const openUpdateDialog = (todo) => {
    setOpen(true);
    setToUpdateId(todo.id);
    setUpdate(todo.name);
  }

  const editTodo = () => {
    db.collection('todos').doc(toUpdateId).update({
      todo: update
    });
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };




  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleUpdate = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return(
        <div>
          <Button type="primary" onClick={showModal}>
            Add Dealer
      </Button>
      <Modal title="Add Dealer" visible={isModalVisible} onOk={handleUpdate} onCancel={handleCancel}>
      <div>
            <Input
              className="all-inputs"
              size="large"
              placeholder="Enter Id"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              
            />
            <Input
              className="all-inputs"
              size="large"
              placeholder="Enter Name"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              
            />
            <Input
              className="all-inputs"
              size="large"
              placeholder="Enter category"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              
            />
            
            
          </div>
      </Modal>
            <Table dataSource={dataSource} onChange={onChange} columns={columns}  className="pt-5 p-6 w-auto content-center" />
        </div>
    )
}
export default(sort)