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
        <h1>Same Day Wine Cooler Repair Services in Los Angeles and Nearby Areas</h1>
        <p>At Same Day Appliance Repair, we specialize in prompt and reliable <strong>wine cooler repair services</strong> throughout Los Angeles and the surrounding areas. A well-functioning <strong>wine cooler</strong> or <strong>wine fridge</strong> is essential for <strong>wine connoisseurs </strong>who want to preserve their collection at the <strong>perfect temperature</strong>. Our factory-trained <strong>service technicians</strong> are skilled in diagnosing and repairing issues quickly, ensuring your unit maintains optimal <strong>cooling</strong> and protecting your valuable wines.</p><p>Whether you own a <strong>thermoelectric wine cooler</strong>, a compressor-based <strong>wine refrigerator</strong>, or any other type of <strong>wine cooler</strong>, our team can handle repairs across all models and major brands. We address common problems like <strong>compressor system</strong> failures, <strong>broken evaporators</strong>, faulty <strong>thermostats</strong>, and malfunctioning <strong>control boards</strong>. Contact us today to schedule fast, dependable service for your <strong>wine cooler</strong> and keep your wines stored in ideal conditions.</p>
          <p>From minor <strong>oven issues</strong> like faulty <strong>oven racks</strong> to more complex problems with <strong>oven's circuit breaker</strong> or <strong>lock motor</strong>, we're here to help. Our <strong>repair services</strong> cover all aspects of <strong>oven maintenance</strong> and repairs, from <strong>temperature control </strong>and <strong>preheating time</strong> to <strong>surface burners</strong> and <strong>self-clean cycle</strong> issues. <strong>Contact us today</strong> to schedule your <strong>oven repair </strong>and get your kitchen back to its optimal <strong>cooking performance</strong>.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
