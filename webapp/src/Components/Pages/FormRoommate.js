import IntDropdown from "../IntDropdown";

const FormRoommate = () => {
    return(
        <section className="form-section">
            <IntDropdown question="From a roommate(s), I'm looking for:" items={["Someone to split the bills and chores", "Someone friendly, but don't have to be best friends", "Someone to hangout and do stuff with"]} responseType="roommateHopes" />
            <IntDropdown question="I cook: " items={["Every meal/day", "Every other day", "Once a month/Never"]} responseType="cooking" />
            <IntDropdown question="I clean: " items={["Every day", "Every week", "Longer than a week"]} responseType="cleaning" />
        </section>
    )
}

export default FormRoommate;