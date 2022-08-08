import {actionFailure, actionRequest, actionSuccess} from "../actions/fetchAction";


export const fetchData = () => {
    return async (dispatch) => {
        dispatch(actionRequest)
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    dispatch(actionFailure('Someting went wrong...'))
                }
            })
            .then(data => dispatch(actionSuccess(data)))
            .catch(err => {
                console.error(err);
            })
    };
};