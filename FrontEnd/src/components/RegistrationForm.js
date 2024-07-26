import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventId = 2; // Example event ID, replace with actual event ID
    const attendee = { name, email };

    fetch(`http://localhost:8081/event/${eventId}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.id) {
          setMessage("Registration successful!");
          setName("");
          setEmail("");
        } else {
          setMessage("Registration failed.");
        }
      })
      .catch((error) => setMessage("Error: " + error.message));
  };

  return (
    <div className="container">
      <header className="home-banner">
        <h1>Register for Event</h1>
        <form onSubmit={handleSubmit} id="registrationForm">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">
            Register
          </button>
          <Link to="/" className="back-btn">
            Back
          </Link>
        </form>
        {typeof message === "string" && message && <p>{message}</p>}
      </header>
    </div>
  );
};

export default RegistrationForm;
