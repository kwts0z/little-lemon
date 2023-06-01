import React, {useState} from "react";
import './Styles/BookingForm.css';

function BookingForm(props){
  const [date, setDate] = useState("");
  const [time, setTime] = useState("-:-");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [isValid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  }

  const handleChange = (e) => {
    setDate(e.target.value);
    props.dispatch({type: 'example', date: e.target.value});
  }

  return(
    <form method="post" onSubmit={handleSubmit}>
      <div className="date-section">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="time-section">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          required
          onChange={(e) => {
            setTime(e.target.value);
          }}
        >
          {props.availableTimes.map((time, index) => (
            <option key={index}>{time}</option>
          ))}
        </select>
      </div>
      <div className="guests-section">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="15"
          id="guests"
          value={guests}
          required
          onChange={(e) => {
            setGuests(e.target.value);
          }}
        />
      </div>
      <div className="occasion-section">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"
          value={occasion}
          required
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
        >
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
      </div>
      <button type="submit" disabled={!date} value="Submit" onClick={props.submitForm} aria-label="On Click">Make Your reservation</button>
    </form>
  );
}

export default BookingForm;