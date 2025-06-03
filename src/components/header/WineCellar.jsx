// ParallaxHeader.jsx
import React from 'react';

const ParallaxHeader = () => {
  return (
    <div className="video-container">
      <video
        id="bgVideo"
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/bg.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
        Your browser does not support the video tag.
      </video>

      <div className="maintext">
        <h1>Same Day Wine Cellar Repair Los Angeles and Nearby Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we work closely with homeowners and businesses every day to provide professional <strong>wine cellar repair services</strong> that ensure your <strong>wine collection</strong> is stored under ideal conditions. As <strong>wine cellar technicians</strong>, we understand how essential it is to maintain the right balance of temperature and humidity in your <strong>wine cellar cooling system</strong> to preserve the quality of your wines.</p><p>Whether it's a <strong>custom wine cellar</strong>, a small <strong>wine room</strong>, or a high-capacity <strong>wine cellar refrigeration unit</strong>, our job is to troubleshoot and fix <strong>potential issues</strong> quickly and efficiently. From addressing temperature inconsistencies to repairing <strong>evaporator coils</strong>, we work hard to keep your <strong>wine cellar cooling system</strong> running at peak performance.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
