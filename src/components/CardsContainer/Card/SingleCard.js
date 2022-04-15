import React, { Component } from 'react'
//Antd
import { Button, Card } from 'antd'
import MovieDescription from './MovieDescription/MovieDescription'


const {Meta} = Card

export class SingleCard extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <Card
      hoverable
      style={{ width: 270, margin: 10 }}
      cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${this.props.result.poster_path}`}/>}
      actions={[<Button danger={true} onClick={() => this.props.delete(this.props.result.id, this.props.result.title)}>Eliminar Tarjeta</Button>]}
      size={'small'}
      >
        <Meta title={this.props.result.title} description={<MovieDescription info={this.props.result}/>} />
      </Card>
      
    )
  }
}

export default SingleCard