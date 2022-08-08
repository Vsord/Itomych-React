import React, {useState, useEffect} from 'react';
import './App.css';
import Data from './Components/Data/Data'


function App() {
    const [state, setState] = useState({
        isLoaded: false,
        dataArray: [],
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
                dataArray: data,
            }))
            .catch(error => {
                console.error(error.message);
            });
    }, []);

    const { isLoaded, dataArray } = state;
    if (!isLoaded) {
        return (
            <div className='preloader'>
                Loading...
            </div>
        );
    };
  return (
    <div className="App">
        <Data data={dataArray} />
    </div>
  );
}

export default App;
