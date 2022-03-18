
import { combineReducers } from 'redux'
import {authReducer} from '../reducers/authReducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
);