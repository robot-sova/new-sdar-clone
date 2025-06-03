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
        <h1>Same-Day Oven Repair Services in Los Angeles and Surrounding Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we understand how essential a well-functioning <strong>oven</strong> is to your home. Whether you have a <strong>wall oven</strong>, <strong>gas oven</strong>, or <strong>electric oven</strong>, our expert technicians provide comprehensive <strong>oven repair</strong> services throughout <strong>Los Angeles</strong> and surrounding areas. With years of <strong>appliance repair</strong> experience, we service all major <strong>oven brands</strong>, including <strong>Wolf, Thermador, LG, Whirlpool</strong>, and more. We know that when your oven has a problem—whether it's a <strong>heating</strong> issue, a malfunctioning <strong>broil burner</strong>, or a stuck <strong>oven door</strong>—it disrupts your daily routine. That's why our technicians work efficiently and use only <strong>original replacement parts</strong> to ensure your oven is restored to <strong>safe temperature</strong> operation.</p>
          <p>From minor <strong>oven issues</strong> like faulty <strong>oven racks</strong> to more complex problems with <strong>oven's circuit breaker</strong> or <strong>lock motor</strong>, we're here to help. Our <strong>repair services</strong> cover all aspects of <strong>oven maintenance</strong> and repairs, from <strong>temperature control </strong>and <strong>preheating time</strong> to <strong>surface burners</strong> and <strong>self-clean cycle</strong> issues. <strong>Contact us today</strong> to schedule your <strong>oven repair </strong>and get your kitchen back to its optimal <strong>cooking performance</strong>.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
