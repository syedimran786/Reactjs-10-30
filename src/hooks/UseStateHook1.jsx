import React,{useState} from 'react';

function UseStateHook1() {

    let mycolors=["red","pink","yellow","orange","green","blue"]
    let[colors,setColor]=useState([])
    let [count,setCount]=useState(0)

    let addColors=()=>
    {
        setColor([...colors,{cname:mycolors[count]}])
        setCount(count+1)
    
    }


  return <div>
      {colors.map((c,i)=>
      {
          return <li key={i}>{c.cname}</li>
      })}

      <button onClick={addColors}>Add Colors</button>
  </div>;
}

export default UseStateHook1;
