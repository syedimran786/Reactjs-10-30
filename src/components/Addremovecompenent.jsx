import React,{useState} from 'react'
import LifecycleMethods from './LifecycleMethods'
import UseEffectHook from './UseEffectHook'

function Addremovecompenent() {

    const [isbool, setisbool] = useState(true)
    return (
        <div>

            {/* {isbool && <LifecycleMethods/>} */}
            {isbool && <UseEffectHook/>}

            {isbool+""}
            <hr />

            <button onClick={()=>
            {
                setisbool(!isbool)

                
            }}>Add/Remove</button>
        </div>
    )
}

export default Addremovecompenent
