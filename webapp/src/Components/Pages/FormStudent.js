import StringDropdown from "../StringDropdown";
import IntDropdown from "../IntDropdown";

const FormStudent = () => {
    return(
        <section className="form-section">
            <StringDropdown question="Select your program of study." items={["ibiomed", "engineering1", "music"]} responseType="program" />
            <IntDropdown question="Select your year of study." items={["1", "2", "3", "4", "5"]} responseType="year"/>
            <IntDropdown question="Select your gender identity." items={["male", "female", "other"]} responseType="gender"/>
        </section>
    )
}

export default FormStudent;