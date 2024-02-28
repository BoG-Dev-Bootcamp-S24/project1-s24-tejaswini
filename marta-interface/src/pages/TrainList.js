import React from 'react';
import Train from '../components/Train.js';
export default function TrainList({
  color,
  data,
  arrivingTrains,
  scheduledTrains,
  isNorthbound,
  isSouthbound,
  isEastbound,
  isWestbound,
}) {
  if (!data) return <p>Data is loading or not available.</p>;

  const isEastWest = color === 'GREEN' || color === 'BLUE';

  const filteredData = data.filter((train) => {
    const isArriving = train.WAITING_TIME === "ARRIVING";
    const matchesArrivalFilter = arrivingTrains ? isArriving : scheduledTrains ? !isArriving : true;

    let matchesDirectionFilter = false;
    if (isEastWest) {
      const isEastboundTrain = train.DIRECTION === "E";
      const isWestboundTrain = train.DIRECTION === "W";
      matchesDirectionFilter = (isEastbound && isEastboundTrain) || (isWestbound && isWestboundTrain) || (!isEastbound && !isWestbound);
    } else {
      const isNorthboundTrain = train.DIRECTION === "N";
      const isSouthboundTrain = train.DIRECTION === "S";
      matchesDirectionFilter = (isNorthbound && isNorthboundTrain) || (isSouthbound && isSouthboundTrain) || (!isNorthbound && !isSouthbound);
    }

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
