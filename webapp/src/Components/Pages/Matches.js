import Card from "../Card";

const Matches = ({name, image_id, body}) => {
    return(
        <div className="matches">
            Matches
            <Card name={name} image_id={image_id} body={body}/>
        </div>
    )
}

export default Matches;