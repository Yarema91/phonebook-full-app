import React from "react"

const Contact = ({name, number, id, onDelete}) => {
    return (
        
           <li >
                        <span>{name}: </span>
                        <span>{number}</span>
                        <button onClick={()=> onDelete(id)}>x</button>
                    </li> 
      
    )
}

export default Contact
