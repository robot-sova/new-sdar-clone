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
        <h1>Same Day Induction Cooktop Repair Los Angeles and Nearby Areas</h1>
        <p>At Same Day Appliance Repair, we specialize in <strong>induction cooktop repair</strong> to keep your kitchen running smoothly. Whether it's a <strong>broken appliance</strong> or a <strong>blown fuse</strong>, we understand the importance of a functional <strong>induction cooktop</strong> for modern cooking convenience. Our factory-trained technicians are skilled at diagnosing and fixing issues quickly, ensuring your <strong>induction cooking</strong> experience remains seamless.</p><p>Whether you have a <strong>Bosch induction cooktop</strong>, a <strong>Viking cooktop</strong>, or another major brand, we handle repairs for all models. From faulty <strong>heating elements</strong> to <strong>circuit board failures</strong>, our team is here to provide expert service and restore your <strong>appliance</strong> to optimal performance. Contact us today to schedule your <strong>cooktop repair</strong> and get back to cooking without interruptions!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
