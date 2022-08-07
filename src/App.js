import {React, useEffect} from 'react';
import Form from './components/Form/Form';
import styles from './App.module.scss';
import News from './components/News/News';
import Page from './components/News/Page/Page'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {store} from "./store/store";
import {fetchData} from "./store/fetchData/fetchData";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    },[]);

    console.log(store.getState());








    const {isLoaded} = store;
    if (!isLoaded) {
        return (
            <div className={styles.preloader}>
                Loading...
            </div>
        );
    };



    // let pageComponentMapping = .map(item => {
    //     return <Route path={'/news/' + item.id} element={<Page title={item.title} body={item.body} id={item.id}/>}/>
    // })

    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Routes>
                    <Route path='/' element={<Form/>}/>
                    <Route path='/news' element={<News data={fetchData()} />}/>
                    {/*{pageComponentMapping}*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
