import React from 'react';


export default class PropertyList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            allProperties: []
        }
    }

    render(){
        return (
            <div>Property List</div>
        )
    }
}
