import React, { Component } from 'react'
//Typography
import { Spin, Button, Alert } from 'antd'
import SingleCard from './Card/SingleCard'


export class Cardscontainer extends Component {

  render() {
    const {results} = this.props.datos

    console.log('props', this.props)

    if(this.props.datos === '') {
        return (
            <div>
                <Spin />
            </div>
        )
    } else {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button type='primary' onClick={() => this.props.bringMore()} style={{margin: 10}}>
            Traer mas peliculas
          </Button>
          {results.length > 0 ? 
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: this.props.card ? 'column' : 'row'}}>
                    {results.map((result, id) => (
                      <SingleCard key={id} result={result} delete={(id, title) => this.props.delete(id, title)} card={this.props.cards}/>
                  ))}
                  </div> :
                  <Alert message='No hemos encontrado ese titulo' type='error' />
           }

      </div>
    )
    }

  }
}

export default Cardscontainer