import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
function App() {
  return ( 
  <Routes>
    <Route path="/" element={<div>HOME</div>}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/signin" element={<SignIn />}/>
  </Routes>
  );
}

export default App;
