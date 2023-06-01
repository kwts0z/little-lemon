import './Styles/TestimonialCard.css'
import star from '../Assets/star.png';

function TestimonialCard(props){
  return(
    <div className='testimonial-card'>
      <div className="stars">
        <img src={star} alt="star"></img>
        <img src={star} alt="star"></img>
        <img src={star} alt="star"></img>
        <img src={star} alt="star"></img>
        <img src={star} alt="star"></img>
      </div>
      <img src={props.profImage} alt="profile"></img>
      <h3>{props.name}</h3>
      <p>"{props.comment}"</p>
    </div>
  );
}

export default TestimonialCard;