import {React, useEffect} from 'react';
import Form from './components/Form/Form';
import styles from './App.module.scss';
import News from './components/News/News';
import Page from './components/News/Page/Page'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./store/fetchData/fetchData";


function App() {
    const data = useSelector(state => state.fetchReducer.data);
    const loader = useSelector(state => state.fetchReducer.isLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    },[]);


    if (!loader) {
        return (
            <div className={styles.preloader}>
                Loading...
            </div>
        );
    };

    let pageComponentMapping = data.map(item => {
        return <Route path={'/news/' + item.id} element={<Page title={item.title} body={item.body} id={item.id}/>}/>
    })

    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Routes>
                    <Route path='/' element={<Form/>}/>
                    <Route path='/news' element={<News data={data} />}/>
                    {pageComponentMapping}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
