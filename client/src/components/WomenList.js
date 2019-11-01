import React from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'


class WomenList extends React.Component{
    constructor(){
        super();
        this.state = {
            players: []
        }
    }


  componentDidMount() {
      axios.get('http://localhost:5000/api/players')
      .then(res => {
          console.log(res)
          this.setState({
              players: res.data
          })
      })
      .catch(error => {
          console.log('Error', error)
      })
  }


    render(){
        return(
            <div>
                {this.state.players.map( player => (
                 <PlayerCard player ={player}/> 
                ))}
            </div>
        )
    }
}

export default WomenList; 