import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  
const items = [
    {
      id: "content1",
      title: "Commercial Kegerator and Beer Dispenser Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Commercial keg refrigerators</strong> — also known as <strong>kegerators</strong> or <strong>beer dispensers</strong> — are a crucial part of beverage service for bars, breweries, pubs, restaurants, and event venues. These systems store kegs at the ideal temperature and dispense beer or other beverages through taps. When your unit fails, it affects not only your customer experience but also product freshness and profitability. That’s why <strong>Same Day Appliance Repair</strong> offers expert <strong>same-day kegerator repair</strong> services to get your taps pouring again fast.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Beverage Dispensers We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Undercounter kegerators</strong> (1–3 tap towers)</li>
            <li><strong>Glass-door keg coolers</strong></li>
            <li><strong>Dual-zone beer dispensers</strong></li>
            <li><strong>Remote-draw keg systems</strong></li>
            <li><strong>Mobile and outdoor-rated draft dispensers</strong></li>
            <li><strong>Multi-keg keg refrigerators</strong> (for bars and taprooms)</li>
          </ul>
        </>
      ),
    },
    {
      id: "content3",
      title: "Industries We Serve",
      img: "",
      description: (
        <>
          <ul>
            <li>Bars and breweries</li>
            <li>Pubs and lounges</li>
            <li>Restaurants and cafes with draft systems</li>
            <li>Event venues and catering services</li>
            <li>Golf clubs and sports arenas</li>
          </ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Common Problems with Kegerators and Beer Dispensers",
      img: "",
      description: (
        <>
          <ul>
            <li>Kegerator not cooling or running warm</li>
            <li>Flat or foamy beer caused by inconsistent temperatures</li>
            <li>Tap not dispensing or poor flow rate</li>
            <li>Frost buildup or compressor failure</li>
            <li>Leaking CO₂ lines or pressure regulator malfunctions</li>
            <li>Damaged door gaskets or keg couplers</li>
          </ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Our Kegerator Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day dispatch</strong> – technician arrives quickly to minimize downtime</li>
            <li><strong>Full system inspection</strong> – including compressor, cooling coils, regulators, and taps</li>
            <li><strong>CO₂ system check</strong> – testing lines, gauges, couplers, and pressure levels</li>
            <li><strong>OEM part replacement</strong> – including thermostats, gaskets, fans, or regulators</li>
            <li><strong>Performance testing</strong> – ensure proper temperature, tap flow, and carbonation</li>
            <li><strong>Cleaning and maintenance guidance</strong> – tips to prevent future issues</li>
          </ol>
        </>
      ),
    },
    {
      id: "content6",
      title: "Preventative Maintenance Services",
      img: "",
      description: (
        <>
          <ul>
            <li>Cleaning of beer lines and faucets</li>
            <li>Inspection of CO₂ system and pressure regulators</li>
            <li>Temperature calibration and airflow checks</li>
            <li>Replacing worn seals, taps, and hoses</li>
            <li>Drain line and fan cleaning</li>
          </ul>
        </>
      ),
    },
    {
      id: "content7",
      title: "Frequently Asked Questions",
      img: "",
      description: (
        <>
          <h3>Can you fix a kegerator that’s too warm?</h3>
          <p>Yes. We diagnose cooling system issues including faulty thermostats, compressor problems, and airflow blockages.</p>
  
          <h3>Do you repair beer taps and CO₂ systems?</h3>
          <p>Absolutely. We check and repair tap lines, couplers, gauges, and gas regulators.</p>
  
          <h3>Do you service dual-zone keg systems?</h3>
          <p>Yes, we repair advanced multi-zone and multi-tap units used in bars and breweries.</p>
  
          <h3>Can I set up a maintenance plan for my beer system?</h3>
          <p>Yes. We offer preventative maintenance plans to keep your draft system clean and efficient year-round.</p>
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
