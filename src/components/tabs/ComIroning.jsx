import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  
const items = [
    {
      id: "content1",
      title: "Commercial Ironing Equipment Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Same Day Appliance Repair</strong> offers same-day commercial ironing equipment repair for dry cleaners, hotels, laundromats, and more. Our expert technicians restore flatwork ironers, steam presses, vacuum tables, and combo units with fast diagnostics and reliable OEM parts.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Commercial Ironing Equipment We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Roller ironers (flatwork ironers)</strong></li>
            <li><strong>Steam press machines</strong></li>
            <li><strong>Vacuum ironing tables</strong></li>
            <li><strong>Heated ironing tables</strong></li>
            <li><strong>Wall-mounted or freestanding steam iron stations</strong></li>
            <li><strong>Automatic folder/ironer combo units</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content3",
      title: "Common Ironing Equipment Problems We Fix",
      img: "",
      description: (
        <>
          <ul>
            <li>Rollers not heating or rotating</li>
            <li>Steam generation failure or inconsistent pressure</li>
            <li>Electrical malfunctions or short circuits</li>
            <li>Vacuum suction loss in ironing tables</li>
            <li>Wrinkled or improperly pressed output</li>
            <li>Motor, thermostat, or safety switch failure</li>
          </ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Our Commercial Ironing Equipment Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day dispatch</strong> – technician is assigned and dispatched quickly</li>
            <li><strong>Detailed equipment inspection</strong> – we test all thermal, mechanical, and steam-related systems</li>
            <li><strong>Cleaning and adjustment</strong> – buildup is removed and moving parts calibrated</li>
            <li><strong>OEM part replacement</strong> – we install manufacturer-grade parts to restore full function</li>
            <li><strong>Test run</strong> – ironers and steam systems are tested under load conditions</li>
            <li><strong>Safety and quality check</strong> – all outputs are verified for professional finishing quality</li>
          </ol>
        </>
      ),
    },
    {
      id: "content5",
      title: "Preventative Maintenance for Ironing Equipment",
      img: "",
      description: (
        <>
          <ul>
            <li>Descaling heating elements and steam lines</li>
            <li>Cleaning lint traps, rollers, belts, and suction systems</li>
            <li>Lubricating bearings and moving parts</li>
            <li>Testing electrical connections and thermostats</li>
            <li>Calibrating steam pressure and timing settings</li>
          </ul>
        </>
      ),
    },
    {
      id: "content6",
      title: "Why Choose Same Day Appliance Repair?",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Same-day commercial ironing equipment repair</strong></li>
            <li><strong>Factory-trained, licensed, and insured technicians</strong></li>
            <li><strong>OEM parts and brand-compliant service methods</strong></li>
            <li><strong>Over 20 years of experience</strong> in commercial appliance repair</li>
            <li><strong>BBB accredited and trusted by laundry professionals across California</strong></li>
            <li><strong>Service across Los Angeles, Orange, and Ventura Counties</strong></li>
          </ul>
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
