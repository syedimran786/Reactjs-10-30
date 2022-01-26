import React,{useContext} from 'react';
import {counterContext} from "./UseReducerWithUseContext"

function C() {

    let count=useContext(counterContext);
    console.log(count);


  return <div>
      <h1>Counter from C:{count.mycount}</h1>
      <button onClick={()=>{count.mydispatcher("increment")}}>increment</button>
      <button onClick={()=>{count.mydispatcher("decrement")}}>decrement</button>
      <button onClick={()=>{count.mydispatcher("reset")}}>reset</button>
  </div>;
}

export default C;
