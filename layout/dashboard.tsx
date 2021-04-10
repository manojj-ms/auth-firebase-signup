import { useState } from "react"
import React from 'react'
import { Layout, Menu ,Avatar, Dropdown} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import Link from 'next/link'




export default function DashboardLayout({children}) {


const router = useRouter()
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

  return (
    <div>
      <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
     <div className=""><p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans pt-10 pl-6">Dealer Management</p></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} className="pt-10">
     
      <Menu.Item key="1" icon={<UserOutlined />}>
      <Link href="/dashboard/products">Products</Link>
      </Menu.Item>
        
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link href="/dashboard/order">Orders</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
        <Link href="/dashboard/category">Category</Link>
        </Menu.Item>
        
        
      </Menu>
    </Sider>
    <Layout>
      <Header className=" text-right bg-white">
      <Avatar>S</Avatar>
        <span className=' text-black'>Superadmin</span>
        
        
        </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ minHeight: 569 }}>
           <p> {children}</p>
        </div>
      </Content>
    </Layout>
  </Layout>
   </div>
  )
}
