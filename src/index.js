import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './store/store'
import emailContext from "./context/context";

const Main = () => {
    const [email, setEmail] = useState('');
    return (
        <emailContext.Provider value={{email, setEmail}}>
            <App />
        </emailContext.Provider>
    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Main/>
    </Provider>
);

reportWebVitals();
