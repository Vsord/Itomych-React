import React from 'react';
import './OnClickButtons.css';
import TextArea from '../TitleTextArea/TextArea';
import BodyTextArea from '../BodyTextArea/BodyTextArea';


const OnClickButtons = (props) => {

    const addBodyTextArea = () => {
        props.setD(<BodyTextArea bodyText={props.bodyText} setBodyText={props.setBodyText}/>)
    };

    const addTitleTextArea = () => {
        props.setD(<TextArea titleText={props.titleText} setTitleText={props.setTitleText}/>)
    }

    const saveTextAreaData = () => {
        props.setT(props.titleText);
        props.setB(props.bodyText);
        props.setD(props.dataList);
    }

    return (
        <div className='textArea_button_block'>
            <button onClick={addTitleTextArea} className='textArea_edit_botton'>Edit Title</button>
            <button onClick={addBodyTextArea} className='textArea_edit_botton'>Edit Body</button>
            <button onClick={saveTextAreaData} className='textArea_save_botton'>Save</button>
        </div>
    )
};

export default OnClickButtons;