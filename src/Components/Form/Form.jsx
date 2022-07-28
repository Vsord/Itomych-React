import React from "react";
import { useState } from "react";
import styles from './Form.module.scss'

const Form = () => {
    const [state, setState] = useState({
        value: '',
    });

    const stateChange = (e) => {
        setState({
            value: e.target.value
        });
    };

    const formSubmit = (e) => {
        console.log(`USER's data: ${state.value}`);
        e.preventDefault();
    };


    return (
        <div className={styles.formWrapper}>
            <form className={styles.formWrapper_form} onSubmit={formSubmit}>
                <div className={styles.formWrapper_email}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={stateChange}/>
                </div>
                <div className={styles.formWrapper_password}>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" onChange={stateChange}/>
                </div>
                <div className={styles.formWrapper_logInButton}>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default Form;


