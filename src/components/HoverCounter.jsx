import React, { Component } from 'react'
import Hoc from "./Hoc"
 class HoverCounter extends Component {

    

    render() {
        return (
            <div>
                <h1>HoverCount:{this.props.count}</h1>
                  <h1 onMouseOver={this.props.updateCounter}>Hover</h1>
            </div>
        )
    }
}


export default Hoc(HoverCounter,3);