import React from 'react';
import styles from "./NewsChangeButtons.module.scss";
import ChangeDataWindow from "../../ChangeDataWindow/ChangeDataWindow";

const NewsChangeButtons = (props) => {
    return (
        <div className={styles.news_content_buttons}>
            <button className={styles.editData_button}>Edit</button>
            <button className={styles.saveData_button}>Save</button>
        </div>
    )
};

export default NewsChangeButtons;