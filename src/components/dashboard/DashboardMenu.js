import React from 'react';

export default class DashboardMenu extends React.Component{
    constructor(props){
        super(props);

        this.state={}
        
    }

    render(){
        return (
            <div>
                <ul>
                    <li>
                        Properties
                    </li>
                    <li>
                        Reconciliation
                    </li>
                </ul>
            </div>
        )
    }
}