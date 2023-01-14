import './App.css';
import { Route, Routes } from "react-router-dom";
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Progress from './Components/progress';

function App() {
  return ( 
  <Routes>
    <Route path="/" element={<div>HOME</div>}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/signin" element={<SignIn />}/>
    <Route path="/progress-temp" element={<Progress />}/>
  </Routes>
  );
}

export default App;
