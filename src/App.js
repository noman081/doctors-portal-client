import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinments from './Pages/Dashboard/MyAppoinments';
import MyReviews from './Pages/Dashboard/MyReviews';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/appoinment' element={
          <RequireAuth>
            <Appoinment />
          </RequireAuth>
        }></Route>
        <Route
          path='/dashboard'
          element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppoinments />}></Route>
          <Route path='review' element={<MyReviews />}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />
    </div >
  );
}

export default App;
