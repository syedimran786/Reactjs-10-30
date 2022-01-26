import React,{useState,useEffect,useRef} from 'react';

function UseRef() {
    let [count,setcount]=useState(0);

let interval=useRef();

    let updatecount=()=>
    {
        setcount(p=>p+1)
    }

useEffect(() => {
 interval.current=setInterval(updatecount,1000)

  return () => {
    clearInterval(interval.current)
  };
}, []);

    



  return <div>
      <h1>Count:{count} </h1>
      <button onClick={()=>
    {
        clearInterval(interval.current)
    }}>Stop Counter</button>
  </div>;
}

export default UseRef;
