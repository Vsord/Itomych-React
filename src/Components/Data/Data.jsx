import React, {useState} from "react";
import './Data.css'
import TextArea from '../TitleTextArea/TextArea';
import OnClickButtons from '../OnClickButtons/OnClickButtons'

const Data = (props) => {
    const [title, setTitle] = useState(props.data.map(obj => obj.id <= 1 ? obj.title : null));
    const [body, setBody] = useState(props.data.map(obj => obj.id <= 1 ? obj.body : null));

    const [titleText, setTitleText] = useState(title);
    const [bodyText, setBodyText] = useState(body);

    let dataList = props.data.map(obj => {
        if (obj.id <= 1) {
            return (
                < li key={obj.id} className="list">
                    <h3>{titleText}</h3>
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
                titleText={titleText}
                setTitleText={setTitleText}
                bodyText={bodyText}
                setBodyText={setBodyText}
                setD={setData}
                setT={setTitle}
                setB={setBody}
                dataList={dataList}
            />
        </div>
    );
};

export default Data;


