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
        <h1>Professional Commercial Oven Repair in Los Angeles and Nearby Areas</h1>
        <p>
            At <strong>Same Day Appliance Repair</strong>, we understand how essential it is to maintain your
            <strong>commercial oven</strong> to keep your <strong>business</strong> running smoothly. Our highly skilled,
            <strong>factory-trained technicians</strong> specialize in <strong>commercial oven repair</strong> across Los Angeles
            and nearby areas. Whether you own a restaurant, bakery, or any <strong>commercial kitchen</strong> that depends on
            <strong>commercial ovens</strong>, we offer expert <strong>commercial oven repair services</strong> tailored to your
            needs. We service a wide variety of <strong>ovens</strong>, including <strong>convection ovens</strong> and
            <strong>gas ovens</strong>, ensuring your <strong>equipment</strong> stays in optimal condition. With our
            <strong>experienced team</strong> of <strong>expert technicians</strong>, we guarantee quick and
            <strong>effective service</strong> to get your <strong>oven</strong> back up and running, ensuring that no more time
            is wasted on <strong>unevenly cooked food</strong> or <strong>pilot light</strong> failures.
          </p>
          <p><strong>Contact us today</strong> to schedule a <strong>service call</strong> and keep your <strong>commercial oven</strong> running efficiently!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
