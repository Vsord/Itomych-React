import {FETCH_SUCCESS} from '../actions/actions'
import {FETCH_REQUEST} from "../actions/actions";
import {FETCH_FAILURE} from "../actions/actions";

const initialState = {
    isLoaded: false,
    data: [],
};

/// Reducer //////////
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoaded: false,
            };
        case FETCH_SUCCESS:
            return {
               data: action.payload,
                isLoaded: true,
            };
        case FETCH_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}