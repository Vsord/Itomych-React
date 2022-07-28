import Form from './Components/Form/Form';
import styles from './App.module.scss';
import Request from './Components/Request/Request';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path='/' element={<Form />}/> 
          <Route path='/news' element={<Request />}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
