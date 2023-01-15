import './App.css';
import Homepage from './Components/Pages/Homepage';
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
            <Route path="/" element={<Cover title="Roommate Finder" desc="The easiest way to find roommates." button="SIGN IN" link="/home" img="https://images.unsplash.com/photo-1630007808426-7be055a4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80" />} />
            <Route path="/questionnaire-start" element={<Cover title="Questions" back={true} desc="Take a short quiz to find compatible roommates." button="START" link="/questionnaire" img="https://images.unsplash.com/photo-1524439188326-e47322d1cef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />} />
            <Route path="/matches-start" element={<Cover title="Matches" back={true} desc="View your current matches." button="GO" link="/matches" img="https://images.unsplash.com/photo-1515283736202-cbe98351a5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />} />

            <Route path="/home" element={<Homepage />} />
            <Route path="/questionnaire" element={<Questions />} />
            <Route path="/matches" element={<Matches />} />
            
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<SignIn />}/>
          </Routes>
        </div>
  )
}

export default App;
