import React from 'react'

const updatedComponent = OriginalComponent => {
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent name='Husmitha'/>
        }
    }
    return NewComponent
}

export default updatedComponent