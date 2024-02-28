import React from 'react';
import Train from '../components/Train.js';
export default function TrainList({
  color,
  data,
  arrivingTrains,
  scheduledTrains,
  isNorthbound,
  isSouthbound,
}) {
  if (!data) return <p>Data is loading or not available.</p>;

  const filteredData = data.filter((train) => {
    const isArriving = train.WAITING_TIME === "ARRIVING";
    const isNorthboundTrain = train.DIRECTION === "N";
    const isSouthboundTrain = train.DIRECTION === "S";

    // filter by arrival status
    const matchesArrivalFilter = arrivingTrains ? isArriving : scheduledTrains ? !isArriving : true;

    // filter by direction
    const matchesDirectionFilter = (isNorthbound && isNorthboundTrain) || (isSouthbound && isSouthboundTrain) || (!isNorthbound && !isSouthbound);

    return train.LINE === color.toUpperCase() && matchesArrivalFilter && matchesDirectionFilter;
  });

  return (
    <div>
      <div className="line-color-display">{color.toUpperCase()} Line</div>
      {filteredData.length > 0 ? (
        filteredData.map((train, index) => (
          <Train key={index} {...train} />
        ))
      ) : (
        <p>No trains available for the {color} line.</p>
      )}
    </div>
  );
}

