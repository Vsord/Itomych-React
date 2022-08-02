import {React, useState, useEffect} from 'react';
import Form from './Components/Form/Form';
import styles from './App.module.scss';
import News from './Components/News/News';
import Page from './Components/News/Page/Page'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
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
      <div className={styles.preloader}>
        Loading...
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/news' element={<News data={items} />} />
          <Route path={'/news/:id'} element={<Page data={items} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
