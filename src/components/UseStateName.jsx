import React,{useState} from 'react'
import ClickCounter from './ClickCounter';

function UseStateName() {

    const [name, setName] = useState("dinga");

    let updateName1=()=>
    {
        setName("Raja")
    }

    let updateName2=()=>
    {
        setName("Rani")
    }

    return (
        <div>
            <ClickCounter name={name}/>
             <button onClick={updateName1}>Raja</button>
            <button onClick={updateName2}>Rani</button>
        </div>
    )
}

export default UseStateName
