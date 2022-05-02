import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import UpdateProducts from './pages/UpdateProducts/UpdateProducts';
import HeaderNavbar from './pages/Shared/HeaderNavber/HeaderNavber';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="container">
      <HeaderNavbar></HeaderNavbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/update/:id' element={<UpdateProducts></UpdateProducts>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
