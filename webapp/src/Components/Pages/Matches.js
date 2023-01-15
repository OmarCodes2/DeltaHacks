import Exit from "../Exit";
import MatchCard from "../MatchCard";

const Matches = () => {
    return(
        <div className="matches">
            <Exit />
            <h3>Here are your most compatible roommate matches.</h3>
            <MatchCard name="Henna Sampath" image="https://i.pinimg.com/originals/fa/9e/1b/fa9e1be666bf0cca1fb2dde5ea764908.jpg" bio="Fourth year, Commerce" email="sampath@mcmaster.ca" />
            <MatchCard name="Sahar Dahi" image="https://i.pinimg.com/originals/c4/8a/eb/c48aeb0e8ad980fe921d1953d69f0b77.jpg" bio="Third year, Health Sciences" email="dahis2@mcmaster.ca" />
            <MatchCard name="Gina Cho & Sarah Liu" image="https://live.staticflickr.com/6170/6163307798_44f7a9655b_b.jpg" bio="Third year, Computer Science & Third year, Biochemistry" email="chog@mcmaster.ca & lius23@mcmaster.ca" />
        </div>
    )
}

export default Matches;