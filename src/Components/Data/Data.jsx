import React, {useState} from "react";
import './Data.css'
import TextArea from '../TextArea/TextArea';
import OnClickButtons from '../OnClickButtons/OnClickButtons'

const Data = (props) => {
    const [title, setTitle] = useState(props.data.map(obj => obj.id <= 1 ? obj.title : null));
    const [body, setBody] = useState(props.data.map(obj => obj.id <= 1 ? obj.body : null));

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

    return (
        <div>
            <ul>
                {data}
            </ul>
            <OnClickButtons
                innerText={innerText}
                setText={setInnerText}
                setD={setData}
                setT={setTitle}
                dataList={dataList}
            />
        </div>
    );
};

export default Data;


