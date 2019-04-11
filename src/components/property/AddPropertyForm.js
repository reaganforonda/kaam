import React from 'react';

export default class AddPropertyForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            propertyName:'',
            acctSysCode: '',
            address:''
        }
    }

    render(){
        return (
            <form>
                <div>
                    <input name='propertyName' />
                </div>
            </form>
        )
    }
}