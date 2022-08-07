import React, {useState} from "react";
import styles from './News.module.scss'
import Header from '../Header/Header'
import {NavLink} from "react-router-dom";
import NewsChangeButtons from "./NewsChangeButtons/NewsChangeButtons";

const News = (props) => {
    const [listState, setListState] = useState(props.data)

    return (
        <div className={styles.news_content}>
            <Header/>
            <ul>
                {listState.map(obj => {
                        if (obj.id <= 10) {
                            return (
                                < li key={obj.id} className={styles.list}>
                                    <NavLink className={styles.news_title_link} to={'/news/' + obj.id}>
                                        <h3>{obj.title}</h3>
                                    </NavLink>
                                    <p>{obj.body}</p>
                                    <NewsChangeButtons setListState={setListState}/>
                                </li>
                            )
                        }
                    }
                )
                }
            </ul>
        </div>
    );
};

export default News;