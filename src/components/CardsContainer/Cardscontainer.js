import React, { Component } from 'react'
//Typography
import { Pagination, Spin } from 'antd'
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
          <Pagination defaultCurrent={this.props.page} total={5000} showSizeChanger={false} onChange={this.props.pagination} style={{padding: 10}}/>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: this.props.card ? 'column' : 'row'}}>
            {results.map((result) => (
              <SingleCard key={result.id} result={result} delete={(id, title) => this.props.delete(id, title)} card={this.props.cards}/>
          ))}
          </div>

      </div>
    )
    }

  }
}

export default Cardscontainer