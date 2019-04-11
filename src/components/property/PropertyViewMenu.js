import React from 'react';

export default function PropertyViewMenu(props){
    return (
        <ul>
            <li onClick={()=>props.toggleForm()}>
                Add Property
            </li>
        </ul>
    )
}