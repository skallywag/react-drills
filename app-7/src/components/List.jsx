import React from 'react'
import Todo from './Todo'


function List(props){
    console.log(props);

    let list = props.tasks.map((element, idx) => {
        return <Todo key={idx} task={element} />
    })

    return (
        <div>{list}</div>
    )
}



export default List