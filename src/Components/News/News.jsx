import React from "react";
import styles from './News.module.scss'
import Header from '../Header/Header'
import { NavLink } from "react-router-dom";

const News = (props) => {
    let dataList = props.data.map(obj => {
        if (obj.id <= 10) {
            return (
                < li key={obj.id} className={styles.list} >
                    <NavLink to={'/news/' + obj.id}>
                        <h3>{obj.title}</h3>
                    </NavLink>
                    <p>{obj.body}</p>
                    <button>Edit</button>
                    <button>Save</button>
                </li >
            )
        }
    });

    return (
        <div>
            <Header />
            <ul>
                {dataList}
            </ul>
        </div>
    );
};

export default News;