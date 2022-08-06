import React, {useState} from "react";
import styles from './News.module.scss'
import Header from '../Header/Header'
import {NavLink} from "react-router-dom";

const News = (props) => {
    let dataList = props.data.map(obj => {
        if (obj.id <= 10) {
            return (
                < li key={obj.id} className={styles.list}>
                    <NavLink className={styles.news_title_link} to={'/news/' + obj.id}>
                        <h3>{obj.title}</h3>
                    </NavLink>
                    <p>{obj.body}</p>
                    <div className={styles.news_content_buttons}>
                        <button className={styles.editData_button}>Edit</button>
                        <button className={styles.saveData_button}>Save</button>
                    </div>
                </li>
            )
        }
    });
    return (
        <div className={styles.news_content}>
            <Header/>
            <ul>
                {dataList}
            </ul>
        </div>
    );
};

export default News;