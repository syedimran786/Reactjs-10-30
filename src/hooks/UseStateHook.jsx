import React,{useState} from 'react';

function UseStateHook() {

    let [data,setData]=useState({fn:"",ln:"",add:""});

    let updateData=(e)=>
    {
        let {name,value}=e.target;
        setData({...data,[name]:value})
    }

    let submitData=(e)=>
    {
        console.log(data);
        e.preventDefault()
    }
    


  return <div>
                    <h1>{JSON.stringify(data)}</h1>
                <form action='' onSubmit={submitData}>
                    <input type="text" placeholder='First Name'
                    onChange={updateData} name='fn' /> <br /><br />

                    <input type="text" placeholder='Last Name'
                    onChange={updateData} name='ln' /> <br /><br />

                    <textarea onChange={updateData} name='add' placeholder='Address'></textarea>

                    <br /><br />

                    <button type='submit'>submit</button>
                </form>
        </div>;
}

export default UseStateHook;
