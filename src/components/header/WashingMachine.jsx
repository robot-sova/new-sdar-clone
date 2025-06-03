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
        <h1>Same-Day Washing Machine Repair Services in Los Angeles and Surrounding Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we understand how essential a <strong>working washing machine</strong> is to every household. Our <strong>washing machine repair</strong> services cover all major <strong>washing machine brands</strong> and models, ensuring your <strong>washer</strong>gets back to peak performance quickly and efficiently. Our skilled technicians provide <strong>washer repair</strong> services across <strong>Los Angeles</strong> and nearby areas, covering top brands like <strong>Whirlpool, LG, Samsung, GE, and Maytag</strong>. When your <strong>washing machine</strong> isn't <strong>working correctly</strong>, it can disrupt your laundry routine, and our technicians are ready to <strong>fix</strong> issues promptly, helping you get back to your day-to-day.</p><p>Whether your <strong>washing machine</strong> requires a simple fix or a more comprehensive <strong>repair</strong>, we handle all types of <strong>repairs</strong>, from <strong>clogged hoses and leaks</strong> to <strong>spin issues and motor malfunctions</strong>. Contact us today to schedule a <strong>washer repair</strong> and bring efficiency back to your <strong>laundry</strong> routine.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
