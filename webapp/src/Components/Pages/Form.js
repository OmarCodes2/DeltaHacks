import { useContext, useState } from "react";
import FormLifestyle from "./FormLifestyle";
import FormMovein from "./FormMovein";
import FormRoommate from "./FormRoommate";
import FormStudent from "./FormStudent";
import { ResponseContext} from "./Questions"

const Form = () => {
    const { responses, setResponses } = useContext(ResponseContext);

    const [ page, setPage ] = useState(1);

    const prevPage = () => {
        setPage(prevPage => prevPage - 1);
    }

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
    }

    const updateResponses = (responseType, e) => {
        setResponses((prevResponses) => {
            return {...prevResponses, [responseType]: e.target.value}
        })
    }

    switch (page) {
        case 1:
            return(
                <FormStudent />
            );
        case 2:
            return(
                <FormLifestyle />
            );
        case 3:
            return(
                <FormRoommate />
            );
        case 4:
            return(
                <FormMovein />
            );
    }
}

export default Form;