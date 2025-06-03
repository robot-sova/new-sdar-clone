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
        <h1>Commercial Dryer Repair in Los Angeles and Nearby Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we understand how essential it is to keep your <strong>commercial laundry equipment </strong>running smoothly, especially when your business relies on it for daily operations. Our highly skilled, <strong>factory-trained </strong>technicians specialize in <strong>commercial dryer repair</strong> across <strong>Los Angeles</strong> and nearby areas. Whether you own a laundromat, hotel, or any other <strong>commercial</strong> business that depends on efficient <strong>commercial dryers</strong>, we provide expert <strong>repair services</strong> tailored to your needs.</p><p>We've seen it all, from large industrial dryers to compact commercial dryers. We understand the urgency when your <strong>dryers</strong> stop working and how downtime can lead to lost revenue and dissatisfied customers. That's why we provide <strong>same-day service</strong> to minimize disruption and get your <strong>commercial dryer</strong> <strong>back up and running</strong> as quickly as possible.</p><p><strong>Contact us today to schedule your repair service</strong> and ensure your <strong>commercial dryer</strong> operates efficiently!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
