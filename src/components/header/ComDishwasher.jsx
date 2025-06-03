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
        <h1>Expert Commercial Dishwasher Repair in Los Angeles and Nearby Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we specialize in <strong>commercial dishwasher repair</strong> for <strong>businesses</strong> across <strong>Los Angeles</strong> and the surrounding areas. A broken appliance in a commercial kitchen can halt operations and disrupt customer service. That's why we offer fast, reliable <strong>repair services</strong> to get your <strong>commercial dishwasher</strong> and other <strong>commercial appliances</strong> back up and running quickly.</p><p>Our <strong>factory-trained technicians</strong> have the <strong>tools</strong> and <strong>expertise</strong> to handle all <strong>repairs</strong> and <strong>maintenance</strong> needs for <strong>most commercial appliances</strong>, ensuring that your <strong>equipment</strong> is repaired correctly the first time. Whether it's a minor <strong>repair </strong>or an <strong>emergency repair</strong>, we're committed to providing <strong>quality service</strong> that extends the <strong>life</strong> of your <strong>machine</strong>.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
