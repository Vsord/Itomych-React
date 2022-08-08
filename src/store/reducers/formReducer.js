import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    EMAIL_ERROR_MESSAGE,
    IS_VALID,
    PASSWORD_ERROR_MESSAGE,
} from '../actions/formActions'

let initialState = {
    pass: '',
    mail: '',
    mailErr: '',
    passErr: '',
    isVal: false,
};


export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return {
                ...state,
                pass: action.password,
            }
        case CHANGE_EMAIL:
            return {
                ...state,
                mail: action.mail,
            }
        case EMAIL_ERROR_MESSAGE:
            return {
                ...state,
                mailErr: action.emailErrorMsg,
            }
        case PASSWORD_ERROR_MESSAGE:
            return {
                ...state,
                passErr: action.passwordErrorMsg,
            }
        case IS_VALID:
            return {
                ...state,
                isVal: action.payload,
            }
        default:
            return state;
    }
};