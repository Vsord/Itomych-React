import React from 'react';
import Data from '../Data/Data';
import './Request.css'

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
            })).catch(err => {
                console.error("Something went wrong", err);
            });
    };

    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) {
            return (
                <div className='preloader'>
                    Loading...
                </div>
            )
        }
        return (
            <div>
                <Data data={items} />
            </div>
        );
    };
};

export default Request;