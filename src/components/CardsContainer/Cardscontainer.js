import React, { Component } from 'react'
//Typography
import { Pagination, Spin, Typography } from 'antd'
import SingleCard from './Card/SingleCard'


const {Title} = Typography

export class Cardscontainer extends Component {
    constructor(props){
        super(props)
    }

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
          <Pagination defaultCurrent={this.props.page} total={5000} showSizeChanger={false} onChange={this.props.pagination}/>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {results.map((result) => (
              <SingleCard key={result.id} result={result}/>
          ))}
          </div>

      </div>
    )
    }

  }
}

export default Cardscontainer