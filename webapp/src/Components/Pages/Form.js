import { useState } from "react";
import FormLifestyle from "./FormLifestyle";
import FormMovein from "./FormMovein";
import FormRoommate from "./FormRoommate";
import FormStudent from "./FormStudent";

const Form = () => {
    const [ page, setPage ] = useState(1);

    const prevPage = () => {
        page != 1 && setPage(prevPage => prevPage - 1);
    }

    const nextPage = () => {
        page != 4 && setPage(prevPage => prevPage + 1);
    }

    switch (page) {
        case 1:
            return(
                <div className="form-wrapper">
                    STUDENT
                    <FormStudent />
                    <div className="step-buttons">
                        <div className="step-button" onClick={prevPage}>PREV</div>
                        <div className="step-button" onClick={nextPage}>NEXT</div>
                    </div>
                </div>
            );
        case 2:
            return(
                <div className="form-wrapper">
                    LIFESTYLE
                    <FormLifestyle />
                    <div className="step-buttons">
                        <div className="step-button" onClick={prevPage}>PREV</div>
                        <div className="step-button" onClick={nextPage}>NEXT</div>
                    </div>
                </div>
            );
        case 3:
            return(
                <div className="form-wrapper">
                    ROOMIE
                    <FormRoommate />
                    <div className="step-buttons">
                        <div className="step-button" onClick={prevPage}>PREV</div>
                        <div className="step-button" onClick={nextPage}>NEXT</div>
                    </div>
                </div>
            );
        case 4:
            return(
                <div className="form-wrapper">
                    MOVE IN
                    <FormMovein />
                    <div className="step-buttons">
                        <div className="step-button" onClick={prevPage}>PREV</div>
                        <div className="step-button" onClick={nextPage}>NEXT</div>
                    </div>
                </div>
            );
    }
}

export default Form;