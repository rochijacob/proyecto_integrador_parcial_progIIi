import React, { Component } from 'react'
import Navbar from './NavigationBar/Navbar'
import Cardscontainer from './CardsContainer/Cardscontainer'
import { message, Spin } from 'antd'

export class Application extends Component {
    constructor(){
        super()
        this.state = {
            initialData: '',
            modifiedData: '',
            cards: true,
            page: 1,
        }
    }

    fetchApi(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e7a4550e419f47528855f7ca93b7dd7a&page=${this.state.page}&language=es`).then(response => response.json()).then(
            data => {
                if(this.state.initialData === '') {
                    this.setState({
                        initialData: data,
                        modifiedData: data,
                        page: this.state.page + 1,
                    })
                } else {
                    this.setState(prevState => ({
                        initialData: {...prevState.initialData, results: [...this.state.initialData.results, ...data.results]},
                        modifiedData: {...prevState.modifiedData, results: [...this.state.initialData.results, ...data.results]},
                        page: this.state.page + 1
                    }))
                }
            }
        ).catch(error => console.log(error))
    }

    componentDidMount(){
        this.fetchApi()
    }

    componentDidUpdate(){
        console.log(this.state.initialData)
        console.log('state', this.state)
    }

    changeDirection(){
        if (this.state.cards === false) {
                 this.setState({
            cards: true
        })   
        } else {
            this.setState({
                cards: false
            })  
        }

    }

    bringMore(){
        this.fetchApi()
    }

    delete(id, title){
        let notDeleted = this.state.modifiedData.results.filter(movie => movie.id !== id)

        this.setState(prevState => ({
            initialData: {...prevState.modifiedData, results: notDeleted},
            modifiedData: {...prevState.modifiedData, results: notDeleted}
        }))

        message.error(`Eliminaste ${title}`)
    }

    search(query){
        console.log('query', query)
        let searchResults = this.state.initialData.results.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))

        this.setState(prevState => ({
                modifiedData: {...prevState.modifiedData, results: searchResults}
            }))  
    }

  render() {
    return (
        <div>
        <Navbar search={(query)=> this.search(query)} change={() => this.changeDirection()}/>
        {this.state.modifiedData != '' ? <Cardscontainer datos={this.state.modifiedData} delete={(id, title)=> this.delete(id, title)} cards={this.state.cards} bringMore={() => this.bringMore()}/> : <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}><Spin /></div>}
        </div>
    )
  }
}

export default Application