import React from "react";
import { useState } from "react";
import styles from './Form.module.scss'

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');



    const emailStateChange = (e) => {
        setEmail(e.target.value);
        const emailRegExp = /^(.+)@(.+)$/
        if (!emailRegExp.test(e.target.value)) {
            setEmailErrorMessage("Invalid email: Must contain a '@' symbol");
        } else {
            setEmailErrorMessage('');
        }
    };

    const passwordStateChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length > 6) {
            setPasswordErrorMessage('Password must not contain more than 6 symbols');
        } else {
            setPasswordErrorMessage('');
        }
    };

    const formSubmit = (e) => {
        if (emailErrorMessage === '' && passwordErrorMessage === '') {
            console.log({
                userEmail: email,
                userPassword: password,
            });
        } else {
            console.log('Wrong password or email');
        }
        e.preventDefault();
    };
    return (
        <form className={styles.formWrapper_form} onSubmit={formSubmit}>
            <div className={styles.formWrapper_email}>
                <div className={styles.email_error}>{emailErrorMessage}</div>
                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    type="text"
                    id="email"
                    value={email}
                    onChange={emailStateChange}
                    placeholder='Type your email...'
                    required
                />
            </div>
            <div className={styles.formWrapper_password}>
                <div className={styles.password_error}>{passwordErrorMessage}</div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={passwordStateChange}
                    placeholder='Type your password...'
                    required
                />
            </div>
            <div className={styles.formWrapper_logInButton}>
                <button type="submit">Log In</button>
            </div>
        </form>
    );
};

export default Form;


