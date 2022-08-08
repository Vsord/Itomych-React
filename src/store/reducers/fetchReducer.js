import {FETCH_SUCCESS, FETCH_REQUEST, FETCH_FAILURE} from '../actions/fetchAction';

const initialState = {
    isLoaded: false,
    data: [],
    error: '',
};

/// Reducer //////////
export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoaded: false,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoaded: true,
               data: action.payload,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}