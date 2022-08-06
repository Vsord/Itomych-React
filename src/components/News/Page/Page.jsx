import React from "react";
import styles from './Page.module.scss';
import Header from "../../Header/Header";

const Page = (props) => {
    return (
        <div>
            <Header/>
            <div className={styles.news_main}>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
            </div>
        </div>
    )
};

export default Page;