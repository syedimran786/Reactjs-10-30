import React,{useState,useEffect} from 'react';
import axios from 'axios'

function UseEffectApi() {

    const [users, setusers] = useState([]);

    useEffect(()=>
    {
        axios.get("https://api.github.com/users").
        then(res=>
            {
                console.log(res.data);
                setusers(res.data)
            }).
            catch(err=>
                {
                    console.log(err);
                })
    },[])

  return <div>

<input type="text" placeholder='enter user login name'/>
            <br /><br />
      {users.map(user=>
        {
            return <>
                <h1>{user.login}</h1>
                <img src={user.avatar_url} alt=""  height={200} width={200}/>
            </>
        })}
  </div>;
}

export default UseEffectApi;
