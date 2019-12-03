import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { specsReducer } from './stores/specs';

const reducer = combineReducers( {
    specs: specsReducer
} );

export default (initialState) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );
