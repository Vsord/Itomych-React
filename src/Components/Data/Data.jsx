import React from "react";
import './Data.css'

const Data = (props) => {
    let dataList = props.data.map(obj => {
        if (obj.id <= 10) {
            return (
                < li key={obj.id} className="list" >
                    <h3>{obj.title}</h3>
                    <p>{obj.body}</p>
                    <p>{obj.id}</p>
                </li >
            )
        }
    });

    return (
        <div>
            <ul>
                {dataList}
            </ul>
        </div>
    );
};

export default Data;


