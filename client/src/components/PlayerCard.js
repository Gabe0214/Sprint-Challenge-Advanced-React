import React from 'react'



const PlayerCard = props => {
    return (
        <div className='App'>
         <h2>{props.player.name }</h2>
         <p>{props.player.country}</p>
        </div>
    )
}

export default PlayerCard