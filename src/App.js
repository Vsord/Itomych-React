import {React, useState, useEffect} from 'react';
import Form from './Components/Form/Form';
import styles from './App.module.scss';
import Data from './Components/Data/Data';
import Page from './Components/Data/Page/Page'
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

 let path = state.items.filter(obj => {
    if (obj.id <= 1) {
      return obj.id;
    }
 });

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/news' element={<Data data={items} />} />
          <Route path={'/news/' + path} element={<Page data={items} />}/>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
