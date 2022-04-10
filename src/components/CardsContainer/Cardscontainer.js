import React, { Component } from 'react'
//Typography
import { Typography } from 'antd'
import SingleCard from './Card/SingleCard'


const {Title} = Typography

export class Cardscontainer extends Component {
    constructor(props){
        super(props)
    }
    
  render() {
    const {results} = this.props.datos
    console.log(results)
    
    if(this.props.datos === '') {
        return <Title>Loading...</Title>
    } else {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
          
          {results.map((result) => (
              <SingleCard result={result}/>
          ))}
      </div>
    )
    }

  }
}

export default Cardscontainer