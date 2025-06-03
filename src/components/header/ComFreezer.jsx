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
        <h1>Professional Commercial Freezer Repair in Los Angeles and Nearby Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we understand how crucial it is to maintain your <strong>commercial freezer</strong> to keep your <strong>business</strong> running smoothly. Our highly skilled, <strong>factory-trained technicians</strong> specialize in <strong>commercial freezer repair </strong>across Los Angeles and nearby areas. Whether you own a restaurant, grocery store, or any <strong>business</strong> that depends on reliable <strong>freezers</strong>, we offer <strong>expert commercial freezer repair services</strong> tailored to your needs.</p><p>From <strong>walk-in freezers</strong> to reach-in <strong>freezers</strong>, we've seen it all. Our team understands the urgency when your <strong>freezer</strong> is malfunctioning, and we know that any downtime can lead to spoiled <strong>food</strong>, lost revenue, and unhappy <strong>customers</strong>. We provide <strong>same-day repair services</strong> to minimize disruption and quickly restore your <strong>freezer</strong> to optimal performance.</p><p><strong>Contact us today</strong> to <strong>schedule a service</strong> and keep your <strong>freezer</strong> running efficiently!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
