import React from "react";
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const mail = useSelector(state => state.formReducer.mail);
    return (
        <div className={styles.header}>
              <span> Your email: {mail}</span>
                <NavLink to="/">
                    <button>Log Out</button>
                </NavLink>
        </div>
    )
};

export default Header;