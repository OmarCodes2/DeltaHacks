import Action from "./Action";

const Cover = ({title, back, desc, button, link, img}) => {
    return(
        <section className="cover">
            <div className="cover-half">
                {back && <div>BACK</div>}
                <h1>{title}</h1>
                <p>{desc}</p>
                <Action name={button} destination={link} />
            </div>
            <div className="cover-half cover-image">
                <img src={img}></img>
            </div>
        </section>
    )
}

export default Cover;