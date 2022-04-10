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
    state = {
        collapsed: true
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    onSearch = value => console.log(value);
  render() {
      const {collapsed} = this.state
    return (
        <Layout>
        <Header className='header flex-menu'>
        <Title level={3} style={{color: 'white', margin: 0}}>Movie App</Title>
        <div className='flex-menu' >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item icon={<AppstoreOutlined />} key='0'></Menu.Item>
            <Menu.Item icon={<BarsOutlined />} key='1'></Menu.Item>
        </Menu>
        <Search placeholder="input search text" onSearch={this.onSearch} enterButton style={{maxWidth: 300}} />
        </div>
      </Header>
      </Layout>
    )
  }
}

export default Navbar