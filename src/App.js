import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';
import ReviewOrder from './componentes/ReviewOrder/ReviewOrder';
import Error from './componentes/Error/Error';
import GrandPa from './componentes/GrandPa/GrandPa';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/review-order' element={<ReviewOrder/>}></Route>
         <Route path='/grandpa'element={<GrandPa/>}></Route>
         <Route path='*' element={<Error/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
