import React from 'react'
import { useState } from 'react'

function NewTask(props){
    console.log(props);

    const [input, setInput] = useState('')

    function handleInputChange(value){
        setInput(value)
    }

    function handleAdd() {
        props.add(input)
        setInput('')
    }

    return (
        <div>
            <input value={input} onChange={(e) => handleInputChange(e.target.value)} placeholder='Enter new task' type="text" />
            <button onClick={handleAdd} >Add</button>
        </div>
    )
}


export default NewTask