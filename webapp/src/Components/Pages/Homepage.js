import Action from "../Action";

const Homepage = () => {
    return(
        <section className="homepage">
            <div className="homepage-wrapper">
                <h1>Roommate Matcher</h1>
                <p>Take the test to find and contact compatible roommates this season</p>
                <div className="homepage-buttons">
                    <Action name="Take the test" destination="/questionnaire-start" />
                    <Action name="View your matches" destination="/matches-start" />
                </div>
            </div>
        </section>
    )
}

export default Homepage;