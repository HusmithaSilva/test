import React from 'react'

const updatedComponent = OriginalComponent => {
    class NewComponent extends React.Component{

        constructor(){
            super()
    
            this.state = {
                Counter: 0
            }
        }
    
        clickHandler = () => {
            this.setState(prevState => {
                return{Counter:prevState.Counter + 1}
            })
        }
        render(){
            return <OriginalComponent Counter={this.state.Counter} clickHandler={this.clickHandler}/>
        }
    }
    return NewComponent
}

export default updatedComponent