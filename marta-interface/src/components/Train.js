const Train = ({
  DESTINATION,
  DIRECTION,
  EVENT_TIME,
  HEAD_SIGN,
  LINE,
  NEXT_ARR,
  STATION,
  TRAIN_ID,
  WAITING_SECONDS,
  WAITING_TIME,
  RESPONSETIMESTAMP,
  VEHICLELONGITUDE,
  VEHICLELATITUDE,
  DELAY,
  TRIP_ID
}) => {
  const isDelayed = DELAY !== "T0S";
  const firstLetter = STATION.charAt(0);

  return (
    <div className={`train ${isDelayed ? 'delayed' : 'on-time'}`}>
      <div className="train-initial">{firstLetter}</div>
      <div className="train-middle">
        <div className="train-top">
          <div className="train-station">{STATION}</div>
          <div className="train-arrow">&nbsp; &#8594; &nbsp;</div>
          <div className="train-station">{DESTINATION}</div>
        </div>
        <div className="train-bottom">
          <div className="train-line">{LINE}</div>
          <div className={`train-status ${isDelayed ? 'delayed' : 'on-time'}`}>
            {isDelayed ? 'Delayed' : 'On Time'}
          </div>
        </div>
      </div>
      <div className="train-waiting-time">{WAITING_TIME}</div>
    </div>
  );
};

export default Train;
