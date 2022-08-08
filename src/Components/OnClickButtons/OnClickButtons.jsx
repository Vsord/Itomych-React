import React from 'react';
import './OnClickButtons.css';
import TextArea from '../TextArea/TextArea'


const OnClickButtons = (props) => {
    const addTextArea = () => {
        props.setD(<TextArea innerText={props.innerText} setText={props.setText}/>)
    }

    const saveTextAreaData = () => {
        props.setT(props.innerText);
        props.setD(props.dataList);
        console.log(props.innerText);
    }

    return (
        <div className='textArea_button_block'>
            <button onClick={addTextArea} className='textArea_edit_botton'>Edit</button>
            <button onClick={saveTextAreaData} className='textArea_save_botton'>Save</button>
        </div>
    )
};

export default OnClickButtons;