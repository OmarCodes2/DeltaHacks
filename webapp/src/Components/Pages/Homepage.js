import Action from "../Action";

const Homepage = () => {
    return(
        <section className="homepage">
            <div className="homepage-wrapper">
                <h1>Roommate Matcher</h1>
                <p>Two minutes of questions. A year–or more–of perfect roommates. Take the test to find compatible roommates this season.</p>
                <div className="homepage-buttons">
                    <Action name="TAKE THE TEST" destination="/questionnaire-start" />
                    <Action name="VIEW YOUR MATCHES" destination="/matches-start" />
                </div>
            </div>
        </section>
    )
}

export default Homepage;