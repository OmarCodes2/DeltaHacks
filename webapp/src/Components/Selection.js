import { useContext, useState } from "react";
import { ResponseContext } from "./Pages/Questions";

const Selection = ({question, option1, option2, responseType}) => {
    const [ active, setActive ] = useState(false);
    const { responses, setResponses } = useContext(ResponseContext);

    const updateResponses = (status, activity) => {
        setResponses((prevResponses) => {
            return {...prevResponses, [responseType]: status}
        })
        setActive(activity)
    }

    return(
        <div className="question">
            <p>{question}</p>
            <div className="selections">
                <div className={active === 1 ? "active-selection" : "selection"} onClick={() => updateResponses(true, 1)}>{option1}</div>
                <div className={active === 2 ? "active-selection" : "selection"} onClick={() => updateResponses(false, 2)}>{option2}</div>
            </div>
        </div>
    )
}

export default Selection;