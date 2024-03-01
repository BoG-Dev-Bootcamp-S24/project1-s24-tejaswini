import React from 'react';

const NavBar = ({ color, onLineChange }) => {
  const handleLineClick = (newColor) => {
    onLineChange(newColor);
  };

  const lineColors = {
    gold: 'rgba(255, 220, 0, 0.40)',
    red: 'rgba(183, 0, 0, 0.40)',
    green: 'rgba(0, 183, 0, 0.40)',
    blue: 'rgba(0, 0, 183, 0.40)',
    gray: 'rgba(0, 0, 0, 0.40)'
  };

  return (
    <nav>
      <div className="nav-buttons"> 
        <button onClick={() => handleLineClick('gold')} style={{ background: color === 'gold' ? lineColors.gold : lineColors.gray }}>Gold Line</button>
        <button onClick={() => handleLineClick('red')} style={{ background: color === 'red' ? lineColors.red : lineColors.gray }}>Red Line</button>
        <button onClick={() => handleLineClick('green')} style={{ background: color === 'green' ? lineColors.green : lineColors.gray }}>Green Line</button>
        <button onClick={() => handleLineClick('blue')} style={{ background: color === 'blue' ? lineColors.blue : lineColors.gray }}>Blue Line</button>
      </div>
      <div className="line-color-display" style={{ background: lineColors[color] }}>
        {color.toUpperCase()} Line
      </div>
    </nav>
  );
};

export default NavBar;
