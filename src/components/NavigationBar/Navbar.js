import React, { Component } from 'react'
//Antd
import { Input, Layout, Menu, Typography } from 'antd'
import {
    AppstoreOutlined,
    BarsOutlined,
  } from '@ant-design/icons';
//Styling
import './Navbar.css'

const {Header} = Layout
const {Search} = Input
const {Title} = Typography

export class Navbar extends Component {

  render() {
    return (
        <Layout>
        <Header className='header flex-menu'>
        <Title level={4} style={{color: 'white', margin: 0}}>Movie</Title>
        <div className='flex-menu' >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item icon={<AppstoreOutlined />} key='0' onClick={() => this.props.change()}></Menu.Item>
            <Menu.Item icon={<BarsOutlined />} key='1' onClick={() => this.props.change()}></Menu.Item>
        </Menu>
        <Search placeholder="input search text" onSearch={(value) => this.props.search(value)} enterButton style={{maxWidth: 300, padding: '10px 0 10px'}} />
        </div>
      </Header>
      </Layout>
    )
  }
}

export default Navbar