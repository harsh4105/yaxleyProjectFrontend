import React from 'react';
import './PreviouslyAddedEventsAndWebinar.css';

const PreviouslyAddedEventsAndWebinar = ({ LT1, PU1, PU2, PU3, PU4, P1, P2, P3, P4, eventHeading, webAndEvent, description, date, LtL1, LtL2, PUL1, PUL2 }) => {
  return (
    <div className="details-container">
      <div className='event-web-heading'>
        <p>{webAndEvent}</p>
        <p>{eventHeading}</p>
      </div>
      <h2>Link tag 1 :</h2><p>{LT1}</p>
      <h2>Paste Url 1 :</h2><p>{PU1}</p>
      <h2>Paste Url 2 :</h2><p>{PU2}</p>
      <h2>Paste Url 3 :</h2><p>{PU3}</p>
      <h2>Paste Url 4 :</h2><p>{PU4}</p>
      <h2>Pointer 1 :</h2><p>{P1}</p>
      <h2>Pointer 2 :</h2><p>{P2}</p>
      <h2>Pointer 3 :</h2><p>{P3}</p>
      <h2>Pointer 4 :</h2><p>{P4}</p>
      <h2>Description :</h2><p>{description}</p>
      <h2>Date :</h2><p>{date}</p>
      <h2>Link tag 5 :</h2><p>{LtL1}</p>
      <h2>Link tag 6 :</h2><p>{LtL2}</p>
      <h2>Paste Url 5 :</h2><p>{PUL1}</p>
      <h2>Paste Url 6 :</h2><p>{PUL2}</p>
    </div>
  );
}

export default PreviouslyAddedEventsAndWebinar;
