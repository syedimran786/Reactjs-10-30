import React,{useReducer} from 'react';

let initialState=
{
    firstCounter:0,
    secondCounter:0
}

let reducer=(currentState,action)=>
{
    switch (action) {
        case "increment1":
            return {...currentState,firstCounter:currentState.firstCounter+1}
        case "decrement1":
            return {...currentState,firstCounter:currentState.firstCounter-1}
        case "increment2":
            return {...currentState,secondCounter:currentState.secondCounter+1}
        case "decrement2":
            return {...currentState,secondCounter:currentState.secondCounter-1}
        case "reset":
            return initialState;
    
        default:
           return currentState
    }
}

function UseReducerWithObject() {

    let [count,dispatcher]=useReducer(reducer,initialState)

  return <div>

<h1>Counter One: {count.firstCounter}</h1>
<h1>Counter Two: {count.secondCounter}</h1>

<button onClick={()=>
{
    dispatcher('increment1')
}}>Increment1</button>
<button onClick={()=>
{
    dispatcher("decrement1")
}}>Decrement1</button>
<hr />
<button onClick={()=>
{
    dispatcher('increment2')
}}>Increment2</button>
<button onClick={()=>
{
    dispatcher("decrement2")
}}>Decrement2</button>

<hr />
<button onClick={()=>
{
    dispatcher("reset")
}}>Reset</button>
  </div>;
}

export default UseReducerWithObject;
