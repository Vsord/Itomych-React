import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import emailContext from './context/context'

const Main = () => {
    const [email, setEmail] = useState('');
    return (
        <React.StrictMode>
            <emailContext.Provider value={{email, setEmail}}>
                <App/>
            </emailContext.Provider>
        </React.StrictMode>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main />
);

reportWebVitals();
