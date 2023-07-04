
import './App.css';
import { Home } from './Home';
import { Singlepage } from './Singlepage';
import { Notfound } from './Notfound';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='movie/:id' element={<Singlepage/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
   
     
 
    </>
  );
}

export default App;
