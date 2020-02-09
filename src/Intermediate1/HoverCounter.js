import React, {Component} from 'react'
import updatedComponent from './withCounter'

class HoverCounter extends Component{

 
    
    render(){
        const {Counter} = this.state
        return(
            <div>
                <h2 onMouseOver={this.clickHandler}>{this.props.name} Clicked {Counter} times</h2>
            </div>
        )
    }
}
export default updatedComponent(HoverCounter)