import React from 'react'
import {useTeam} from './hooks/useTeam'

const Team = () =>{
const [team, setTeam] = useTeam(true)

return(
    <div>
        <h3 onClick = {setTeam}>
            {team ? `I am with team: 💙` : `I am with team: 💚`}

        </h3>
    </div>
)


}

export default Team; 