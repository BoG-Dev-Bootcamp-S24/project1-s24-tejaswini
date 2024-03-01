const Station = ({ data, selectedStation, onSelectStation }) => {
  const stations = Array.from(new Set(data.map(train => train.STATION)));

  return (
    <div className="station-menu">
      <h5 class="station-header">Select your starting station</h5>
      <button className={`station-button ${selectedStation === 'All Stations' ? 'active' : ''}`} onClick={() => onSelectStation('All Stations')}>
        All Stations
      </button>
      {stations.map((station, index) => (
        <button key={index} className={`station-button ${selectedStation === station ? 'active' : ''}`} onClick={() => onSelectStation(station)}>
          {station}
        </button>
      ))}
    </div>
  );
};

export default Station;
