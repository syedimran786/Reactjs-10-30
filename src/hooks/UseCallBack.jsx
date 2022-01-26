import React,{useState,useCallback} from 'react';
import Button from './Button';
import Data from './Data';
import Jspiders from './Jspiders';

function UseCallBack() 
{

    let [age,setage]=useState(23);
    let [sal,setsal]=useState(5000);

    let updateage=useCallback(()=>
    {
        setage(age+1)
    },[age])

    let updatesal=useCallback(()=>
    {
        setsal(sal+200)
    }, [sal]);
    

  return <div>
      <Jspiders/>
      <Data text="Age" val={age}/>
      <Button updatedata={updateage}>Increment Age</Button>
      <Data text="Salary" val={sal}/>
      <Button updatedata={updatesal}>Increment Salary</Button>
  </div>;
}

export default UseCallBack;
