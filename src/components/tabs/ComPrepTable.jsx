import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Commercial Prep Table Refrigerator Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Prep table refrigerators</strong> are essential to daily operations in restaurants, sandwich shops, pizzerias, delis, and fast-casual kitchens. These units store fresh ingredients like vegetables, meats, cheeses, and sauces — all while providing a convenient prep surface. When your <strong>commercial prep table refrigerator</strong> fails, your food quality, health code compliance, and customer service are all at risk. At <strong>Same Day Appliance Repair</strong>, we offer <strong>same-day repair services</strong> to get your unit back in working order fast.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Prep Table Refrigerators We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Sandwich prep tables</strong></li>
            <li><strong>Salad prep stations</strong></li>
            <li><strong>Pizza prep tables</strong> with larger cutting space and extra capacity</li>
            <li><strong>Drawered prep fridges</strong> with cold storage instead of cabinet doors</li>
            <li><strong>Counter-height undercounter refrigerated tables</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content3",
      title: "Who We Serve",
      img: "",
      description: (
        <>
          <ul>
            <li>Restaurants and fast-casual chains</li>
            <li>Pizza shops and bakeries</li>
            <li>Deli counters and sandwich shops</li>
            <li>Food trucks and mobile catering operations</li>
            <li>Ghost kitchens and commercial commissaries</li>
          </ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Brands We Service",
      img: "",
      description: (
        <>
          <p>We repair a wide range of prep table refrigerator brands, including: <strong>True, Turbo Air, Beverage-Air, Delfield, Continental, Arctic Air, Atosa, Traulsen, Hoshizaki, Victory, Avantco, Randell, Migali, Omcan, Coldline</strong>, and others.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Common Prep Table Refrigerator Issues We Fix",
      img: "",
      description: (
        <>
          <ul>
            <li>Unit not cooling properly or warm ingredients</li>
            <li>Condensation or water pooling inside the cabinet</li>
            <li>Faulty thermostat or temperature fluctuation</li>
            <li>Noisy compressor or broken condenser fan</li>
            <li>Damaged gaskets or poor door seal</li>
            <li>LED or control panel malfunction</li>
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
