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
        <h1>Commercial Bar Refrigerator Repair Los Angeles and Nearby Areas</h1>
        <p>Looking for bar refrigerator repair Los Angeles? We are definitely
              the best team to fix it, and we will solve all your appliance
              related problems! Why do we claim to be the best? It is not just
              us. Our well pleased customers, who call us back and keep
              recommending us to their friends and family, are proof of our
              quality bar refrigerator repair services. If you search for bar
              refrigerator repair Los Angeles, you will find many appliance
              repair companies that promise to deliver, and not many of them
              actually do.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
