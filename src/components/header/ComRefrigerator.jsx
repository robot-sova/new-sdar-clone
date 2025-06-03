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
        <h1>Same-Day Commercial Refrigerator Repair in Los Angeles and Nearby Areas</h1>
        <p>
        At Same Day Appliance Repair, we provide <strong>expert commercial refrigerator repair</strong> in <strong>Los Angeles and surrounding areas</strong> to ensure smooth operation in <strong>commercial kitchens</strong> and food-related businesses. Our <strong>factory-trained technicians </strong>deliver <strong>reliable, same-day repair services</strong> to keep your <strong>commercial refrigeration equipment</strong> running efficiently and prevent costly disruptions.</p><p>Whether you need service for <strong>walk-in coolers</strong>, <strong>reach-in refrigerators</strong>, <strong>display fridges</strong>, or <strong>freezers</strong>, our team is skilled in <strong>diagnosing and repairing</strong> issues quickly to minimize downtime. We specialize in servicing major brands, including <strong>True</strong>, <strong>Turbo Air</strong>, <strong>Beverage-Air</strong>, <strong>Continental Refrigerator</strong>, <strong>Traulsen</strong>, <strong>Arctic Air</strong>, <strong>Hoshizaki</strong>, <strong>Delfield</strong>, <strong>Victory Refrigeration</strong>, <strong>McCall</strong>, <strong>Randell</strong>, <strong>Fogel</strong>, <strong>Master-Bilt</strong>, <strong>Blue Air</strong>, <strong>Nor-Lake</strong>, and <strong>Kelvinator</strong>.</p><p>Our repair expertise spans all types of <strong>commercial refrigeration units</strong>, from <strong>bar refrigerators</strong> and <strong>prep tables</strong> to <strong>glass door</strong> and <strong>under-counter refrigerators</strong>. We handle everything from <strong>compressor</strong> and <strong>condenser coils</strong> to <strong>evaporator fans </strong>and <strong>thermostats</strong>—delivering reliable results to keep your <strong>business running</strong>. Contact us today to schedule fast, dependable service across all major brands!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
