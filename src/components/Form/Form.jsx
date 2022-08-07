import React, {useContext, useEffect} from "react";
import { useState } from "react";
import styles from './Form.module.scss'
import { NavLink } from 'react-router-dom'
import emailContext from "../../context/context";


const Form = () => {
    const [password, setPassword] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const {email, setEmail} = useContext(emailContext);

    useEffect(() => {
        if (!emailErrorMessage && !passwordErrorMessage) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [emailErrorMessage, passwordErrorMessage]);


    const emailStateChange = (e) => {
        setEmail(e.target.value);
        const emailRegExp = /^(.+)@(.+)$/
        if (!e.target.value.match(emailRegExp)) {
            setEmailErrorMessage("Invalid email adress: Must contain '@' symbol");
        } else {
            setEmailErrorMessage('');
        }
    };

    const passwordStateChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 4 || e.target.value.length > 9 ) {
            setPasswordErrorMessage('Password must contain more than 4 and less than 9');
        } else {
            setPasswordErrorMessage('');
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.formWrapper_form} onSubmit={formSubmit}>
            <div className={styles.formWrapper_email}>
                <div className={styles.email_error}>{emailErrorMessage}</div>
                <input
                    name="email"
                    type="text"
                    id="email"
                    value={email}
                    onChange={emailStateChange}
                    required
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className={styles.formWrapper_password}>
                <div className={styles.password_error}>{passwordErrorMessage}</div>
                <input
                    type="password"
                    id="password"
                    value={password}
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


