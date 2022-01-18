import React,{useState,useEffect} from 'react'

function UseEffectHook() {
    const [count, setcount] = useState(0);
    const [name, setname] = useState("")

    let updateCount=()=>
    {
        console.log("Counter Updated");
        setcount(count+1)
    }    
    let interval;
   useEffect(()=>
   {
    console.log("UseEffect Called");
    document.title=`Title from useEffect ${count} times`;
    interval=setInterval(updateCount,1000)

    return ()=>
    {
        console.log("component removed Successfully");
        clearInterval(interval)
    }
   
   },[])

   

    let updateName=(e)=>
    {
      setname(e.target.value)
    }
    return (
        <div>
            <h1>UseEffect Count: {count}</h1>
            <input type="text" onChange={updateName} />
            {/* <button onClick={updateCount}>Update</button> */}
        </div>
    )
}

export default UseEffectHook
