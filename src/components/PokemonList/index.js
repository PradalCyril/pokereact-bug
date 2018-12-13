import React, {Component} from 'react';
import Pokemon from '../Pokemon/index'

class PokemonList{

    constructor(props){
        super(props)
        this.state = {
            pokeList: [], //949
            limit : 20
        }
    }


    handleClick(){
        this.setState({
            limit: this.state.limit +20
        })
    }

    componentDidMount(){
        fetch('https://heuristic-visvesvaraya-fdadde.netlify.com/data/api/v2/pokemon/index.json')
        .then(res => res.json() )
        .then(data => {
            this.state.pokeList = data.results
           
        })
    }

    render(){
        const PokeList = this.state.pokeList.slice(0, this.state.limit).map((elem, index)=> {
            return (
               <Pokemon key={index} name={elem.name} lien={elem.url} />
            )
        })
        return(
            
            <ul>
                {PokeList}
            </ul>

            <button onClick={this.handleClick}>Load more</button>
      
        )
    }

}

export default PokemonList;