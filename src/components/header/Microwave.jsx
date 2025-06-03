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
        <h1>Same Day Microwave Repair Services in Los Angeles and Nearby Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we specialize in <strong>microwave repair services</strong>, addressing issues with <strong>microwave ovens</strong> to ensure your unit is back to <strong>working correctly</strong> in no time. Whether your <strong>microwave oven</strong> has a <strong>broken door switch</strong>, a <strong>defective magnetron</strong>, or a faulty <strong>high-voltage diode</strong>, our <strong>qualified technicians</strong> are here to help. With extensive experience and access to top-quality <strong>replacement parts</strong>, we handle repairs for all types of <strong>microwave ovens</strong>, including <strong>built-in microwaves</strong>, countertop models, and <strong>microwave ovens</strong> with advanced features.</p><p>Our team is skilled in repairing <strong>most appliances</strong>, including microwaves from major brands like <strong>Whirlpool</strong>, <strong>GE</strong>, <strong>Samsung</strong>, <strong>LG</strong>, <strong>KitchenAid</strong>, and <strong>Frigidaire</strong>. We understand the importance of a <strong>working microwave</strong> for meal preparation, and we're committed to fixing issues such as <strong>turntable malfunctions</strong>, <strong>control panel failures</strong>, and <strong>water or insect infestation</strong>. Contact us today to schedule <strong>same-day microwave repair</strong> and restore your appliance to optimal performance.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
