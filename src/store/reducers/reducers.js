import {FETCH_SUCCESS} from '../actions/actions'
import {FETCH_REQUEST} from "../actions/actions";
import {FETCH_FAILURE} from "../actions/actions";

const initialState = {
    isLoaded: false,
    data: [],
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoaded: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                data: [...state.data, ...action.payload]
            };
        case FETCH_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}