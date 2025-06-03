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
        <h1>Same-Day Range Repair Services in Los Angeles and Nearby Areas</h1>
        <p>At Same Day Appliance Repair, we understand that a fully functioning range is essential to every home. Our <strong>range of repair services covers</strong> all <strong>models</strong> and <strong>brands</strong>, ensuring your <strong>appliance</strong> is restored to optimal condition. From <strong>gas stove repair</strong> to <strong>electric range maintenance</strong>, our <strong>service technicians</strong> are factory-trained and equipped to handle various issues efficiently. Servicing Los Angeles and nearby areas, we work with major brands to ensure that your <strong>gas range</strong>, <strong>electric stove</strong>, or other <strong>appliances</strong> operate at peak performance. A malfunctioning range or <strong>oven door</strong> can disrupt your kitchen routine, so we offer same-day <strong>repair service</strong> to get you back on track.</p><p>Whether you need a minor <strong>repair</strong> or a complete <strong>replacement</strong> of critical components, our team has the experience to fix issues on the first visit whenever possible. Our professional service covers everything from faulty gas burners to heating elements and wiring problems. Call us today to <strong>schedule</strong> your <strong>service appointment</strong> and restore your range to reliable performance.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
