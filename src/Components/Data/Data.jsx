import React from "react";
import './Data.css'

class Data extends React.Component {
    render() {
        const finalDataList = this.props.data.map(item => {
            return <li className="list">{JSON.stringify(item.body)}</li>
        });
        return (
            <div>
                <ul>
                    {finalDataList}
                </ul>
            </div>
        );
    };
};

export default Data;