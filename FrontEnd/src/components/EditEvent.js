import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./EditEvent.css"; // Import the CSS file

const EditEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
  });
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  const { name, description, date, location } = event;

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEvent();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/event/${id}`, event);
      navigate("/eventlist");
    } catch (error) {
      console.error("There was an error updating the event!", error);
      setError("Failed to update the event. Please try again later.");
    }
  };

  const loadEvent = async () => {
    try {
      const result = await axios.get(`http://localhost:8081/event/${id}`);
      setEvent(result.data);
    } catch (error) {
      console.error("There was an error fetching the event details!", error);
      setError("Failed to load event details. Please try again later.");
    } finally {
      setLoading(false); // Ensure loading state is updated
    }
  };

  if (loading) return <div>Loading event details...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return (
    <div className="edit-event-container">
      <h1>Edit Event Form</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <Link to="/eventlist" className="cancel-btn">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EditEvent;
