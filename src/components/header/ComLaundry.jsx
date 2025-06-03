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
        <h1>Commercial Laundry Machine Repair Los Angeles And Nearby Areas</h1>
        <p>
              Looking for commercial loundry machine reopair Los Angeles? We are
              definitely the best team to fix it, and we will solve all your
              appliance related problems! Why do we claim to be the best? It is
              not just us. Our well pleased customers, who call us back and keep
              recommending us to their friends and family, are proof of our
              quality laundry speed queen repair services. If you search for
              speed queen repair Los Angeles, you will find many appliance
              repair companies that promise to deliver, and not many of them
              actually do.
            </p>
            <p>
              To protect our customers, we ensure that our repairmen undergo
              extensive training in speed queen repairs, installation, and
              maintenance. We also strive to protect our customers by being an
              insured and licensed appliance repair company with a warranty.
              Providing a warranty gives our clients peace of mind, and they can
              call us back with a luandry speed queen issue within three months
              after the repair. Repairing your speed queen is as important to us
              as it is to you. We strive to provide absolutely the best services
              in repairing your commercial laundry machine. This is why we
              promise a full refund if we cannot repair it.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
