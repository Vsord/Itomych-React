import React from 'react';
import './TextArea.css'


const TextArea = (props) => {

    const changeInnerText = (e) => {
        props.setText(e.target.value)
    }

    return (
        <textarea
            className='textArea'
            defaultValue={props.innerText}
            onChange={changeInnerText}
        />
    )
};

export default TextArea;