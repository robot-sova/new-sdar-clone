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
        <h1>Walk in Freezer Repair Los Angeles and Nearby Areas</h1>
        <p>
              Welcome to Same Day Appliance Repair Company, your walk in freezer
              repair Los Angeles solution! We are definitely the best team to
              fix it, and we will solve all your appliance related problems! Why
              do we claim to be the best? It is not just us. Our well pleased
              customers, who call us back and keep recommending us to their
              friends and family, are proof of our quality commercial walk-in
              freezer repair services. If you search for commercial walk-in
              freezer repair Los Angeles, you will find many appliance repair
              companies that promise to deliver, and not many of them actually
              do.
            </p>
            <p>
              To protect our customers, we ensure that our repairmen undergo
              extensive training in commercial walk-in freezer repairs,
              installation, and maintenance. We also strive to protect our
              customers by being an insured and licensed appliance repair
              company with a warranty. Providing a warranty gives our clients
              peace of mind, and they can call us back with a commercial walk-in
              freezer issue within three months after the repair. Repairing your
              commercial walk-in freezer is as important to us as it is to you.
              We strive to provide absolutely the best services in repairing
              your walk in freezer. This is why we promise a full refund if we cannot
              repair it.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
