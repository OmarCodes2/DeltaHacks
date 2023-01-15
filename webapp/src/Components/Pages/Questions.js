import { createContext, useState } from "react";
import Form from "./Form";

export const ResponseContext = createContext();

const Questions = () => {
    const [ responses, setResponses ] = useState({
        program: null,
        year: null,
        gender: null,
        mixed: null,
        ownPet: null,
        otherPet: null,
        ownAlcohol: null,
        otherAlcohol: null,
        ownCannabis: null,
        otherCannabis: null,
        ownTobacco: null,
        otherTobacco: null,
        ownVape: null,
        otherVape: null,
        wake: null,
        sleep: null,
        guests: null,
        roommateHopes: null,
        cleaning: null,
        cooking: null,
        numSearchers: null,
        maxRent: null,
        contact: null
    });
    
    return(
        <div className="questions">
            Progress bar goes here
            <ResponseContext.Provider value={{responses, setResponses}}>
                <Form />
            </ResponseContext.Provider>
        </div>
    )
}

export default Questions;