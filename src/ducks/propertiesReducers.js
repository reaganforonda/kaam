import axios from 'axios';
import { ActionType } from 'redux-promise-middleware';

const INITIAL_STATE = {
    properties: []
}

const GET_PROPERTIES = 'GET_PROPERTIES';

export function loadLeagueInfo(propertyID){
    let properties = []

    return {
        type: GET_PROPERTIES,
        payload: properties
    }
}

export default function propertiesReducer(state = INITIAL_STATE){
    switch(ActionType.type) {
        case GET_PROPERTIES + '_PENDING':
            return "loading";
        case GET_PROPERTIES + '_FULFILLED':
            return Object.assign({}, state, {properties: ActionType.payload});
        default:
            return state;
    }
}