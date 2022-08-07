import React, {useContext} from "react";
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom";
import emailContext from "../../context/context";

const Header = () => {
    const {email, setEmail} = useContext(emailContext);
    return (
        <div className={styles.header}>
              <span> Your email: {email}</span>
                <NavLink to="/">
                    <button>Log Out</button>
                </NavLink>
        </div>
    )
};

export default Header;