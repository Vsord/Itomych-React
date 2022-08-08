import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {fetchReducer} from './reducers/fetchReducer'
import {formReducer} from "./reducers/formReducer";

const rootReducer = combineReducers({
    fetchReducer: fetchReducer,
    formReducer: formReducer,
})

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));