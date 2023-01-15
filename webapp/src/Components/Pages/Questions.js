import { createContext, useState } from "react";
import Confirmation from "../Confirmation";
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
        numHopefuls: null,
        maxRent: null,
        contact: null
    });

    const [ confirm, setConfirm ] = useState(false);
    
    return(
        <div className="questions">
            <ResponseContext.Provider value={{responses, setResponses}}>
                {confirm && <Confirmation setConfirm={setConfirm} />}
                Progress bar goes here
                <Form setConfirm={setConfirm} />
            </ResponseContext.Provider>
        </div>
    )
}

export default Questions;