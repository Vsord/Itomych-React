import React, {useState} from "react";
import styles from './ChangeDataWindow.module.scss'

const ChangeDataWindow = (props) => {
    return (
        <div className={styles.data_window}>
            <div className={styles.data_window_inner}>
                <textarea value='Title'/>
                <textarea value='Body'/>
            </div>
        </div>
    )
};

export default ChangeDataWindow;