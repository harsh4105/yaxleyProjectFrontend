import React from 'react';
import './PrevoiuslyAddedBatches.css';

const PreviouslyAddedBatches = ({ P1, P2, P3, P4,IELTS,batchName, description, date, LtL1, LtL2, PUL1, PUL2 }) => {
  return (
    <div className="details-container">
      <div className='event-web-heading'>
        <p>{IELTS}</p>
        <p>{batchName}</p>
      </div>
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

export default PreviouslyAddedBatches;
