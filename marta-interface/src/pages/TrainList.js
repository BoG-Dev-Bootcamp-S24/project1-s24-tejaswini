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
  selectedStation
}) {
  if (!data) return <p>Data is loading or not available.</p>;


  const filteredData = data.filter((train) => {
    const isArriving = train.WAITING_TIME === "Arriving";
    const matchesArrivalFilter = arrivingTrains ? isArriving : scheduledTrains ? !isArriving : true;
  
    let matchesDirectionFilter = true; 
    if (isNorthbound) {
      matchesDirectionFilter = train.DIRECTION === "N";
    } else if (isSouthbound) {
      matchesDirectionFilter = train.DIRECTION === "S";
    } else if (isEastbound) {
      matchesDirectionFilter = train.DIRECTION === "E";
    } else if (isWestbound) {
      matchesDirectionFilter = train.DIRECTION === "W";
    }
  
    const matchesStationFilter = selectedStation === 'All Stations' || train.STATION === selectedStation;
  
    return train.LINE === color.toUpperCase() && matchesArrivalFilter && matchesDirectionFilter && matchesStationFilter;
  });
  

  return (
    <div>
      <div className="list-container">
      {filteredData.length > 0 ? (
        filteredData.map((train, index) => (
          <Train key={index} {...train} />
        ))
      ) : (
        <p>No trains available for the {color} line.</p>
      )}
      </div>
    </div>
  );
}
