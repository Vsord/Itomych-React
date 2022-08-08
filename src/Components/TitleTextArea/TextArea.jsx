import React from 'react';
import './TextArea.css'


const TextArea = (props) => {

    const changeInnerText = (e) => {
        props.setTitleText(e.target.value)
    }

    return (
        <textarea
            className='textArea'
            defaultValue={props.titleText}
            onChange={changeInnerText}
        />
    )
};

export default TextArea;