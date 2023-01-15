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
            <Route path="/" element={<Cover title="RoomE" desc="Two minutes of questions. A year–or more–of perfect roommates." button="SIGN IN" link="/signin" img="https://assets.campusboard.co.uk/listing_photos/05b9378b-69b1-46c1-a4d4-c14bdff1f937/large/pic.jpg?1598948413" />} />
            <Route path="/questionnaire-start" element={<Cover title="Questions" back={true} desc="Take a short quiz to find your most compatible roommates." button="START" link="/questionnaire" img="https://www.omega-re.co.uk/wp-content/uploads/2021/07/photo-1604881988758-f76ad2f7aac1-720x480.jpeg" />} />
            <Route path="/matches-start" element={<Cover title="Matches" back={true} desc="View your current rommate matches." button="GO" link="/matches" img="https://www.moveit.ca/wp-content/uploads/2015/09/pack-moving-boxes.jpg" />} />

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
