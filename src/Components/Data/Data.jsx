import React from "react";
import styles from './Data.module.scss'

const Data = (props) => {
    const dataList = props.data.filter(obj => {
        if (obj.id <= 10) {
            return obj;
        }}
    );
    const newData = dataList.map(item => {
        return (
            < li className={styles.list} >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </li >
        )
    })

    return (
        <div>
            <ul>
                {newData};
            </ul>
        </div>
    );
};

export default Data;