import React from "react";
import './Data.css'

class Data extends React.Component {
    render() {
        const dataList = this.props.data.map(item => {
            return <li className="list">
                <h3>{JSON.stringify(item.title)}</h3>
                <p>{JSON.stringify(item.body)}</p>
            </li>
        });
        return (
            <div>
                <ul>
                    {dataList}
                </ul>
            </div>
        );
    };
};

export default Data;