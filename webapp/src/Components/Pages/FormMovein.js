import NumInput from "../NumInput";

const FormMovein = () => {

    return(
        <section className="form-section">
            <NumInput question="How many people, including yourself, are you looking with?" responseType="numSearchers" />
            <NumInput question="How many additional people are you seeking?" responseType="numHopefuls" />
            <NumInput question="What is the maximum monthly rent (excluding utilities) you can afford?" responseType="maxRent" />
            <NumInput question="What is your preferred email of contact?" responseType="contact" text={true}/>
        </section>
    )
}

export default FormMovein;