import './App.css';
import Bookstore from './components/bookstore'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <main className='container'>
    <Bookstore />
    </main>
    </BrowserRouter>
    </>
  );
}

export default App;
