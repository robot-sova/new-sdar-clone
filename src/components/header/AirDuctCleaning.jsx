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
        <h1>Same-Day Air Duct Cleaning</h1>
        <p>Breathe easier with fast, reliable air duct cleaning you can count on—delivered the same day you call. Our experienced technicians remove built-up dust, allergens, and debris from your home’s ductwork to restore clean airflow and improve your indoor air quality. Whether you're dealing with poor ventilation, allergy symptoms, or just want a cleaner, healthier home, we're ready to help—today.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
