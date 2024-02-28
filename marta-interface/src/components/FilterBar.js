const FilterBar = ({
  color, arrivingPressed, scheduledPressed, north, south,
  east, west, arrivingTrains, scheduledTrains,
  isNorthbound, isSouthbound, isEastbound, isWestbound
}) => {
  const isEastWest = color === 'GREEN' || color === 'BLUE';

  const buttons = [
    { label: 'Arriving', isActive: arrivingTrains, onClick: arrivingPressed },
    { label: 'Scheduled', isActive: scheduledTrains, onClick: scheduledPressed },
    ...isEastWest ? [
      { label: 'Eastbound', isActive: isEastbound, onClick: east },
      { label: 'Westbound', isActive: isWestbound, onClick: west }
    ] : [
      { label: 'Northbound', isActive: isNorthbound, onClick: north },
      { label: 'Southbound', isActive: isSouthbound, onClick: south }
    ]
  ];

  return (
    <div className="filterButtons">
      {buttons.map(({ label, isActive, onClick }) => (
        <button
          key={label}
          className={`filterButton ${isActive ? 'active' : ''}`}
          onClick={onClick}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
