import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { userReducer } from './stores/users';

export const initializeSession = () => ( {
    type: "INITIALIZE_SESSION",
    data: {isLogged: false}
} );

const storeData = ( data ) => ( {
    type: "STORE_DATA",
    data,
} );

const sessionReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case "INITIALIZE_SESSION":
            return action.data;
        default: return state;
    }
};

const dataReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};

const reducer = combineReducers( {
    session: sessionReducer,
    data: dataReducer,
    user: userReducer
} );

export default (initialState) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );
