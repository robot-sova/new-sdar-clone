import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

 
  const items = [
    {
      id: "content1",
      title: "Commercial Ice Machine Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Same Day Appliance Repair</strong> understands how crucial your <strong>commercial ice machine</strong> is to your business. Whether you run a restaurant, hotel, or grocery store, our certified technicians deliver fast and expert repair services.</p>
          <p>We repair:</p>
          <ul>
            <li><strong>Modular Ice Machines</strong></li>
            <li><strong>Undercounter Ice Machines</strong></li>
            <li><strong>Countertop Ice Dispensers</strong></li>
            <li><strong>Flake Ice Machines</strong></li>
            <li><strong>Nugget Ice Machines</strong></li>
            <li><strong>Full Cube and Half Cube Ice Makers</strong></li>
            <li><strong>Remote Condenser Ice Machines</strong></li>
          </ul>
          <p>Brands we service include Manitowoc, Hoshizaki, Scotsman, Ice-O-Matic, and more.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Common Ice Machine Issues We Fix",
      img: "",
      description: (
        <>
          <ul>
            <li>Slow or no ice production</li>
            <li>Ice with poor taste or cloudy appearance</li>
            <li>Leaking water or ice buildup</li>
            <li>Frequent cycling or overheating</li>
            <li>Compressor or fan motor failure</li>
            <li>Clogged water lines or dirty filters</li>
          </ul>
          <p>We also troubleshoot and reset error codes shown on digital control panels.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Advanced Diagnostics and Models We Repair",
      img: "",
      description: (
        <>
          <p>We use modern diagnostic equipment to assess:</p>
          <ul>
            <li>Thermostats</li>
            <li>Inlet valves</li>
            <li>Pumps</li>
            <li>Evaporators</li>
            <li>Condenser coils</li>
          </ul>
          <p>Example models: KM-901MAJ, F-1002MAJ-C, IDT-1500A, ICEU220FA, HID312A-1, GEM0450A, and many more.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "OEM Parts and Professional Repair Process",
      img: "",
      description: (
        <>
          <p>We use only <strong>OEM parts</strong> and follow <strong>manufacturer repair documentation</strong>. Process:</p>
          <ol>
            <li>Same-day dispatch and evaluation</li>
            <li>System check and diagnosis</li>
            <li>Cleaning of coils</li>
            <li>OEM part replacement</li>
            <li>Testing and system cycling</li>
            <li>Final cleanup and safety check</li>
          </ol>
        </>
      ),
    },
    {
      id: "content5",
      title: "Preventative Maintenance for Ice Machines",
      img: "",
      description: (
        <>
          <ul>
            <li>Cleaning water and drain lines</li>
            <li>Sanitizing internal parts</li>
            <li>Descaling evaporator plates</li>
            <li>Checking refrigerant and compressor</li>
            <li>Lubricating motors and fans</li>
          </ul>
          <p><strong>Scheduled service plans</strong> are available.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Why Businesses Trust Us",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Same-day service in Southern California</strong></li>
            <li>Licensed, certified, insured technicians</li>
            <li><strong>BBB accredited with 20+ years of experience</strong></li>
            <li>Service for all major brands</li>
            <li>Affordable, transparent pricing</li>
            <li>Minimal downtime</li>
          </ul>
        </>
      ),
    },
    {
      id: "content7",
      title: "Book Your Repair + FAQs",
      img: "",
      description: (
        <>
          <p>Contact <strong>Same Day Appliance Repair</strong> today for fast service. Call or use our form to get started.</p>
          <h4>FAQs</h4>
          <p><strong>What areas do you service?</strong> Los Angeles, Orange County, and Ventura County.</p>
          <p><strong>Do you offer emergency repairs?</strong> Yes, including same-day service.</p>
          <p><strong>Can you work after business hours?</strong> Yes, we offer flexible scheduling including nights and weekends.</p>
          <p><strong>Do you offer maintenance contracts?</strong> Yes, we offer affordable ongoing service contracts.</p>
        </>
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
