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
        <h1>Same-Day Stove Repair Services in Los Angeles and Surrounding Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we understand how essential a well-functioning <strong>stove</strong> is to your household. Our <strong>stove repair services</strong> cover all types and models, ensuring your appliance returns to peak performance without delay. With extensive, <strong>factory-trained</strong> experience, our technicians provide <strong>stove repair</strong> throughout <strong>Los Angeles</strong> and surrounding areas, servicing major brands like <strong>Maytag</strong>, <strong>LG</strong>, <strong>Whirlpool</strong>, and more. We know that when your stove isn't working correctly, it can disrupt your daily routine, especially when it's time to cook meals for your family. That's why our technicians work efficiently and effectively, using only top-quality parts and labor to restore your <strong>stove</strong> to optimal condition.</p><p>Whether your <strong>stove</strong> needs a minor fix or an in-depth repair, we're ready to handle it. Our <strong>stove repair services</strong> cover everything from burner malfunctions and heating issues to electrical problems and igniter repairs. <strong>Contact us today</strong> to schedule your <strong>stove repair</strong> and get your kitchen back in working order the same day.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
