import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar.js';
import TrainList from '../pages/TrainList.js';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState('blue'); // default to 'blue' line bc it runs at night
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
        setData([]); // In case of an error, fall back to default empty data
      } finally {
        setLoading(false); // Stop loading regardless of the fetch result
      }
    }

    fetchData();
  }, [currColor]); // run the effect only when currColor changes

  const handleLineChange = (color) => {
    setCurrColor(color);
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <NavBar color={currColor} onLineChange={handleLineChange} />
      <TrainList color={currColor} data={data} />
    </div>
  );
}
