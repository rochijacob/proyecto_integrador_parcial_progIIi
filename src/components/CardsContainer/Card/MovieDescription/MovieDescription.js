import React, { Component } from 'react'
//Antd
import { Button, Descriptions, Typography } from 'antd'

const {Paragraph} = Typography

export default class MovieDescription extends Component {
    constructor(props){
        super(props)
        this.state = {
            datazos: false,
            text: 'Ver Más'
        }
    }

    verMas(){
        if(this.state.datazos){
            this.setState({
                datazos: false,
                text: 'Ver Más'
            })
        }else {
        this.setState({
            datazos: true,
            text: 'Ver Menos'
        })
        }

    }
  render() {
    const {overview, vote_average, release_date, popularity} = this.props.info
    return (
      <div>
          <Paragraph>{overview}</Paragraph>
        <Button onClick={() => this.verMas()}>{this.state.text}</Button>
        {this.state.datazos && 
        <Descriptions bordered column={1} size={'small'}>
            <Descriptions.Item label='Fecha de Estreno'>{release_date}</Descriptions.Item>
            <Descriptions.Item label='Puntaje'>{vote_average}</Descriptions.Item>
            <Descriptions.Item label='Popularidad'>{popularity}</Descriptions.Item>
        </Descriptions>
        }
    </div>
    )
  }
}
