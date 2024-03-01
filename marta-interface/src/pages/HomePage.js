import React from 'react';
import './Homepage.css';
import martaImage from '../assets/marta-image.jpeg'; 
import { Link } from 'react-router-dom'; 

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="title">MARTA</div>
        <Link to="/about" style={{ display: 'inline-block', textAlign: 'center', fontSize: '16px', backgroundColor: 'rgb(176, 176, 176, .1)', padding: '10px', borderRadius: '5px', textDecoration: 'none', color: 'inherit' }} className="about-link">About MARTA</Link>

      </header>
      <main className="main-content">
        <section className="schedule">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ textAlign: 'center', fontSize: '16px', backgroundColor: 'rgb(176, 176, 176, .1)', padding: '10px', borderRadius: '5px' }}>
            VIEW ROUTES SCHEDULE
          </h1>
        </div>


        <ul className="routes">
        {['Gold', 'Red', 'Green', 'Blue'].map((color) => (
          <li key={color}>
            <Link to={`/lines/${color.toLowerCase()}`}>{`${color} Line`}</Link>
          </li>
        ))}
      </ul>
        </section>
        <div className="image-container">
        <img src={martaImage} alt="MARTA Train" />
          <img src="path-to-your-train-image.jpg" alt="MARTA Train" />
        </div>
      </main>
    </div>
  );
};

export default Homepage;
