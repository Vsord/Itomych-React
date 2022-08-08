import React, {useEffect} from "react";
import styles from './Form.module.scss'
import { NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {
    changeEmail,
    changePassword,
    emailErrorMessage,
    isValidAction,
    passwordErrorMessage
} from "../../store/actions/formActions";

const Form = () => {
    const dispatch = useDispatch();
    const pass = useSelector(state => state.formReducer.pass);
    const mail = useSelector(state => state.formReducer.mail);
    const emailErrorMsg = useSelector(state => state.formReducer.mailErr);
    const passwordErrorMsg = useSelector(state => state.formReducer.passErr);
    const isValid = useSelector(state => state.formReducer.isVal);


    useEffect(() => {
        if (!emailErrorMsg && !passwordErrorMsg) {
            dispatch(isValidAction(false))
        } else {
            dispatch(isValidAction(true))
        }
    }, [emailErrorMsg, passwordErrorMsg]);


    const emailStateChange = (e) => {
        dispatch(changeEmail(e.target.value));
        const emailRegExp = /^(.+)@(.+)$/
        if (!e.target.value.match(emailRegExp)) {
            dispatch(emailErrorMessage("Invalid email adress: Must contain '@' symbol"));
        } else {
            dispatch(emailErrorMessage(''));
        }
    };

    const passwordStateChange = (e) => {
        dispatch(changePassword(e.target.value));
        if (e.target.value.length < 4 || e.target.value.length > 9 ) {
            dispatch(passwordErrorMessage('Password must contain more than 4 and less than 9'));
        } else {
            dispatch(passwordErrorMessage(''));
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.formWrapper_form} onSubmit={formSubmit}>
            <div className={styles.formWrapper_email}>
                <div className={styles.email_error}>{emailErrorMsg}</div>
                <input
                    name="email"
                    type="text"
                    id="email"
                    value={mail}
                    onChange={emailStateChange}
                    required
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className={styles.formWrapper_password}>
                <div className={styles.password_error}>{passwordErrorMsg}</div>
                <input
                    type="password"
                    id="password"
                    value={pass}
                    onChange={passwordStateChange}
                    required
                />
                <label htmlFor="password">Password</label>
            </div>
            <div className={styles.formWrapper_logInButton}>
                <NavLink to='/news'>
                    <button type="submit" disabled={isValid}>Log In</button>
                </NavLink>
            </div>
        </form>
    );
};

export default Form;


