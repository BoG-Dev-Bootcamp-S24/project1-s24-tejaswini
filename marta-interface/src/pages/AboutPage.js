import React from 'react';
import './AboutPage.css'; 
import martaMap from '../assets/marta-map.jpeg';
import martaLogo from '../assets/marta-logo.png';

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <header className="header">
        <div className="title" style={{ fontSize: '30px' }}>About MARTA</div>
      </header>
      <div className="logo-container">
        <img src={martaLogo} width="20%" height="20%" alt="MARTA Logo" className="marta-logo" />
      </div>
      <main className="main-content">
        <div className="left-content">
          <p>
            We are the nation’s ninth largest transit system and the largest of its kind in 
            the Southeast that provides bus, rail, and paratransit service. With 40 years of 
            operations under its belt, MARTA services three of the five core counties in the 
            region and generates $2.6 billion in economic impact to the state of Georgia. Employees 
            of the region’s fastest growing sectors overwhelmingly choose MARTA to get to and from work. 
            People from every demographic across the region trust MARTA with their routine transportation needs.
          </p>
          {/* YouTube video */}
          <iframe
            width="100%"
            height="67%"
            src="https://www.youtube.com/embed/sr8562wUUZk?si=qxSzy5rxekr-gy0Z"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ marginTop: '20px', marginLeft: '10px' }}
          ></iframe>
        </div>
        <div className="right-content">
          <img src={martaMap} width="80%" height="80%" alt="MARTA Map" style={{ marginTop: '10px' }} className="marta-map" />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
