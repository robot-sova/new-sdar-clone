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
  heading: "Why Choose Same Day Appliance Repair for Wine Cooler Repairs?",
      img: "/wine-cooler/best-wine-cooler-repair-service.webp",
      description: (
        <><p>When you choose Same Day Appliance Repair, you're selecting the best in the business for <strong>wine cooler repair services</strong>. Here's why Los Angeles residents trust us:</p><p><strong>Same-Day Service</strong>: We understand that temperature changes can affect the quality of your wines. Our same-day service minimizes downtime, ensuring your collection stays at the <strong>perfect temperature</strong>.</p><p><strong>Certified Technicians</strong>: Our team of skilled <strong>repairmen</strong> is highly trained and experienced in working with all types of <strong>wine coolers</strong> and <strong>wine refrigerators</strong>. From minor fixes to complex repairs, we've got you covered.</p><p><strong>Top-Quality Parts</strong>: We use only original, high-grade replacement parts for your <strong>wine cooler</strong>, including <strong>compressor systems</strong>, <strong>condenser fans</strong>, <strong>door seals</strong>, and more. This guarantees long-term performance and reduces the chance of future breakdowns.</p><p><strong>Transparent Pricing</strong>: With us, there are no surprises. We provide clear quotes for labor and parts upfront so you know the exact cost before we begin.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Wine Cooler Types We Repair",
  heading: "Common Wine Cooler Types We Repair - Our Approach",
      img: "/wine-cooler/wine-cooler-refrigerator-repair.webp",
      description: (
        <> <h3><strong>Thermoelectric Wine Cooler Repair: Energy-Efficient Cooling Solutions</strong></h3><p><strong>Thermoelectric wine coolers</strong> use a <strong>thermoelectric system</strong> to maintain a consistent temperature without the noise of compressor units. However, they can experience issues like insufficient cooling due to ambient <strong>room</strong> temperature or <strong>fan</strong> failures. Our technicians inspect the thermoelectric modules, fans, and internal components to ensure your cooler operates efficiently, keeping your wines at the desired temperature.</p><h3><strong>Compressor Wine Refrigerator Repair: Powerful Cooling for Larger Collections</strong></h3><p>Compressor-based <strong>wine refrigerators</strong> are ideal for larger wine collections but may face problems like <strong>broken evaporators</strong>, faulty compressors, or <strong>condenser fan</strong> issues. These can lead to <strong>hot air</strong> entering the unit or temperature fluctuations. We thoroughly examine the <strong>cooling system</strong>, repair or replace compressors, fix evaporators, and ensure the condenser fan is working correctly to maintain the <strong>perfect temperature</strong> for your wines.</p><h3><strong>Dual-Zone Wine Cooler Repair: Precision Temperature Control for Different Wines</strong></h3><p>Dual-zone <strong>wine fridges</strong> allow for storing red and white wines at different temperatures. Common issues include <strong>control board</strong> malfunctions, temperature changes between zones, or <strong>door seal</strong> problems leading to cold air loss. Our technicians recalibrate thermostats, repair control boards, replace door seals, and fix any issues to ensure each zone maintains its set temperature.</p></>
      ),
    },
    {
      id: "content3",
      title: "Common Wine Cooler Problems",
  heading: "Common Wine Cooler Problems - How We Fix Them",
      img: "/wine-cooler/wine-cooler-repair-near-me.webp",
      description: (
        <><h3><strong>Wine Cooler Not Cooling Properly</strong></h3><p><strong>How We Fix It</strong>: We inspect key components such as the thermostat, <strong>compressor system</strong>, and evaporator. Cleaning <strong>dust</strong> and <strong>debris</strong> from the condenser coils and fans can improve cooling efficiency. If deeper issues exist, we'll repair or replace faulty parts like the compressor or thermostat to restore optimal cooling.</p><h3><strong>Excessive Noise or Vibration</strong></h3><p><strong>How We Fix It</strong>: A wine cooler <strong>making noise</strong> can be due to a malfunctioning fan, loose components, or compressor issues. We tighten any loose parts, lubricate moving components, and replace defective fans or compressors to ensure quiet operation.</p><h3><strong>Temperature Fluctuations</strong></h3><p><strong>How We Fix It</strong>: Inconsistent temperatures can compromise the quality of your wines. We check the thermostat calibration, inspect <strong>door seals</strong> for air leaks, and examine the control board for any errors, ensuring your unit maintains a stable temperature.</p><h3><strong>Door Seal Problems</strong></h3><p><strong>How We Fix It</strong>: Worn or damaged <strong>door seals</strong> can let <strong>hot air</strong> in and cold air out, causing the unit to overwork. We replace door seals to create a tight seal, maintaining the interior temperature and efficiency of your wine cooler.</p><h3><strong>Control Panel or Power Issues</strong></h3><p><strong>How We Fix It</strong>: If the <strong>power button</strong> isn't responding or the control board is malfunctioning, we troubleshoot electrical components, repair wiring issues, and replace defective control boards to restore full functionality.</p></>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Wine Cooler Needs Repair",
  heading: "Signs Your Wine Cooler Needs Repair – When and Why to Call Us",
      img: "/wine-cooler/wine-cooler-repair-service-los-angeles.webp",
      description: (
        <> <p>Spotting early signs of <strong>wine cooler problems</strong> can prevent further damage and preserve your wine collection. Here's what our <strong>service technicians</strong> recommend looking out for:</p><p><strong>Unit Not Cooling</strong>: If your wines aren't staying cold, it could indicate problems with the cooling system.</p><p><strong>Unusual Noises</strong>: Loud humming or rattling noises may suggest issues with the compressor or fan.</p><p><strong>Ice Build-Up</strong>: <strong>Ice melt</strong> or frost inside the unit could signal a <strong>broken evaporator</strong> or poor air circulation.</p><p><strong>Temperature Changes</strong>: Fluctuating temperatures can affect the quality of your wines.</p><p><strong>Condensation or Moisture</strong>: Excess moisture inside the cooler may indicate door seal issues.</p><p>If you notice any of these common problems, <strong>contact</strong> us immediately for professional <strong>wine cooler repair services</strong>.</p></>
      ),
    },
    {
      id: "content5",
      title: "Full-Service Wine Cooler Repair",
  heading: "Full-Service Wine Cooler Repair for Every Home",
      img: "/wine-cooler/wine-cooler-same-day-service.webp",
      description: (
        <> <h3><strong>Kitchen Wine Cooler Repair</strong></h3><p>Your <strong>wine fridge</strong> is an integral part of your kitchen, keeping your favorite bottles at the <strong>perfect temperature</strong>. Whether you have a built-in unit or a freestanding model, our technicians handle everything from thermostat adjustments to compressor repairs, ensuring your cooler operates efficiently.</p><h3><strong>Wine Cooler Repair for Wine Connoisseurs</strong></h3><p>For serious wine collectors, maintaining the right conditions is crucial. We specialize in servicing high-capacity <strong>wine refrigerators</strong>, addressing issues like temperature inconsistencies, fan failures, and control board malfunctions to protect your valuable collection.</p><h3><strong>Luxury and High-End Wine Cooler Repair</strong></h3><p>Premium <strong>wine coolers</strong> from brands like Sub-Zero and Thermador require specialized care. Our team is trained to handle advanced technology, including <strong>thermoelectric systems</strong> and dual-zone cooling, using only top-quality parts to maintain your cooler's performance and style.</p></>
      ),
    },
    {
      id: "content6",
      title: "Maintenance Services for Wine Coolers",
  heading: "Maintenance Services for Long-Lasting Wine Coolers – What Our Technicians Do",
      img: "",
      description: (
        <><p>Regular maintenance ensures your <strong>wine cooler</strong> functions optimally and prolongs its lifespan. Our services include:</p><p><strong>Cleaning Dust and Debris</strong>: We use a <strong>soft cloth</strong> to remove dust from condenser coils and fans, preventing overheating.</p><p><strong>Door Seal Inspection</strong>: We check and replace door seals to prevent <strong>hot air</strong> from entering the unit.</p><p><strong>Thermostat Calibration</strong>: Ensuring your thermostat accurately maintains the desired temperature.</p><p><strong>Fan and Evaporator Checks</strong>: Inspecting and servicing fans and evaporators to ensure efficient cooling.</p><p><strong>Control Board Testing</strong>: Verifying that the control board and <strong>power button</strong> function correctly.</p></>
      ),
    },
    {
      id: "content7",
      title: "Repair or Replacement",
  heading: "Deciding Between Wine Cooler Repair and Replacement",
      img: "",
      description: (
        <><p>If your <strong>wine cooler</strong> frequently experiences issues or the repair costs approach the price of a new unit, it might be time to consider replacing it. Our technicians will assess your <strong>appliance</strong> and provide honest advice based on factors like:</p><p><strong>Age of the Unit</strong>: Older units may be less efficient and more prone to breakdowns.</p><p><strong>Repair Frequency</strong>: Frequent repairs can indicate underlying issues that are costly to fix.</p><p><strong>Energy Efficiency</strong>: Newer models may offer better energy efficiency and advanced features.</p> </>
      ),
    },
    {
      id: "content8",
      title: "Contact Us",
  heading: "Contact Us Today for Expert Wine Cooler Repair Services",
      img: "",
      description: (
        <><p>Don't let a malfunctioning <strong>wine cooler</strong> jeopardize your wine collection. <strong>Contact</strong> Same Day Appliance Repair today for the best <strong>wine cooler repair services</strong> in Los Angeles. Our skilled <strong>service technicians</strong> are ready to <strong>fix</strong> any issue, ensuring your <strong>appliance</strong> maintains the perfect environment for your wines.</p>  </>
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
               <h2>{item.heading}</h2>
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
