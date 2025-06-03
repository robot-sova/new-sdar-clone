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
        <h1>Same-Day Household Refrigerator and Freezer Repair in Los Angeles and Nearby Areas</h1>
        <p>
        At Same Day Appliance Repair, we understand how essential a fully functional refrigerator and <strong>freezer</strong> are in every household. Our team of experienced, <strong>factory-trained technicians</strong> offers <strong>professional service</strong> in <strong>refrigerator repair </strong>and <strong>freezer repair</strong> throughout <strong>Los Angeles</strong> and surrounding areas. We're equipped to restore your appliances to peak performance from Whirlpool and GE to LG, Samsung, Frigidaire, KitchenAid, Maytag, and many other major brands. We know that a <strong>broken freezer</strong> or malfunctioning fridge can disrupt your daily routine, so our technicians work efficiently to <strong>diagnose</strong> and resolve issues, ensuring minimal downtime with reliable <strong>repair service</strong>.</p><p>Whether you need <strong>small appliances</strong> fixed or major <strong>freezer repairs</strong>, we handle everything from <strong>control board </strong>malfunctions to <strong>replacement parts</strong> for <strong>temperature</strong> regulation. Common issues we address include <strong>unusual noises</strong>, <strong>compressor</strong> problems, thermostat issues, and door seal repairs. We proudly serve homeowners in <strong>Los Angeles</strong> and nearby areas with same-day <strong>repair service</strong> to keep your kitchen operating smoothly. <strong>Schedule a service appointment</strong> with us today, and let us quickly get your freezer and fridge back in working condition.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
