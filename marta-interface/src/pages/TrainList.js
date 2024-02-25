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
  const filteredData = data.filter(train => train.LINE_COLOR.toLowerCase() === color.toLowerCase());

  console.log(filteredData);
  
  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((trainData, index) => (
          <Train key={index} {...trainData} />
        ))
      ) : (
        <p>No trains available for the {color} line.</p>
      )}
    </div>
  );
};

export default TrainList;
