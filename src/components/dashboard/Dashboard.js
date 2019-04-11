import React from 'react';
import DashboardMenu from './DashboardMenu';
import {Switch, Route} from 'react-router-dom';
import PropertyView from '../property/PropertyView';
import ReconciliationView from '../reconciliation/ReconciliationView';

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
                <Switch>
                    <Route path='/dashboard/Property' component={PropertyView}/>
                    <Route path='/dashboard/Reconciliation' component={ReconciliationView}/>
                </Switch>
            </div>
        )
    }
}