import React from 'react';
import './BodyTextArea.css'


const BodyTextArea = (props) => {

    const changeInnerText = (e) => {
        props.setBodyText(e.target.value)
    }

    return (
        <textarea
            className='bodyTextArea'
            defaultValue={props.bodyText}
            onChange={changeInnerText}
        />
    )
};

export default BodyTextArea;