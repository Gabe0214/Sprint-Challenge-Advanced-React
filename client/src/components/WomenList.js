import React from 'react'
import axios from 'axios'


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
      })
      .catch(error => {
          console.log('Error', error)
      })
  }


    render(){
        return(
            <div>
                <h2>Testing</h2>
            </div>
        )
    }
}

export default WomenList; 