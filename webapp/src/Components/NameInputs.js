import { useContext } from "react";
import { ResponseContext } from "./Pages/Questions";

const NameInputs = ({numNames, responseType}) => {
    const { responses, setResponses } = useContext(ResponseContext);

    const updateResponses = (e, i) => {
        setResponses((prevResponses) => {
            return {...prevResponses, [responseType]: [...prevResponses.names, e.target.value]}
        })
    }

    const inputs = []
    for (let i = 0; i < numNames; i++) {
        inputs.push(<div key={`name${i+1}input`} className="name-input">
            <label className="input-label" htmlFor={`name${i+1}`}>Person {i+1}:</label>
            <input className="input" type="text" id={`name${i+1}`} onBlur={(e) => updateResponses(e, i)}></input>
        </div>)
    }

    return(
        <div className="question">
            {inputs}
        </div>
    )
}

export default NameInputs;