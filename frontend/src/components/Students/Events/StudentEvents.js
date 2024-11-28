import React, { useState, useEffect } from 'react';
import baseURL from "../../../auth/connection";
import './StudentEvents.css';

function StudentEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${baseURL}/student/events`);
        const data = await response.json();
        if (response.ok) {
          setEvents(data.events);
        } else {
          console.error('Error fetching events:', data.message);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Toggle event details visibility
  const handleToggleDetails = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, showDetails: !event.showDetails } : event
      )
    );
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        <div className="events-list">
          {events.map((event) => (
            <div
              key={event.id}
              className={`event-box ${event.showDetails ? 'open-details' : ''}`}
              onClick={() => handleToggleDetails(event.id)}
            >
              <h3 className="event-name">{event.event_name}</h3>
              <p><strong>Date:</strong> {event.event_date}</p>
              <p><strong>Time:</strong> {event.from_time} - {event.to_time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <div className="event-details">
                <h4>Event Coordinator</h4>
                <p><strong>Name:</strong> {event.event_coordinator_name}</p>
                <p><strong>Phone:</strong> {event.event_coordinator_phone}</p>
                <h4>Student Coordinator</h4>
                <p><strong>Name:</strong> {event.student_coordinator_name}</p>
                <p><strong>Phone:</strong> {event.student_coordinator_phone}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default StudentEvents;
