const Station = ({ data, selectedStation, onSelectStation }) => {

    const stations = Array.from(new Set(data.map(train => train.HEAD_SIGN)));
  
    return (
      <select value={selectedStation} onChange={(e) => onSelectStation(e.target.value)}>
        <option value="All Stations">All Stations</option>
        {stations.map((station, index) => (
          <option key={index} value={station}>
            {station}
          </option>
        ))}
      </select>
    );
  };
  
  export default Station;