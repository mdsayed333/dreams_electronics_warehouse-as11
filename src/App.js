import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import UpdateProducts from './pages/UpdateProducts/UpdateProducts';
import HeaderNavbar from './pages/Shared/HeaderNavber/HeaderNavber';
import Footer from './pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import AddItem from './pages/AddItem/AddItem';
import ManageItem from './pages/ManageItem/ManageItem';
import MyItems from './pages/MyItems/MyItems';
import RequireAuth from './pages/Shared/RequireAuth/RequireAuth';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div className="container">
      <HeaderNavbar></HeaderNavbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/update/:productId' element={
          <RequireAuth>
            <UpdateProducts></UpdateProducts>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
