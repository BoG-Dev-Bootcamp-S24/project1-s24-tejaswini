import React from 'react';

const Train = ({ DESTINATION, DIRECTION, EVENT_TIME, HEAD_SIGN, LINE, NEXT_ARR, STATION, TRAIN_ID, WAITING_SECONDS, WAITING_TIME, RESPONSETIMESTAMP, VEHICLELONGITUDE, VEHICLELATITUDE, DELAY, TRIP_ID }) => {
  const isDelayed = DELAY !== "T0S";

  return (
    <div className={`train ${isDelayed ? 'delayed' : 'on-time'}`}>
      <div className="train-route">
        <span className="train-station">{STATION}</span>
        <span className="train-arrow"> --{'>'}</span>
        <span className="train-station">{DESTINATION}</span>
        
        <span className={`train-line ${LINE}`}>{LINE}</span>
      </div>
      <div className="train-status">{isDelayed ? 'Delayed' : 'On Time'}</div>
      <div className="train-waiting-time">{WAITING_TIME}</div>
    </div>
  );
};
export default Train;