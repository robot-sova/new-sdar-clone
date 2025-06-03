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
        <h1>Same-Day Dryer Repair Services in Los Angeles and Surrounding Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we know how essential a well-functioning <strong>dryer</strong> is to your household. Our <strong>dryer repair services</strong> cover all types and models, ensuring your appliance returns to peak performance without delay. With extensive, <strong>factory-trained</strong> experience, our technicians provide <strong>dryer repair</strong> throughout <strong>Los Angeles</strong> and surrounding areas, servicing major <strong>brands</strong> like <strong>Maytag</strong>, <strong>LG</strong>, <strong>Whirlpool</strong>, and more. We understand that when your <strong>dryer isn't working</strong> correctly, it can disrupt your daily <strong>laundry</strong> routine. That's why our technicians work quickly and efficiently, using only top-quality <strong>parts</strong> and <strong>labor</strong> to restore your <strong>dryer</strong> to its optimal condition.</p>
<p>Whether your <strong>dryer</strong> needs a minor <strong>fix</strong> or a more in-depth <strong>repair</strong>, we can handle it. Our dryer repair services cover everything from dryer vent clogs and heating issues to drum malfunctions and electrical troubles. <strong>Contact us today</strong> to <strong>schedule</strong> your <strong>dryer repair</strong> and get your <strong>laundry</strong> routine back on track the same <strong>day</strong>.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
