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
        <h1>Same-Day Household Refrigerator Repair in Los Angeles and Nearby Areas</h1>
        <p>At Same Day Appliance Repair, we're dedicated to delivering prompt and reliable <strong>refrigerator repair services</strong> throughout <strong>Los Angeles</strong> and the surrounding areas. We understand that a <strong>well-functioning refrigerator</strong> is essential for preserving food and ensuring convenience in your daily life. Our <strong>factory-trained technicians</strong> are skilled in diagnosing and repairing issues quickly to prevent food spoilage and keep your household running smoothly.</p>
          <p>Whether you're dealing with a <strong>side-by-side, French door, top-freezer, or bottom-freezer</strong> refrigerator, our team can handle repairs across all types and major brands, including <strong>Whirlpool, GE, Samsung, LG, KitchenAid, Maytag, and Frigidaire</strong>. We specialize in fixing common problems with compressors, evaporators, thermostats, and more. Contact us today to schedule fast, dependable service for your <strong>household refrigerator</strong> and get your appliance back in top shape!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
