import './Styles/Card.css';

function Card(props){
  return(
    <div className="Card">
      <img src={props.img} alt={props.alt}></img>
      <h3>{props.title}</h3>
      <p>{props.info}</p>
      <button>Order a delivery</button>
    </div>
  );
}

export default Card;