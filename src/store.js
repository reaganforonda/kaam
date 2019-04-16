import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import propertiesReducer from './ducks/propertiesReducers';

const reducers = {
    propertiesReducer: propertiesReducer
}

let middleware = promiseMiddleware;

export default createStore(combineReducers(reducers), applyMiddleware(middleware));