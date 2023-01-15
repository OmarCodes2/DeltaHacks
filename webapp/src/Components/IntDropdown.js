import { useContext } from "react";
import { ResponseContext } from "./Pages/Questions";

const IntDropdown = ({question, items, responseType}) => {
    const { responses, setResponses } = useContext(ResponseContext);

    const updateResponses = (e) => {
        console.log(responses)
        setResponses((prevResponses) => {
            return {...prevResponses, [responseType]: e.target.value}
        })
    }

    return(
        <div className="question">
            <p>{question}</p>
            <select className="string-dropdown" onChange={(e) => updateResponses(e)}>
                {items.map((item, i) => <option value={i} key={i}>{item}</option>)}
            </select>
        </div>
    )
}

export default IntDropdown;