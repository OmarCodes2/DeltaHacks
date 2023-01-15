import IntDropdown from "../IntDropdown";
import Selection from "../Selection";

const FormLifestyle = () => {
    return(
        <section className="form-section">
            <Selection question="I prefer to live in single/mixed gender housing." option1="Single" option2="Mixed" responseType="mixed" />
            <Selection question="I own a pet." option1="Yes" option2="No" responseType="ownPet" />
            <Selection question="I am comfortable living with someone with a pet." option1="Yes" option2="No" responseType="otherPet" />
            <Selection question="I smoke tobacco." option1="Yes" option2="No" responseType="ownTobacco" />
            <Selection question="I am comfortable living with someone who smokes tobacco." option1="Yes" option2="No" responseType="otherTobacco" />
            <Selection question="I smoke cannabis." option1="Yes" option2="No" responseType="ownCannabis" />
            <Selection question="I am comfortable living with someone who smokes cannabis." option1="Yes" option2="No" responseType="otherCannabis" />
            <Selection question="I drink alcohol." option1="Yes" option2="No" responseType="ownAlcohol" />
            <Selection question="I am comfortable living with someone who drinks." option1="Yes" option2="No" responseType="otherAlcohol" />
            <Selection question="I vape." option1="Yes" option2="No" responseType="ownVape" />
            <Selection question="I am comfortable living with someone who vapes." option1="Yes" option2="No" responseType="otherVape" />
            <IntDropdown question="I wake up at approximately: " items={["Before 7AM", "7-9AM", "9-11AM", "After 11AM"]} responseType="wake" />
            <IntDropdown question="I sleep at approximately: " items={["Before 10PM", "10–12AM", "After 12AM"]} responseType="sleep" />
            <IntDropdown question="I have guests over: " items={["Never/Occasionally", "Frequently/Weekly", "Often/Overnight"]} responseType="guests" />
        </section>
    )
}

export default FormLifestyle;