import React, {useState} from "react";
import './Data.css'

const Data = (props) => {
    const [titleText, setTitleText] = useState(props.data.map(obj => obj.id <= 1 ? obj.title : null));
    const [bodyText, setBodyText] = useState(props.data.map(obj => obj.id <= 1 ? obj.body : null));

    let list = props.data.map(obj => {
        if (obj.id <= 1) {
            return (
                < li key={obj.id} className="list">
                    <h3>{titleText}</h3>
                    <p>{bodyText}</p>
                </li>
            )
        }
    });

    const [data, setData] = useState(list);

    // Buttons functions ///////////////////////////////
    const handleText = (event) => {
        setTitleText(event.target.value);
    };

    const saveText = () => {
        setData(list);
        console.log(titleText);
    };
    /////////////////////////////////////////////////////

    // Title TextArea ///////////////////////////////////
    const addTextArea = () => {
        setData(() => {
            return (
                <textarea
                    className='textArea'
                    defaultValue={titleText}
                    onChange={handleText}
                />
            )
        })
    };
    /////////////////////////////////////////////////////

    return (
        <div>
            <ul>
                {data}
            </ul>
            <div className='button_block'>
                <button onClick={addTextArea} className='edit_button'>Edit</button>
                <button onClick={saveText} className='textArea_save_botton'>Save</button>
            </div>
        </div>
    );
};

export default Data;


