import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

export class PropertyList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            allProperties: []
        }
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div>Property List</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        properties: state.propertiesReducer.properties
    }
}

export default connect(mapStateToProps, {})(withRouter(PropertyList))