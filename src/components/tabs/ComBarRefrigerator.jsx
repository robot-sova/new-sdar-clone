import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Comprehensive Bar Refrigerator Services",
      img: "/bar-refrigerator/bar-refrigerator-repair-1.webp",
      description: (
        <>
          <p>From <strong>installation</strong> and <strong>maintenance</strong> to urgent <strong>repairs</strong>, we handle all aspects of <strong>bar refrigerator repair</strong>. Our team quickly identifies issues, whether it’s related to <strong>temperature control</strong>, malfunctioning <strong>doors</strong>, or <strong>cooling inconsistencies</strong>. We understand that even a slight disruption in cooling can affect <strong>food</strong> quality and customer satisfaction, which is why we prioritize same-day service.</p><p>Call us today to schedule your <strong>service visit</strong> and keep your <strong>bar refrigerator</strong> running smoothly. Let our technicians ensure your <strong>bar refrigeration equipment</strong> operates reliably, supporting uninterrupted service to your <strong>customers</strong>.</p>

        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Bar Refrigeration Equipment We Repair",
      img: "/bar-refrigerator/bar-refrigerator-repair-2.webp",
      description: (
        <>
          <p>Our certified technicians have hands-on experience with all types of commercial bar cooling systems, including:</p>
          <p><strong>Back bar coolers</strong></p>
          <p><strong>Undercounter beverage coolers</strong></p>
          <p><strong>Keg refrigerators (kegerators)</strong></p>
          <p><strong>Glass door display fridges</strong></p>
          <p><strong>Bottle coolers and beer dispensers</strong></p>
          <p><strong>Reach-in bar refrigerators</strong></p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Brands We Service",
      img: "/bar-refrigerator/bar-refrigerator-repair-3.webp",
      description: (
        <>
          <p>We repair a wide range of trusted commercial bar refrigeration brands, including: <strong>True, Beverage-Air, Turbo Air, Perlick, Avantco, Continental, Arctic Air, U-Line, Maxx Cold, Migali, Glastender, Krowne, Hoshizaki, Everest, Omcan, Randell, Delfield, Summit, Atosa, Norlake, Victory</strong>, and others.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Common Issues with Bar Refrigerators",
      img: "/bar-refrigerator/bar-refrigerator-repair-4.webp",
      description: (
        <>
          <p>Bar refrigerators are used daily and often run 24/7. Over time, they can develop performance issues. We handle problems such as:</p>
          <p>Fridge not cooling or maintaining temperature</p>
          <p>Frost buildup or condensation inside the unit</p>
          <p>Unusual noises from the compressor or fan</p>
          <p>Leaks or puddles beneath the unit</p>
          <p>Faulty thermostats or control board failures</p>
          <p>Door gasket issues and poor sealing</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Advanced Diagnostics & OEM Part Replacements",
      img: "/bar-refrigerator/bar-refrigerator-repair-5.webp",
      description: (
        <>
          <p>Our technicians use modern tools to assess the compressor, evaporator, thermostat, and airflow systems. We’ll quickly identify the cause of the issue and replace worn components using <strong>OEM (original equipment manufacturer)</strong> parts to maintain performance and ensure food safety compliance.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Our Repair Process",
      img: "/bar-refrigerator/bar-repair-process.webp",
      description: (
        <>
          <p><strong>Same-day dispatch</strong> – call us and we’ll send a technician immediately</p>
          <p><strong>In-depth inspection</strong> – full check of cooling system, seals, fans, and electronics</p>
          <p><strong>Component cleaning</strong> – remove buildup, defrost coils, and clean drains</p>
          <p><strong>OEM part replacement</strong> – swap out worn thermostats, motors, or compressors</p>
          <p><strong>System test</strong> – verify temperature control and consistent operation</p>
          <p><strong>On-site consultation</strong> – advice on usage and long-term care</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Preventative Maintenance Services",
      img: "/bar-refrigerator/bar-refrigerator-maintenance.webp",
      description: (
        <>
          <p>Routine service prevents emergency breakdowns and extends equipment lifespan. Our bar fridge maintenance services include:</p>
          <p>Cleaning evaporators and condensers</p>
          <p>Checking refrigerant levels and pressure</p>
          <p>Testing thermostats, relays, and compressors</p>
          <p>Inspecting door seals and hinges</p>
          <p>Clearing drain lines and defrost systems</p>
        </>
      ),
    },
    {
      id: "content8",
      title: "Why Choose Same Day Appliance Repair?",
      img: null,
      description: (
        <>
          <p><strong>Same-day repair service available</strong></p>
          <p><strong>Certified, insured, and experienced technicians</strong></p>
          <p><strong>OEM parts and manufacturer-compliant repairs</strong></p>
          <p><strong>Over 20 years of experience</strong> in commercial refrigeration</p>
          <p><strong>BBB accredited and trusted by hundreds of local businesses</strong></p>
          <p><strong>Serving Los Angeles, Orange, and Ventura Counties</strong></p>
        </>
      ),
    },
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
             <h2>{item.title}</h2>
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
