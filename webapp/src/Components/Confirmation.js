import Action from "./Action";

const Confirmation = () => {
    return(
        <section className="confirmation">
            <div className="confirmation-wrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/716/716225.png"></img>
                <p>Your responses have been saved and processed.</p>
                <Action destination="/matches" name="SEE MATCHES" />
            </div>
        </section>
    )
}

export default Confirmation;