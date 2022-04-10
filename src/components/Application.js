import React, { Component } from 'react'
import Navbar from './NavigationBar/Navbar'
import Cardscontainer from './CardsContainer/Cardscontainer'

export class Application extends Component {
    constructor(props){
        super(props)
        this.state = {
            datos: '',
            cards: true,
            loading: false,
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=e7a4550e419f47528855f7ca93b7dd7a')
        .then(response => response.json())
        .then(
            data => {
                this.setState({datos: data})
                this.setState({loading: false})
            }
        ).
        catch(error => console.log(error))
    }

    componentDidUpdate(){
        console.log(this.state.datos)
    }

  render() {
    return (
        <div>
        <Navbar />
        <Cardscontainer datos={this.state.datos}/>
        </div>
    )
  }
}

export default Application