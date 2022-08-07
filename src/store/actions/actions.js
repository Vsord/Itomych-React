export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';



///////// Action creators //////////////////////////////////
export const actionRequest = (payload) => {
    return {
        type: FETCH_REQUEST,
        payload
    }
};
export const actionSuccess = (payload) => {
    return {
        type: FETCH_SUCCESS,
        payload
    }
};
export const actionFailure = (err) => {
    return {
        type: FETCH_FAILURE,
        err
    }
};

