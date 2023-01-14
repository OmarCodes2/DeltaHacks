import './App.css';
import Homepage from './Components/Pages/Homepage';
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Questions from './Components/Pages/Questions';
import Matches from './Components/Pages/Matches';
import Cover from './Components/Cover';

function App() {
  return (
        <div className="App">
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/questionnaire-start" element={<Cover title="Questions" back={true} desc="Take a short quiz to find compatible roommates." button="START" link="/questionnaire" img="https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-02-scaled.jpg" />} />
            <Route path="/questionnaire" element={<Questions />} />
            <Route path="/matches" element={<Matches />} />
          </Routes>
        </div>
=======

function App() {
  return (
    <div className="App">
        <Homepage />
    </div>
>>>>>>> a742b615570b5e018578b90ada67f697252e044e
  );
}

export default App;
