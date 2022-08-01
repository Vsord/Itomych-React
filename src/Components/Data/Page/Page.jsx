import React from "react";
import styles from './Page.module.scss';

const Page = (props) => {
    let dataPage = props.data.map(obj => {
        if (obj.id <= 10) {
            return (
                <div className={styles.news_main}>
                    <h1>{obj.title}</h1>
                    <p>{obj.body}</p>
                </div>
            )
        }
    });

    return (
        <div>
            {dataPage}
        </div>
    )
};

export default Page;