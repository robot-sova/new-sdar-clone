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
        <h1>Professional Commercial Washer Repair Los Angeles and Nearby Areas</h1>
        <p>
        At <strong>Same Day Appliance Repair</strong>, our highly skilled, <strong>factory-trained technicians</strong> specialize in <strong>commercial washer repair </strong>in<strong> Los Angeles and nearby areas</strong>. We understand the importance of keeping your <strong>commercial laundry</strong> operations running smoothly. We offer expert <strong>commercial laundry repair</strong> services tailored to various types of <strong>commercial laundry equipment</strong>. From <strong>top-load washers</strong> to <strong>coin-operated machines</strong>, we diagnose and repair various <strong>commercial washing machines</strong>, ensuring that your equipment operates efficiently.</p><p>Same Day Appliance Repair provides top-tier <strong>commercial laundry equipment repair</strong> services across <strong>Los Angeles</strong>. Whether you need <strong>commercial washing machine repair</strong>, <strong>industrial washer repair</strong>, or service for <strong>coin-operated washers</strong>, our team of <strong>factory-trained technicians</strong> is here to ensure your laundry equipment is running smoothly. <strong>Contact us today</strong> for fast, reliable repairs!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
