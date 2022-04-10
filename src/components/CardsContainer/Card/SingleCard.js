import React, { Component } from 'react'
//Antd
import { Card } from 'antd'


const {Meta} = Card

export class SingleCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Card
      hoverable
      style={{ width: 240, margin: 10 }}
      cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${this.props.result.poster_path}`} />}>
        <Meta title={this.props.result.title} description={this.props.result.overview} />
      </Card>
      
    )
  }
}

export default SingleCard