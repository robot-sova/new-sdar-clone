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
        <h1>Professional Gas Fireplace Repair Services in Los Angeles and Nearby Areas</h1>
        <p>At Same Day Appliance Repair, we specialize in <strong>fireplace repair</strong>, ensuring your <strong>gas fireplaces</strong>, <strong>wood-burning fireplaces</strong>, and <strong>electric fireplaces</strong> function safely and efficiently. Whether your fireplace needs a new damper, repair for its firebox, or remote control troubleshooting, our <strong>professional technicians</strong> are ready to assist. From <strong>annual inspections</strong> to complex <strong>repairs</strong>, we deliver reliable service that helps you <strong>save money</strong> and maintain the warmth and ambiance of your home.</p><p>Our experienced <strong>fireplace repairmen</strong> handle <strong>most repairs</strong>, ensuring your <strong>fireplace</strong> is restored to its original functionality. Contact us today to schedule your <strong>fireplace inspection</strong> or repair service and experience the best in quality and care.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
