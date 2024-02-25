import React from 'react';

const Train = ({ DESTINATION, DIRECTION, EVENT_TIME, HEAD_SIGN,  LINE, NEXT_ARR, STATION, TRAIN_ID, WAITING_SECONDS, WAITING_TIME
, RESPONSETIMESTAMP, VEHICLELONGITUDE, VEHICLELATITUDE, DELAY, TRIP_ID}) => {
  const isDelayed = DELAY != "T0S";

  return (
    <div className={`train ${isDelayed ? 'DELAY' : 'ONTIME'}`} style={{ border: `1px solid ${LINE}`, margin: '10px', padding: '10px' }}>
      <h2>{DESTINATION}</h2>
      <p>Line Color: {LINE}</p>
      <p>Waiting Time: {WAITING_TIME}</p>
      <p>Status: {isDelayed ? 'Delayed' : 'On Time'}</p>
    </div>
  );
};

export default Train;



