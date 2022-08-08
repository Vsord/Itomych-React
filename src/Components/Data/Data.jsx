import React, {useState} from "react";
import './Data.css'

const Data = (props) => {
    const [title, setTitle] = useState(props.data.map(obj => obj.id <= 1 ? obj.title : null));
    const [body, setBody] = useState(props.data.map(obj => obj.id <= 1 ? obj.body : null));

    let dataTextArea = () => {
        return (
            <textarea
                className='textArea'
                defaultValue={innerText}
                onChange={changeInnerText}
            />
        )
    };
    const [innerText, setInnerText] = useState(title);
    let dataList = props.data.map(obj => {
        if (obj.id <= 1) {
            return (
                < li key={obj.id} className="list">
                    <h3>{innerText}</h3>
                    <p>{body}</p>
                </li>
            )
        }
    });



    const [data, setData] = useState(dataList);


    const changeInnerText = (e) => {
        setInnerText(e.target.value)
    }

    const addTextArea = () => {
        setData(dataTextArea())
    }

    const saveTextAreaData = () => {
        setTitle(innerText)
        setData(dataList)
        console.log(innerText)
    }


    return (
        <div>
            <ul>
                {data}
            </ul>
            <div className='textArea_button_block'>
                <button onClick={addTextArea} className='textArea_edit_botton'>Edit</button>
                <button onClick={saveTextAreaData} className='textArea_save_botton'>Save</button>
            </div>
        </div>
    );
};

export default Data;


