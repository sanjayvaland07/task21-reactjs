import './card.css'
function Card({props})
{
    console.log(props)
    return(
        <div className="box">
            <img src={props.image} alt="" className="box-img" />
            <h3>{props.name}</h3>
            <p>{props.decr}</p>
        </div>
    )
}

export default Card;