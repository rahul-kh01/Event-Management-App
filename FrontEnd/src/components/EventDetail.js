import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./EventDetail.css";

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/event/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error("There was an error fetching the event details!", error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  // Check if 'attendees' is an array
  const attendees = Array.isArray(event.attendees) ? event.attendees : [];

  return (
    <div
      className="event-detail-img-container"
      style={{
        backgroundImage: `url('/img15.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="event-detail-container">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <h3>Attendees</h3>
        <ul>
          {attendees.map((attendee) => (
            <li key={attendee}>{attendee}</li>
          ))}
        </ul>
        <Link to={"/eventlist"} className="back-btn">
          Back
        </Link>
      </div>
    </div>
  );
};

export default EventDetail;
