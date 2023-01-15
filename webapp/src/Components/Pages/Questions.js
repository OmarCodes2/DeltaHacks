import { createContext, useState } from "react";
import Confirmation from "../Confirmation";
import Exit from "../Exit";
import Progress from "../Progress";
import Form from "./Form";

export const ResponseContext = createContext();

const Questions = () => {
    const [ page, setPage ] = useState(0);
    const [active, setActive] = useState(0);
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
        contact: null,
        names: []
    });

    const [ confirm, setConfirm ] = useState(false);
    
    return(
        <div className="questions">
            <Exit />
            <ResponseContext.Provider value={{responses, setResponses}}>
                {confirm && <Confirmation />}
                <Progress active={active} setActive={setActive} page={page} />
                <Form setConfirm={setConfirm} page={page} setPage={setPage} />
            </ResponseContext.Provider>
        </div>
    )
}

export default Questions;