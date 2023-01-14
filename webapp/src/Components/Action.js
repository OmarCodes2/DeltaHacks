const Action = ({destination, name}) => {
    return(
        // <Link to={destination}>
            <div className="action-button">
                {name}
            </div>
        // </Link>
    )
}

export default Action;