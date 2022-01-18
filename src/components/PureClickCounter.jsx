import React,{useState} from 'react'

function PureClickCounter(props) {
  
    return (
        <div>
            {  console.log("Hello I am pure component")}
             <h1>Pure Component  Name: {props.name}</h1>
              
        </div>
    )
}

export default React.memo(PureClickCounter)
