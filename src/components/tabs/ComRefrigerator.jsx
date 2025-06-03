import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Us",
  heading:  "Why Choose Same Day Appliance Repair for Commercial Refrigerator Repair?",
      img: "/images/Commercial-Refrigerator-Repair-Specialist.webp",
      description: (
        <> <p>When you choose Same Day Appliance Repair, you're choosing a team of certified experts with the tools, quality parts, and experience to handle any commercial refrigerator repair. Here's why we're the top choice for your business:</p><p><strong>Same-Day Service:</strong> We understand how essential a fully functional refrigerator is to your business. That's why we offer same-day repairs to minimize downtime and keep your operations running smoothly.</p><p><strong>Certified Technicians:</strong> Our technicians are highly trained and certified, with extensive experience in repairing commercial refrigerators from all major brands and models.</p><p><strong>High-Quality Parts:</strong> We use only top-grade, original parts from trusted suppliers, ensuring your refrigerator runs efficiently and has lasting performance.</p><p><strong>Transparent Pricing:</strong> We provide clear, upfront quotes for labor and parts with no hidden fees, so you'll know the exact cost before any work begins.</p><p>With Same Day Appliance Repair, you can trust us to get your commercial refrigerator back to peak performance quickly and reliably.</p></>
      ),
    },
    {
      id: "content2",
      title: "Refrigeration Equipment Types",
  heading:  "Common Commercial Refrigeration Equipment Types and Our Approach to Repair",
      img: "/images/commercial-refrigerator-repair-services-in-los-angeles.webp",
      description: (
        <> <p>At <strong>Same Day Appliance Repair</strong>, we understand the challenges of maintaining <strong>commercial refrigeration equipment</strong>. Our technicians are well-versed in diagnosing and resolving common issues with <strong>commercial refrigerators</strong>, ensuring fast, reliable <strong>repairs</strong>.</p><h3>1. <strong>Refrigerator Not Cooling Properly</strong></h3><p><strong>How We Fix It:</strong><br />When a <strong>commercial refrigerator</strong> isn't cooling efficiently, we check for problems with the <strong>evaporator coils</strong>, <strong>compressor</strong>, or <strong>thermostat</strong>. We clean the evaporator coils to restore proper airflow if they are frozen or dirty. We also inspect and replace the <strong>compressor</strong> or <strong>thermostat</strong> to ensure your <strong>refrigerator</strong> maintains the correct temperature.</p><h3>2. <strong>Excessive Frost or Ice Build-Up</strong></h3><p><strong>How We Fix It:</strong><br />Faulty defrost systems, or damaged door gaskets can cause excessive frost inside your refrigeration equipment. Our technicians inspect the <strong>defrost heater</strong> and <strong>thermostat</strong> to ensure proper defrost cycles. We also replace damaged <strong>door gaskets</strong> to prevent warm air from entering, which causes frost build-up.</p><h3>3. <strong>Refrigerator Leaking Water</strong></h3><p><strong>How We Fix It:</strong><br /><strong>Leaks</strong> in a <strong>commercial refrigerator</strong> are often due to clogged <strong>drain lines</strong> or a faulty <strong>water inlet valve</strong>. We clear <strong>drain lines</strong> to ensure proper water flow and check the <strong>water inlet valve</strong> for damage. If the valve is defective, we replace it to prevent further <strong>leaks</strong>.</p><h3>4. <strong>Refrigerator Making Loud Noises</strong></h3><p><strong>How We Fix It:</strong><br />Unusual noises can indicate problems with the <strong>fan motor</strong>, <strong>compressor</strong>, or <strong>evaporator fan</strong>. Our team identifies the noise source and replaces any failing components, ensuring your <strong>refrigerator</strong> operates quietly and efficiently.</p><h3>5. <strong>Refrigerator Door Not Sealing Properly</strong></h3><p><strong>How We Fix It:</strong><br />A faulty <strong>door gasket</strong> can cause temperature inconsistencies and increased energy costs. We inspect and replace damaged <strong>door gaskets</strong> to ensure a proper seal, which keeps cold air in and prevents costly <strong>repairs</strong> down the line.</p><h3>6. <strong>Refrigerator Has Power Issues</strong></h3><p><strong>How We Fix It:</strong><br />If your <strong>commercial refrigerator</strong> won't turn on or keeps shutting off, we start by checking the <strong>power supply</strong>, <strong>thermostat</strong>, and <strong>control board</strong>. We troubleshoot electrical issues and replace defective components to ensure consistent power and operation.</p><h3>7. <strong>Temperature Fluctuations</strong></h3><p><strong>How We Fix It:</strong><br />Inconsistent temperatures in <strong>commercial refrigerators</strong> can lead to food spoilage. We check the <strong>compressor</strong>, <strong>thermostat</strong>, and <strong>fan motor</strong> to ensure proper temperature regulation. We provide immediate repairs to restore consistent cooling if any component is faulty.</p></>
      ),
    },
    {
      id: "content3",
      title: "Common Problems with Commercial Refrigerators",
  heading:  "Common Problems with Commercial Refrigerators and How We Fix Them",
      img: "",
      description: (
        <>
          <p>At <strong>Same Day Appliance Repair</strong>, we understand the challenges of maintaining <strong>commercial refrigeration equipment</strong>. Our technicians are well-versed in diagnosing and resolving common issues with <strong>commercial refrigerators</strong>, ensuring fast, reliable <strong>repairs</strong>.</p><h3>1. <strong>Refrigerator Not Cooling Properly</strong></h3><p><strong>How We Fix It:</strong><br/>When a <strong>commercial refrigerator</strong> isn't cooling efficiently, we check for problems with the <strong>evaporator coils</strong>, <strong>compressor</strong>, or <strong>thermostat</strong>. We clean the evaporator coils to restore proper airflow if they are frozen or dirty. We also inspect and replace the <strong>compressor</strong> or <strong>thermostat</strong> to ensure your <strong>refrigerator</strong> maintains the correct temperature.</p><h3>2. <strong>Excessive Frost or Ice Build-Up</strong></h3><p><strong>How We Fix It:</strong><br/>Faulty defrost systems, or damaged door gaskets can cause excessive frost inside your refrigeration equipment. Our technicians inspect the <strong>defrost heater</strong> and <strong>thermostat</strong> to ensure proper defrost cycles. We also replace damaged <strong>door gaskets</strong> to prevent warm air from entering, which causes frost build-up.</p><h3>3. <strong>Refrigerator Leaking Water</strong></h3><p><strong>How We Fix It:</strong><br/><strong>Leaks</strong> in a <strong>commercial refrigerator</strong> are often due to clogged <strong>drain lines</strong> or a faulty <strong>water inlet valve</strong>. We clear <strong>drain lines</strong> to ensure proper water flow and check the <strong>water inlet valve</strong> for damage. If the valve is defective, we replace it to prevent further <strong>leaks</strong>.</p><h3>4. <strong>Refrigerator Making Loud Noises</strong></h3><p><strong>How We Fix It:</strong><br/>Unusual noises can indicate problems with the <strong>fan motor</strong>, <strong>compressor</strong>, or <strong>evaporator fan</strong>. Our team identifies the noise source and replaces any failing components, ensuring your <strong>refrigerator</strong> operates quietly and efficiently.</p><h3>5. <strong>Refrigerator Door Not Sealing Properly</strong></h3><p><strong>How We Fix It:</strong><br/>A faulty <strong>door gasket</strong> can cause temperature inconsistencies and increased energy costs. We inspect and replace damaged <strong>door gaskets</strong> to ensure a proper seal, which keeps cold air in and prevents costly <strong>repairs</strong> down the line.</p><h3>6. <strong>Refrigerator Has Power Issues</strong></h3><p><strong>How We Fix It:</strong><br/>If your <strong>commercial refrigerator</strong> won't turn on or keeps shutting off, we start by checking the <strong>power supply</strong>, <strong>thermostat</strong>, and <strong>control board</strong>. We troubleshoot electrical issues and replace defective components to ensure consistent power and operation.</p><h3>7. <strong>Temperature Fluctuations</strong></h3><p><strong>How We Fix It:</strong><br/>Inconsistent temperatures in <strong>commercial refrigerators</strong> can lead to food spoilage. We check the <strong>compressor</strong>, <strong>thermostat</strong>, and <strong>fan motor</strong> to ensure proper temperature regulation. We provide immediate repairs to restore consistent cooling if any component is faulty.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Commercial Fridge Needs Repair",
  heading:  "Signs Your Commercial Fridge Needs Repair – When and Why to Call Us",
      img: "",
      description: (
        <> <p><strong>Knowing early signs of commercial fridge issues</strong> can save you from <strong>costly repairs</strong> and keep your business running. Here's a guide from our <strong>techs</strong> on when and why to <strong>call us now</strong>:</p><p><strong>Unusual Smells</strong>: Weird or bad smells in your fridge are a big deal. Often, these smells are from <strong>mold buildup</strong> or <strong>clogged drain hoses</strong>. If you smell something strange, <strong>call us now</strong>. <strong>Mold and bacteria growth</strong> can be a <strong>health hazard</strong> and <strong>food safety risk</strong>. We'll <strong>inspect</strong>, <strong>clean</strong>, and <strong>sanitize</strong> your unit to make sure your <strong>storage</strong> is safe.</p><p><strong>Water Leaks or Water Pooling</strong>: <strong>Call us</strong> if you see water around your <strong>commercial fridge</strong>. <strong>Leaks</strong> are usually from <strong>worn-out door gaskets</strong>, <strong>clogged drain lines</strong>, or <strong>loose hose connections</strong>. Ignoring leaks can cause <strong>water damage</strong>, <strong>slip hazards</strong>, and <strong>equipment corrosion</strong>. We'll <strong>diagnose</strong> and <strong>repair the leak</strong> quickly to prevent further damage to your <strong>kitchen or storage area</strong>.</p><p><strong>Temperature Fluctuations or Inconsistent Cooling</strong>: A <strong>commercial fridge</strong> that can't hold temperature is a big deal. <strong>Call us now</strong> if your unit feels warm or the temperature is <strong>fluctuating</strong>. This is usually from a <strong>faulty thermostat</strong>, <strong>compressor</strong>, or <strong>condenser</strong>. <strong>Consistent cooling</strong> is key to <strong>food safety</strong>, so our <strong>techs</strong> will get your unit up and running fast.</p><p><strong>Excessive Frost or Ice Buildup</strong>: When you see <strong>frost or ice</strong> building up inside or around the <strong>freezer compartments</strong>, it's a sign of <strong>poor air circulation</strong> or a failing <strong>defrost system</strong>. Excess frost will reduce <strong>storage space</strong>, cause <strong>freezer burn</strong>, and increase <strong>energy consumption</strong>. <strong>Call us</strong> to <strong>inspect</strong> and <strong>fix</strong> these issues before they worsen and keep your fridge efficient and your <strong>products safe</strong>.</p><p><strong>Strange Noises</strong>: Weird sounds like <strong>buzzing</strong>, <strong>rattling</strong>, or <strong>clicking</strong> usually mean <strong>failing components</strong> like <strong>fans</strong>, <strong>compressors</strong>, or <strong>motors</strong>. If you hear these sounds, <strong>call us sooner rather than later</strong>. These sounds mean the fridge is <strong>overworking</strong>, will increase your <strong>utility bill</strong>, and will lead to bigger problems. Our <strong>techs</strong> will find the source and <strong>repair</strong> or <strong>replace</strong> the failing parts to get your fridge running smoothly and efficiently again.</p><p><strong>Call us now</strong>, and we'll <strong>prevent further damage</strong>, ensure <strong>food safety</strong>, and extend the <strong>life</strong> of your <strong>commercial fridge</strong>. <strong>Contact us</strong>.</p>  </>
      ),
    },
    {
      id: "content5",
      title: "Commercial Refrigerator Maintenance",
  heading:  "Professional Commercial Refrigerator Maintenance Services – What You'll Receive and Why It's Essential",
      img: "",
      description: (
        <><p>When you choose us for <strong>commercial refrigerator maintenance</strong>, you're ensuring efficient, reliable operation and a longer lifespan for your equipment. Our experienced technicians provide essential maintenance services to prevent issues and keep your refrigeration running smoothly. Here's what you'll receive and why it's important:</p><p><strong>Thorough Coil and Condenser Cleaning</strong>: Dust and debris build up over time, causing your refrigerator to work harder and increasing energy costs. Our technicians will meticulously clean the condenser coils to improve cooling efficiency, reduce energy consumption, and prevent compressor strain. This service is essential for keeping your refrigerator in optimal condition and reducing utility costs.</p><p><strong>Detailed Gasket and Door Seal Inspection and Cleaning</strong>: Damaged or dirty door seals commonly cause temperature fluctuations and higher energy usage. We clean and inspect all door gaskets, ensuring a tight seal that prevents cold air from escaping. Properly maintained seals help your refrigerator maintain steady temperatures, saving you money on energy and protecting your stored products.</p><p><strong>Drain Line and Evaporator Clearing</strong>: Clogged drain lines can lead to water leaks, mold, and unpleasant odors. Our team will clear any blockages in the drain lines and inspect the evaporator, ensuring efficient airflow and eliminating issues that could lead to costly repairs down the line. This service is essential for preventing leaks and maintaining a clean storage environment.</p><p><strong>Precision Thermostat and Temperature Control Checks</strong>: We ensure your thermostat and control systems are calibrated and working accurately. This critical check ensures your unit keeps food and supplies at safe, consistent temperatures. Precise temperature control is key to food safety and helps prevent issues with spoilage.</p><p><strong>Fan and Motor Performance Evaluation</strong>: Fans and motors circulate cold air throughout the unit, helping maintain even cooling. We inspect these components for wear and provide necessary repairs to ensure they run efficiently. Reliable fan and motor operation are vital for preventing overheating and ensuring consistent performance.</p><p>With our <strong>professional maintenance services</strong>, you receive the highest standard of care to ensure your commercial refrigerator operates efficiently and reliably. Our technicians recommend these steps as a proactive approach to prevent unexpected breakdowns, reduce <strong>repair costs</strong>, and protect your investment. <strong>Schedule your maintenance today,</strong> and let us help you maintain peak performance and peace of mind.</p> </>
      ),
    },
    {
      id: "content6",
      title: "Repair or Replacement",
  heading:  "When to Choose Repair or Replacement for Your Commercial Refrigerator – Advice from Our Technicians",
      img: "",
      description: (
        <><p>From working closely with our clients, we know deciding between <strong>repairing or replacing a commercial refrigerator</strong> is a big decision for any business. Here's our rule of thumb: if <strong>repair costs exceed 50% of the price of a new unit</strong>, or if your fridge or freezer is over <strong>ten years old</strong>, a replacement might be the better investment.</p><p>Upgrading to a newer model often means fewer breakdowns, reduced repair needs, and improved <strong>energy efficiency</strong>—benefits that add up to significant savings in the long run. When we assess your unit, we'll take a close look at both the <strong>total repair costs</strong> and the overall condition of your appliance. Our technicians will provide an honest recommendation to help you make the best choice for your business.</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Contact Us",
  heading:  "Contact Expert Commercial Refrigeration Repair Services",
      img: "",
      description: (
        <><p>At <strong>Same Day Appliance Repair</strong>, we provide expert <strong>commercial refrigeration repair</strong> and <strong>maintenance services</strong> to ensure your equipment operates reliably. Our <strong>factory-trained technicians</strong> offer fast and professional <strong>repair services </strong>for <strong>walk-in coolers</strong>, <strong>freezers</strong>, <strong>and reach-in refrigerators</strong>. We use high-quality parts to ensure long-lasting repairs and prevent <strong>costly breakdowns</strong>.</p> </>
      ),
    }
  ];


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="tabs-container" ref={containerRef}>
      {!isMobile ? (
        <div className="tabs-layout">
          <div className="tabs-sidebar">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`tabs-title ${activeTab === item.id ? "active" : ""}`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-content">
            {items.map((item) => (
             <div className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}>
             <h2>{item.heading}</h2>
             <div className="tab-body-float">
             {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
             </div>
             <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
           </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item) => (
            <div key={item.id} className="accordion-item">
              <div
                onClick={() =>
                  setActiveTab((prev) => (prev === item.id ? null : item.id))
                }
                className="accordion-header"
              >
                {item.title}
                <span className="accordion-icon">
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>
              {activeTab === item.id && (
               <div className="accordion-content">
               <h2>{item.title}</h2>
               {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
               <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
             </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
