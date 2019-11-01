import { useState } from 'react'


export const useTeam = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const toggleHandler = () => {
        setValue(value)
    }
   

    return [value, toggleHandler]
}