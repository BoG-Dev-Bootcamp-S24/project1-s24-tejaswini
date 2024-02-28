import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar.js';
import TrainList from '../pages/TrainList.js';
import FilterBar from '../components/FilterBar.js';
import Station from '../components/Station.js';

export default function LinesPage() {
  // state for line color and loading status
  const [currColor, setCurrColor] = useState('blue');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // state for filter options
  const [arrivingTrains, setArrivingTrains] = useState(false);
  const [scheduledTrains, setScheduledTrains] = useState(true);
  const [isNorthbound, setIsNorthbound] = useState(false);
  const [isSouthbound, setIsSouthbound] = useState(false);
  const [isEastbound, setIsEastbound] = useState(false);
  const [isWestbound, setIsWestbound] = useState(false);
  const [selectedStation, setSelectedStation] = useState('All Stations');

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // load before fetching data
      try {
        const response = await fetch(`https://midsem-bootcamp-api.onrender.com/arrivals/${currColor}`);
        // error handling
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); //if response not OK, throw error
        }
        const jsonData = await response.json();
        setData(jsonData); // data = JSON from the response
      } catch (error) {
        console.error("Fetching trains data error: ", error);
        setData([]); // if error, set data to empty array
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currColor]); 
  
  const toggleArriving = () => {
    if (!arrivingTrains) {
      setArrivingTrains(true);
      setScheduledTrains(false);
    } else { 
      setArrivingTrains(false);
    }
  };
  
  const toggleScheduled = () => {
    if (!scheduledTrains) {
      setScheduledTrains(true);
      setArrivingTrains(false);
    } else {
      setScheduledTrains(false);
    }
  };
    
  const toggleNorthbound = () => {
    setIsNorthbound(prevState => !prevState);
    setIsSouthbound(false); 
  };
  
  const toggleSouthbound = () => {
    setIsSouthbound(prevState => !prevState);
    setIsNorthbound(false); 
  };
  
    
    const toggleEastbound = () => {
      setIsEastbound(prevState => !prevState);
      setIsWestbound(false);
    };
    
    const toggleWestbound = () => {
      setIsWestbound(prevState => !prevState);
      setIsEastbound(false);
    };
    

const handleLineChange = (color) => {
  setCurrColor(color);
  // Optionally reset station filter when line color changes
  setSelectedStation('All Stations');
};

if (loading) {
  return <div>Loading...</div>;
}

return (
  <div>
    <NavBar color={currColor} onLineChange={handleLineChange} />
    <FilterBar
      color={currColor}
      arrivingPressed={toggleArriving}
      scheduledPressed={toggleScheduled}
      north={toggleNorthbound}
      south={toggleSouthbound}
      east={toggleEastbound}
      west={toggleWestbound}
      arrivingTrains={arrivingTrains}
      scheduledTrains={scheduledTrains}
      isNorthbound={isNorthbound}
      isSouthbound={isSouthbound}
      isEastbound={isEastbound}
      isWestbound={isWestbound}
    />

    <Station
      data={data}
      selectedStation={selectedStation}
      onSelectStation={setSelectedStation}
    />

    <TrainList
      color={currColor}
      data={data}
      arrivingTrains={arrivingTrains}
      scheduledTrains={scheduledTrains}
      isNorthbound={isNorthbound}
      isSouthbound={isSouthbound}
      isEastbound={isEastbound}
      isWestbound={isWestbound}
      selectedStation={selectedStation}
    />
  </div>
);
}