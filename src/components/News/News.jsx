import React, {useState} from "react";
import styles from './News.module.scss'
import Header from '../Header/Header'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import Button from '@mui/material/Button';

const News = (props) => {
    const data = useSelector(state => state.fetchReducer.data);
    const [titleText, setTitleText] = useState(props.data.map(obj => obj.id <= 1 ? obj.title : null));
    const [bodyText, setBodyText] = useState(props.data.map(obj => obj.id <= 1 ? obj.body : null));

    let list = data.map(obj => {
            if (obj.id <= 1) {
                return (
                    < li key={obj.id} className={styles.list}>
                        <NavLink className={styles.news_title_link} to={'/news/' + obj.id}>
                            <h3>{titleText}</h3>
                        </NavLink>
                        <p>{bodyText}</p>
                    </li>
                )
            }
        }
    );

    const [dataList, setDataList] = useState(list);

    const handleText = (event) => {
        setTitleText(event.target.value);
    };

    const saveText = () => {
        setDataList(list);
        console.log(titleText);
    };

    const addTextArea = () => {
        setDataList(() => {
            return (
                <textarea
                    className={styles.textArea}
                    defaultValue={titleText}
                    onChange={handleText}
                />
            )
        })
    };

    return (
        <div className={styles.news_content}>
            <Header/>
            <ul>
                {dataList}
            </ul>
            <div className={styles.button_block}>
                <Button
                    variant="contained"
                    onClick={addTextArea}
                    className={styles.edit_button}
                >Edit</Button>
                <Button
                    variant="contained"
                    onClick={saveText}
                    className={styles.save_button}
                >Save</Button>
            </div>
        </div>
    );
};

export default News;