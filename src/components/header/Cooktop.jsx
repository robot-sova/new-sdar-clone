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
        <h1>Same-Day Cooktop Repair Services in Los Angeles and Nearby Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we take pride in offering prompt, professional, and reliable <strong>cooktop repair services </strong>throughout <strong>Los Angeles</strong> and its surrounding areas. A well-functioning <strong>cooktop</strong> is essential for daily cooking and maintaining a smooth household routine. Our <strong>factory-trained service technicians</strong> specialize in diagnosing and repairing all types of cooktops, ensuring your kitchen remains operational and your appliances are safe to use.</p><p>Whether you have a <strong>gas cooktop</strong>, <strong>electric cooktop</strong>, or <strong>induction cooktop</strong>, our team is well-versed in repairing a wide range of <strong>cooktop brands</strong>, including <strong>Whirlpool</strong>, <strong>GE</strong>, <strong>Samsung</strong>, <strong>LG</strong>, <strong>KitchenAid</strong>, <strong>Maytag</strong>, and more. From <strong>electric coil burners</strong> to <strong>burner caps</strong>, we specialize in addressing common issues such as <strong>igniter malfunctions</strong>, <strong>heating inconsistencies</strong>, and <strong>control switch failures</strong>. Contact us today to schedule dependable same-day service and restore your <strong>cooktop's</strong> performance!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
