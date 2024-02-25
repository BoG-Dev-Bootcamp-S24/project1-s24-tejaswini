import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar.js';
import TrainList from '../components/Train.js';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState('blue'); // default to 'blue' line bc it runs at night
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://midsem-bootcamp-api.onrender.com/arrivals/${currColor}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Fetching trains data error: ", error));
  }, [currColor]); // when currColor changes

  const handleLineChange = (color) => {
    setCurrColor(color);
    setLoading(true); // when line changes
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar color={currColor} onLineChange={handleLineChange} data={data?.stations} />
      <TrainList color={currColor} data={data?.trains} />
    </div>
  );




  
}

