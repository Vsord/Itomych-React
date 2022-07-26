import React, { useState, useEffect } from 'react';
import Data from '../Data/Data';
import './Request.css'

const HookRequest = () => {
    const [state, setState] = useState({
        isLoaded: false,
        items: [],
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    let err = new Error('Something went wrong..');
                    throw err
                };
            })
            .then(data => setState({
                isLoaded: true,
                items: data,
            }))
            .catch(error => {
                console.error(error.message);
            });
    }, []);

    const { isLoaded, items } = state;
    if (!isLoaded) {
        return (
            <div className='preloader'>
                Loading...
            </div>
        );
    };
    return (
        <div>
            <Data data={items} />
        </div>
    );
};

export default HookRequest;