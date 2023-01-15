import { useContext } from "react";
import { ResponseContext } from "./Pages/Questions";

const StringDropdown = ({question, items, responseType}) => {
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
                {items.map((item) => <option value={item.toLowerCase()} key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default StringDropdown;