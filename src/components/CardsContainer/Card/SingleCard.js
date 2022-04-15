import React, { Component } from 'react'
//Antd
import { Button, Card } from 'antd'
import MovieDescription from './MovieDescription/MovieDescription'

import './Card.css'


const {Meta} = Card

export class SingleCard extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <Card
      hoverable
      style={{ width: this.props.card ? 270 : 'auto', margin: 10, display:'flex', flexDirection: this.props.card ? 'column' : 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: this.props.card ? 'flex-start' :'center' }}
      cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${this.props.result.poster_path}`} style={{width: this.props.card ? '100%' : 150}}/>}
      actions={[<Button danger={true} onClick={() => this.props.delete(this.props.result.id, this.props.result.title)}>Eliminar</Button>]}
      size={'small'}
      >
        <Meta className='card-content' title={this.props.result.title} description={<MovieDescription info={this.props.result}/>} />
      </Card>
      
    )
  }
}

export default SingleCard