import React from 'react';

const Train = ({ DESTINATION, LINE_COLOR, WAITING_TIME, STATUS }) => {
  // The props should match the actual data keys you receive from the API
  const isDelayed = STATUS == "DELAY";

  return (
    <div className={`train ${isDelayed ? 'DELAY' : 'ONTIME'}`} style={{ border: `1px solid ${LINE_COLOR}`, margin: '10px', padding: '10px' }}>
      <h2>{DESTINATION}</h2>
      <p>Line Color: {LINE_COLOR}</p>
      <p>Waiting Time: {WAITING_TIME}</p>
      <p>Status: {isDelayed ? 'Delayed' : 'On Time'}</p>
    </div>
  );
};

export default Train;



