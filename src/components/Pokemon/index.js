import React, {Component} from 'react'

class Pokemon extends Component{

    constructor(props){
        super(props);
        this.state = {
            image : '',
            moves: []
        }
    }

    componentDidMount(){
        fetch(`https://heuristic-visvesvaraya-fdadde.netlify.com/data${this.props.url}index.json`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                image : data.sprites.front_default,
                moves : data.moves
            })
        })
    }

    render(){
        const movesList = this.state.moves.map((elem, index)=>{
         
                <li key={i}> {elem.move.name}</li>
        
        })
        return (
            <li class="pokemon">
                <h2 className="pokemon-name"> "this.props.name" </h2>
                <img src={this.state.image} className="pokemon-thubnail"/>
                <ul className="pokemon-move">
                    {movesList}
                </ul>
            </li>
        )
    }

}

export default Pokemon;