import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {reducers} from './reducers/reducers'

const rootReducer = combineReducers({
    reducers
})

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));