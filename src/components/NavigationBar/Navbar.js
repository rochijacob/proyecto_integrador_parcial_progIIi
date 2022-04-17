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
const {Title} = Typography

export class Navbar extends Component {
  constructor(){ 
    super();
      //  Definimos los estados (memorias)
    this.state = {
        query:''
    }
}

preventDefault(evento){
  evento.preventDefault()
}

querySearch(event){
  console.log(event)
  this.setState({
      query: event.target.value
  },()=> this.props.search(this.state.query))
}

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
        <Input addonAfter={'Buscar'} placeholder='Busca una pelicula' value={this.state.query} onChange={(query)=> this.querySearch(query)} allowClear={true} />
        </div>
      </Header>
      </Layout>
    )
  }
}

export default Navbar