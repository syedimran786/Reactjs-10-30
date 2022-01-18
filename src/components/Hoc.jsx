import React, { Component }  from 'react'

function Hoc(OrgnalComponent,updateValue) {


    class NewComponent extends Component
    {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
                
            }
        }
    
        updateCounter=()=>
        {
            this.setState({count:this.state.count+updateValue})
        }

        render()
        {
            return <OrgnalComponent count={this.state.count} updateCounter={this.updateCounter}/>
        }
    }

    return NewComponent
        
}

export default Hoc
