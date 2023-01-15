import Exit from "../Exit";
import MatchCard from "../MatchCard";

const Matches = () => {
    return(
        <div className="matches">
            <Exit />
            <h3>Here's your most compatible roommate match.</h3>
            <MatchCard name="The Man" image_id="1" bio="Fourth year, Commerce" email="fucjvck@mcmaster.ca" />
        </div>
    )
}

export default Matches;