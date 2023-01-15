import StringDropdown from "../StringDropdown";
import IntDropdown from "../IntDropdown";

const FormStudent = () => {
    return(
        <section className="form-section">
            <StringDropdown question="Select your program of study." items={["Computer Science", "Economics", "Humanities", "Social Sciences", "Art History", "Anthropology", "Biology", "Biochemistry", "Classics", "Communications", "English", "Engineering Health and Society", "Integrated Biomedical Engineering & Health Sciences", "Indigenous Studies", "Kinesiology", "Linguistics", "Life Sciences", "Media Arts", "Mathematics and Statistics", "Psychology"]} responseType="program" />
            <IntDropdown question="Select your year of study." items={["1", "2", "3", "4", "5"]} responseType="year"/>
            <IntDropdown question="Select your gender identity." items={["Man", "Woman", "Other"]} responseType="gender"/>
        </section>
    )
}

export default FormStudent;