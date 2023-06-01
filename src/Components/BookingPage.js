import BookingForm from "./BookingForm";
import './Styles/BookingForm.css';

function BookingPage(props){
  return(
    <div className="booking-page">
      <h1>Reservation</h1>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}></BookingForm>
    </div>
  );
}

export default BookingPage;