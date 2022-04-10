import React, { Component } from 'react'
import Navbar from './NavigationBar/Navbar'
import Cardscontainer from './CardsContainer/Cardscontainer'

export class Application extends Component {
    constructor(props){
        super(props)
        this.state = {
            datos: '',
            cards: true,
            page: 1,
            loading: false,
        }
    }

    fetchApi(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e7a4550e419f47528855f7ca93b7dd7a&page=${this.state.page}&language=es`)
        .then(response => response.json())
        .then(
            data => {
                this.setState({
                    datos: data,
                    page: data.page,
                    loading: false,
                })
            }
        ).
        catch(error => console.log(error))
    }

    componentDidMount(){
        this.setState({loading: true})
        this.fetchApi()
    }

    componentDidUpdate(){
        console.log(this.state.datos)
        console.log('state', this.state)
    }

    grid(){
        this.setState({
            cards: true
        })
    }

    list(){
        this.setState({
            cards: false
        })
    }

    pagination(pageNumber){
        this.setState({
            page: pageNumber
        }, () => {
            this.fetchApi()
        })
    }

  render() {
    return (
        <div>
        <Navbar />
        <Cardscontainer datos={this.state.datos} pagination={(pageNumber) => this.pagination(pageNumber)}/>
        </div>
    )
  }
}

export default Application