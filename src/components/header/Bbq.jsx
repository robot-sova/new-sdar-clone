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
        <h1>Barbecue Grill Repair Los Angeles and Nearby Areas</h1>
        <p>At Same Day Appliance Repair, we specialize in <strong>BBQ grill repair services</strong> to keep your outdoor cooking setup in perfect working condition. Whether you rely on a <strong>gas grill</strong>, <strong>charcoal grill</strong>, or a <strong>built-in barbecue grill</strong>, our <strong>factory-trained technicians</strong> deliver fast and reliable repairs to ensure your next cookout goes off without a hitch.</p><p>We repair all <strong>major brands</strong> of <strong>barbecue grills</strong>, including Weber, Napoleon, Traeger, Char-Broil, Dyna-Glo, and more. From <strong>cleaning grease buildup</strong> to replacing <strong>grill parts</strong>, we're equipped to handle every type of <strong>BBQ grill repair</strong>. Schedule our same-day service today and get your <strong>backyard barbecue</strong> back in action!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
