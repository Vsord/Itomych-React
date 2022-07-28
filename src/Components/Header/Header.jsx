import React from "react";
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
                <NavLink to="/">
                    <button>Log Out</button>
                </NavLink>
        </div>
    )
};

export default Header;