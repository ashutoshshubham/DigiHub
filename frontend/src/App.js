import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/main/Home'
import SignIn from './components/main/SignIn'
import SignUp from './components/main/SignUp'
import Feedback from './components/main/Feedback'
import ForgetPswd from './components/main/ForgetPswd'
import Navbar from './components/main/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar />

        <Routes>

          <Route element={<Navigate to='/homepage' />} path='/'/>
          <Route element={<Home />} path='homepage'/> 
          <Route element={<SignIn />} path='signin'/> 
          <Route element={<SignUp />} path='signup'/> 
          <Route element={<Feedback />} path='feedback'/> 
          <Route element={<ForgetPswd />} path='forgetpswd'/> 

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
