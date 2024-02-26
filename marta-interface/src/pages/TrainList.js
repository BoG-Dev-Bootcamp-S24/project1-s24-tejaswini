/* This component should have a prop specifying the line color 
(i.e. blue, gold, red, or green), and would contain the interface 
for all trains in the given line. 
The current line that's being displayed should be stored as a state 
in the LinesPage component. 
Within the TrainList.js component, the data should be filtered to 
only return info for trains that are part of the specific line. 
For example, for the gold line we only want an array of gold trains. 
*/
import React from 'react';
import Train from '../components/Train.js';

const TrainList = ({ color, data }) => {
  if (!data) return <p>Data is loading or not available.</p>;

  const filteredData = data.filter(train => train.LINE === color.toUpperCase());

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((trainData, index) => (
          <Train
            key={index}
            DESTINATION={trainData.DESTINATION}
            DIRECTION={trainData.DIRECTION}
            EVENT_TIME={trainData.EVENT_TIME}
            HEAD_SIGN={trainData.HEAD_SIGN}
            LINE={trainData.LINE}
            NEXT_ARR={trainData.NEXT_ARR}
            STATION={trainData.STATION}
            TRAIN_ID={trainData.TRAIN_ID}
            WAITING_SECONDS={trainData.WAITING_SECONDS}
            WAITING_TIME={trainData.WAITING_TIME}
            RESPONSETIMESTAMP={trainData.RESPONSETIMESTAMP}
            VEHICLELONGITUDE={trainData.VEHICLELONGITUDE}
            VEHICLELATITUDE={trainData.VEHICLELATITUDE}
            DELAY={trainData.DELAY}
            TRIP_ID={trainData.TRIP_ID}
          />
        ))
      ) : (
        <p>No trains available for the {color} line.</p>
      )}
    </div>
  );
};

export default TrainList;
