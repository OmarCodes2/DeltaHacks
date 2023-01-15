import { useContext } from "react";
import { ResponseContext } from "./Pages/Questions";

const NumInput = ({question, responseType, text}) => {
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
            {!text && <input className="input" type="number" pattern="[0-9]*" onChange={updateResponses}></input>}
            {text && <input className="input" type="text" onChange={updateResponses}></input>}
        </div>
    )
}

export default NumInput;