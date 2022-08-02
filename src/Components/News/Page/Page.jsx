import React from "react";
import styles from './Page.module.scss';

const Page = (props) => {
    let dataTitle = props.data.map(obj => obj)


    return (
        <div className={styles.news_main}>
            <h1>{dataTitle[0].title}</h1>
            <p>{dataTitle[0].body}</p>
        </div>
    )
};

export default Page;