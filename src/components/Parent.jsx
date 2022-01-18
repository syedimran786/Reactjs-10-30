import React, { Component,PureComponent } from 'react'
import ClickCounter from './ClickCounter'
import PureClickCounter from './PureClickCounter'

export default class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"dinga"
        }
    }

    updateName1=()=>
    {
        this.setState({name:"raja"})
    }

    updateName2=()=>
    {
        this.setState({name:"rani"})
    }
    
    render() {

       
        return (
            <div>
                <PureClickCounter name={this.state.name}/>
                {/* <PureClickCounter/> */}
                <button onClick={this.updateName1}>Raja</button>
                <button onClick={this.updateName2}>Rani</button>
            </div>
        )
    }
}
