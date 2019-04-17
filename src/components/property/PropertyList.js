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
        this.setState({allProperties: this.props.allProperties});
    }

    render(){
        let allProperties = this.state.allProperties.map((property, index) => {
            return (
                <div key={property.property_id+index}>
                    <div>{property.property_name}</div>
                </div>
            )
        })

        return (
            <div>{allProperties}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        properties: state.propertiesReducer.properties
    }
}

export default connect(mapStateToProps, {})(withRouter(PropertyList))