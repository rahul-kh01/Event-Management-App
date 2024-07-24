import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./EventForm.css";

const EventForm = () => {
  let navigate = useNavigate();

  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
  });

  const { name, description, date, location } = event;

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/event/add", event);
    navigate("/eventlist");
  };

  return (
    <div className="event-form-container">
      <h1>Add Event Form</h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <Link to="/" className="cancel-btn">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EventForm;
