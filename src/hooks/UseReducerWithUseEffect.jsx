import React,{useReducer,useEffect} from 'react';
import axios from "axios";

let initialState=
{
    isLoding:true,
    error:"",
    myUser:{}
}

let reducer=(currentState,action)=>
{
    switch (action.type) {
        case "fetch-data":
            return {isLoding:false,error:"",myUser:action.data}
        case "fetch-error":
            return {isLoding:false,error:"Oops Data Not Found!!!!!",myUser:{}}
        
        default:
            return currentState
    }
}

function UseReducerWithUseEffect() {

    let [user,dispatcher]=useReducer(reducer,initialState);

    useEffect(()=>
    {
        axios.get("https://api.github.com/users/defunkt").
        then(res=>
            {
                console.log(res.data);
                dispatcher({type:"fetch-data",data:res.data})
            }).
            catch(err=>
                {
                    dispatcher({type:"fetch-error"})
                })
    },[])

  return <div>
      <h1>{user.isLoding?<div className="loader">Loading...</div>:<img src={user.myUser.avatar_url}/>}</h1>
      <h1>{user.error?user.error:null}</h1>
  </div>;
}

export default UseReducerWithUseEffect;
