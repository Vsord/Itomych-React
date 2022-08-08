export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const EMAIL_ERROR_MESSAGE = 'EMAIL_ERROR_MESSAGE';
export const PASSWORD_ERROR_MESSAGE = 'PASSWORD_ERROR_MESSAGE';
export const IS_VALID = 'IS_VALID';


export const changePassword = (password) => {
    return {
        type: CHANGE_PASSWORD,
        pass: password,
    }
};

export const changeEmail = (email) => {
    return {
        type: CHANGE_EMAIL,
        mail: email,
    }
};

export const emailErrorMessage = (errorMessage) => {
    return {
        type: EMAIL_ERROR_MESSAGE,
        emailErrorMsg: errorMessage,
    }
};

export const passwordErrorMessage = (message) => {
    return {
        type: PASSWORD_ERROR_MESSAGE,
        passwordErrorMsg: message,
    }
};

export const isValidAction = (value) => {
    return {
        type: IS_VALID,
        payload: value,
    }
};