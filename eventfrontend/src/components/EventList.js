import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EventList.css"; // Import the CSS file

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const result = await axios.get("http://localhost:8081/event/getAll");
        setEvents(result.data);
      } catch (error) {
        console.error("There was an error loading the events!", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const deleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`http://localhost:8081/event/${id}`);
        setEvents(events.filter((event) => event.id !== id));
      } catch (error) {
        console.error("There was an error deleting the event!", error);
        setError("Failed to delete event. Please try again later.");
      }
    }
  };

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Location</th>
            <th>Attendees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>
                {event.attendees.length > 0 ? (
                  <ul>
                    {event.attendees.map((attendee) => (
                      <li key={attendee.id}>
                        {attendee.name} ({attendee.email})
                      </li>
                    ))}
                  </ul>
                ) : (
                  "No attendees"
                )}
              </td>
              <td style={{ textAlign: "center" }}>
                <Link
                  to={`/eventdetail/${event.id}`}
                  style={{ marginRight: "10px" }}
                  className="view-btn"
                >
                  View
                </Link>
                <Link
                  to={`/editevent/${event.id}`}
                  style={{ marginRight: "10px" }}
                  className="edit-btn"
                >
                  Edit
                </Link>
                <button
                  className="delete-btn"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
