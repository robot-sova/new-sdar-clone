import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Drawered Refrigerated Unit Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Drawered refrigerated units</strong> are an essential part of any modern commercial kitchen. These undercounter fridges feature pull-out drawers instead of doors, providing quick, organized access to cold ingredients. Used heavily in fast-paced restaurants, cafes, prep kitchens, and food trucks, these units are valued for convenience and efficiency. When your refrigerated drawers stop cooling, open unevenly, or begin leaking, it’s critical to act fast. At <strong>Same Day Appliance Repair</strong>, we offer <strong>same-day repair services</strong> to get your equipment back to optimal performance with minimal downtime.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Refrigerated Drawer Units We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Undercounter drawer refrigerators</strong></li>
            <li><strong>Chef base refrigerated drawers</strong> (with equipment stands on top)</li>
            <li><strong>Double-, triple-, and quad-drawer configurations</strong></li>
            <li><strong>Custom refrigerated drawer systems</strong></li>
            <li><strong>Drawer freezers (low-temp units)</strong></li>
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
            <li>Restaurants and commercial kitchens</li>
            <li>Food trucks and ghost kitchens</li>
            <li>Hotels, resorts, and casinos</li>
            <li>Hospital cafeterias and healthcare facilities</li>
            <li>Quick-serve chains and school kitchens</li>
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
          <p>We service a wide range of commercial refrigerated drawer brands, including: <strong>True, Turbo Air, Delfield, Beverage-Air, Hoshizaki, Atosa, Traulsen, Victory, Arctic Air, Continental, Randell, Coldline, Migali, Omcan</strong>, and others.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Common Issues with Refrigerated Drawers",
      img: "",
      description: (
        <>
          <ul>
            <li>Drawers not cooling or holding temperature</li>
            <li>Condensation buildup or water leaks</li>
            <li>Frozen or jammed drawers</li>
            <li>Broken drawer glides or bent tracks</li>
            <li>Compressor or fan motor failure</li>
            <li>Control panel or thermostat malfunction</li>
          </ul>
        </>
      ),
    },
    {
      id: "content6",
      title: "Examples of Models We Repair",
      img: "",
      description: (
        <>
          <p>Some of the drawered refrigerated units we frequently repair include: True TRCB-72, Delfield 4432N, Turbo Air PRCBE-72R, Beverage-Air WTRD60A, Hoshizaki CRMR72-D6, Atosa MGF8454GR, Arctic Air AUC48R-D, Traulsen UST7230-R, Randell FX-2CS, Victory VURD48, Coldline UC60-D2, Migali C-CB72-60, and others.</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Advanced Diagnostics and OEM Replacement Parts",
      img: "",
      description: (
        <>
          <p>We use advanced diagnostic tools to test the performance of compressors, evaporators, thermostats, drawer gaskets, and fan systems. If a component is failing, we use <strong>OEM (Original Equipment Manufacturer)</strong> parts to restore functionality, safety, and food code compliance.</p>
        </>
      ),
    },
    {
      id: "content8",
      title: "Our Refrigerated Drawer Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day technician dispatch</strong> – immediate response to limit downtime</li>
            <li><strong>Full system inspection</strong> – including temperature sensors, door seals, and mechanical parts</li>
            <li><strong>Cleaning and coil maintenance</strong> – removal of grease, dust, and debris from cooling systems</li>
            <li><strong>OEM part installation</strong> – drawers, slides, thermostats, compressors, or gaskets</li>
            <li><strong>Performance testing</strong> – verify temperature, drawer motion, and airflow</li>
            <li><strong>Care tips</strong> – guidance on proper use and cleaning routines to extend lifespan</li>
          </ol>
        </>
      ),
    },
    {
      id: "content9",
      title: "Preventative Maintenance for Drawer Units",
      img: "",
      description: (
        <>
          <ul>
            <li>Checking refrigerant pressure and system integrity</li>
            <li>Cleaning condenser coils and evaporators</li>
            <li>Testing temperature probes and fan operations</li>
            <li>Lubricating drawer slides and inspecting track hardware</li>
            <li>Evaluating compressor health and electrical connections</li>
          </ul>
        </>
      ),
    },
    {
      id: "content10",
      title: "Why Choose Same Day Appliance Repair?",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Same-day commercial refrigeration repair</strong> to reduce kitchen disruption</li>
            <li><strong>Experienced, certified, and insured technicians</strong></li>
            <li><strong>OEM replacement parts and factory-level repair quality</strong></li>
            <li><strong>20+ years of commercial appliance repair experience</strong></li>
            <li><strong>BBB accredited and trusted across California</strong></li>
            <li><strong>We serve Los Angeles, Orange, and Ventura Counties</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content11",
      title: "Schedule Your Refrigerated Drawer Repair Today",
      img: "",
      description: (
        <>
          <p>Don’t let drawer fridge problems disrupt your kitchen workflow. Contact <strong>Same Day Appliance Repair</strong> to book a fast and professional service. Call now or use our online form to schedule your appointment — we’ll be on-site as soon as possible.</p>
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
