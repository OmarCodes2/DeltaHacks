import StringDropdown from "../StringDropdown";
import IntDropdown from "../IntDropdown";

const FormStudent = () => {
    return(
        <section className="form-section">
            <StringDropdown question="Select your program of study." items={["iBioMed", "Engineering 1", "Music"]} responseType="program" />
            <IntDropdown question="Select your year of study." items={["1", "2", "3", "4", "5"]} responseType="year"/>
            <IntDropdown question="Select your gender identity." items={["Male", "Female", "Other"]} responseType="gender"/>
        </section>
    )
}

export default FormStudent;