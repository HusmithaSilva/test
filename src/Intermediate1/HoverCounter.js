import React, {Component} from 'react'

class HoverCounter extends Component{

    constructor(){
        super()

        this.state = {
            Counter: 0
        }
    }

    headinghandler = () => {
        this.setState(prevState => {
            return{Counter: prevState.Counter + 1}
        })
    }
    
    render(){
        const {Counter} = this.state
        return(
            <div>
                <h2 onMouseOver={this.headinghandler}>Clicked {Counter} times</h2>
            </div>
        )
    }
}
export default HoverCounter