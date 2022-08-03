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
                </li>
            )
        }
    });

    let textAreaTitle = props.data.map(obj => obj.title);

    const [state, setState] = useState(dataList);
    const [textAreaTitleValue, setTextAreaTitleValue] = useState(textAreaTitle[0]);

    let textAreaOnChangeHandler = (event) => {
        setTextAreaTitleValue(event.target.value);
    };

    let addTextArea = () => {
        setState(() => {
            return <textarea
                className={styles.textArea}
                value={textAreaTitleValue}
                onChange={textAreaOnChangeHandler}
            />
        })
    };

    let saveTextAreaValue = () => {
        console.log(textAreaTitleValue)
    };

    return (
        <div className={styles.news_content}>
            <Header/>
            <ul>
                {state}
                <div className={styles.news_content_buttons}>
                    <button className={styles.editData_button} onClick={addTextArea}>Edit</button>
                    <button className={styles.saveData_button} onClick={saveTextAreaValue}>Save</button>
                </div>
            </ul>
        </div>
    );
};

export default News;