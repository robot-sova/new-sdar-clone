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
        <h1>Same-Day Dishwasher Repair Services in Los Angeles and Nearby Areas</h1>
        <p>At Same Day Appliance Repair, we understand how essential a well-functioning dishwasher is for maintaining an efficient household. Our <strong>dishwasher repair service</strong> covers all models and types, ensuring that your appliance is back to peak performance without delay. Our factory-trained <strong>appliance technicians</strong> bring years of experience in <strong>dishwasher repair</strong> across Los Angeles and surrounding areas, servicing top brands like Bosch, Whirlpool, LG, KitchenAid, and more. We know that a broken dishwasher disrupts your routine, and we work quickly to restore it using only high-quality parts and expert labor.</p><p>Whether your dishwasher needs a minor fix or a more in-depth repair, we handle <strong>door latch problems</strong>, <strong>clogged spray arms</strong>, and <strong>inlet valve malfunctions</strong>. <strong>Contact us today</strong> to schedule your <strong>dishwasher repair service</strong> and get your kitchen back on track.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
