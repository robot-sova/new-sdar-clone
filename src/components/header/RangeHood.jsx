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
        <h1>Same-Day Range Hood Repair Services in Los Angeles and Nearby Areas</h1>
        <p>At <strong>Same Day Appliance Repair</strong>, we specialize in <strong>range hood repair services</strong>, ensuring your kitchen stays fresh and free of <strong>smoke</strong>, <strong>steam</strong>, and <strong>airborne grease</strong>. Whether your <strong>range hood</strong> has a faulty <strong>fan motor</strong>, a defective <strong>control board</strong>, or clogged ductwork, our experienced <strong>service technicians</strong> are here to provide reliable solutions.</p><p>We repair all types of <strong>range hoods</strong>, including <strong>vent hoods</strong>, <strong>kitchen exhaust fans</strong>, and <strong>blower wheel housings</strong>, from major brands such as Whirlpool, GE, Samsung, LG, KitchenAid, and Bosch. Using top-quality replacement parts, we resolve issues like noisy <strong>fan blades</strong>, malfunctioning <strong>lights</strong>, and clogged filters. Don't let a broken <strong>range hood</strong> disrupt your cooking routine—schedule a same-day <strong>range hood repair</strong> with our team today!</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
