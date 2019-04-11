import React from 'react';
import DashboardMenu from './DashboardMenu';

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);

        this.state={

        }
    }

    render() {
        return (
            <div>
                <DashboardMenu/>
                This is the Dashboard
            </div>
        )
    }
}