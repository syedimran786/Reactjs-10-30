import React, { Component } from 'react'

export default class LifecycleMethods extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:""
        }
    }

    interval;

    updateCount=()=>
    {
        // console.log("Counter updated");
        this.setState({count:this.state.count+1})
    }
    componentDidMount()
    {
        document.title=`Title from didMount ${this.state.count} times`;
        // this.interval=setInterval(this.updateCount,1000)

    }

    componentDidUpdate(prevProps, prevState)
    {

        if(prevState.count !== this.state.count)
        {
            document.title=`Title from DidUpdate ${this.state.count} times`;
            console.log("State updated");
        }
       
    }
    
    componentWillUnmount()
    {
        console.log("component removed Successfully");
        // clearInterval(this.interval)
    }

    updateName=()=>
    {
        this.setState({name:"Syed"})
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <input type="text" onChange={this.updateName}/>
                <button onClick={this.updateCount}>Update</button>
            </div>
        )
    }
}
