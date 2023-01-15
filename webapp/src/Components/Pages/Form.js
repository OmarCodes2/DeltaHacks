import FormLifestyle from "./FormLifestyle";
import FormMovein from "./FormMovein";
import FormRoommate from "./FormRoommate";
import FormStudent from "./FormStudent";

const Form = ({ setConfirm, page, setPage }) => {

    const prevPage = () => {
        window.scrollTo(0,0)
        page != 0 && setPage(prevPage => prevPage - 1);
    }

    const nextPage = () => {
        window.scrollTo(0,0)
        page != 3 && setPage(prevPage => prevPage + 1);
    }

    switch (page) {
        case 0:
            return(
                <div className="form-wrapper">
                    <p className="form-page-label">First, let's get some basic details about you.</p>
                    <FormStudent />
                    <div className="step-buttons">
                        <div className="step-button" onClick={nextPage}>NEXT</div>
                    </div>
                </div>
            );
        case 1:
            return(
                <div className="form-wrapper">
                    <p className="form-page-label">Next, let's delve into your lifestyle preferences.</p>
                    <FormLifestyle />
                    <div className="step-buttons">
                        <div className="step-button" onClick={prevPage}>PREV</div>
                        <div className="step-button" onClick={nextPage}>NEXT</div>
                    </div>
                </div>
            );
        case 2:
            return(
                <div className="form-wrapper">
                    <p className="form-page-label">Now let's consider what you're looking for in a roommate.</p>
                    <FormRoommate />
                    <div className="step-buttons">
                        <div className="step-button" onClick={prevPage}>PREV</div>
                        <div className="step-button" onClick={nextPage}>NEXT</div>
                    </div>
                </div>
            );
        case 3:
            return(
                <div className="form-wrapper">
                    <p className="form-page-label">Finally, let's take in logistical move-in details.</p>
                    <FormMovein />
                    <div className="step-buttons">
                        <div className="step-button" onClick={prevPage}>PREV</div>
                        <div className="step-button" onClick={() => {
                            console.log('submitting!')
                            setConfirm(true)
                        }}>SUBMIT</div>
                    </div>
                </div>
            );
    }
}

export default Form;