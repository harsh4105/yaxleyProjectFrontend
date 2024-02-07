import React, { useState } from 'react';

const Events = () => {
  // Example data for events
  const [events, setEvents] = useState([
    { id: 1, title: 'Event 1', date: '2024-02-10', location: 'Location 1' },
    { id: 2, title: 'Event 2', date: '2024-02-15', location: 'Location 2' },
    { id: 3, title: 'Event 3', date: '2024-02-20', location: 'Location 3' }
  ]);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
