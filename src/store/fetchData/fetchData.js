import { actionRequest, actionSuccess } from "../actions/actions";


export const fetchData = () => {
    return async (dispatch) => {
        dispatch(actionRequest)
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    let err = new Error('Something went wrong..');
                    throw err
                }
            })
            .then(data => dispatch(actionSuccess(data)))
            .catch(error => {
                console.error(error.message);
            })
    };
};