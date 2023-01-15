import Action from "./Action";
import Back from "./Back";

const Cover = ({title, back, desc, button, link, img}) => {
    return(
        <section className="cover">
            <div className="cover-half cover-text">
                {back && <Back />}
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