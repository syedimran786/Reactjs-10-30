import React,{useState} from 'react'
import PureClickCounter from './PureClickCounter';

function ClickCounter(props) {

   
    return (
        <div>
             
             {  console.log("Hello I am Normal component")}
             <h1>Normal Component  Name: {props.name}</h1>
        </div>
    )
}

export default ClickCounter
