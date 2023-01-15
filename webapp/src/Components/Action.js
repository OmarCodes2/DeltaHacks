import { Link } from "react-router-dom"

const Action = ({destination, name}) => {
    return(
        <Link to={destination} className="action-button">
            <div>
                {name}
            </div>
        </Link>
    )
}

export default Action;