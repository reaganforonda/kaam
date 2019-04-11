import React from 'react';
import PropertyViewMenu from './PropertyViewMenu';

export default class PropertyView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            displayAddPropertyForm: false
        }
    }

    render(){
        return (
            <div>
                <PropertyViewMenu/>
                <div>
                    {
                        
                    }
                </div>
            </div>
        )
    }
}