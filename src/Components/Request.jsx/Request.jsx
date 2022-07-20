import React from 'react';
import Data from '../Data/Data';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => this.setState({
                isLoaded: true,
                items: data,
            }));

    };

    render() {
        const { items } = this.state;
        return (
            <div>
                <Data data={items} />
            </div>
        );
    };
};

export default Request;