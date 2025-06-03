import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Commercial Laundry Machine Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Same Day Appliance Repair</strong> understands how important fully functioning washers and dryers are to laundromats, hotels, and other businesses. That’s why we provide same-day commercial laundry machine repair with fast diagnostics and reliable results.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Commercial Laundry Machines We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Commercial washing machines</strong> – front-load, top-load, soft-mount, hard-mount</li>
            <li><strong>Commercial dryers</strong> – gas or electric, vented or ventless</li>
            <li><strong>Stacked washer-dryer units</strong></li>
            <li><strong>Washer-extractors and tumble dryers</strong></li>
            <li><strong>Coin-operated and card-operated machines</strong></li>
            <li><strong>Industrial laundry machines</strong> for heavy-duty applications</li>
          </ul>
        </>
      ),
    },
    {
      id: "content3",
      title: "Brands We Service",
      img: "",
      description: (
        <>
          <p>We repair commercial laundry brands including: <strong>Speed Queen, Maytag, Dexter, UniMac, Milnor, Huebsch, Electrolux Professional</strong> and more.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Common Commercial Laundry Machine Problems",
      img: "",
      description: (
        <>
          <ul>
            <li>Machines not starting or powering on</li>
            <li>Drainage or water-fill problems</li>
            <li>Overheating or no heat in dryers</li>
            <li>Excessive vibration and unbalanced loads</li>
            <li>Strange noises or grinding during cycles</li>
            <li>Error codes on control panels</li>
            <li>Door latch or locking issues</li>
          </ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Diagnostic Process and OEM Parts",
      img: "",
      description: (
        <>
          <p>We use commercial-grade diagnostic tools and <strong>OEM parts</strong> to inspect motors, belts, control boards, and valves for safety and compatibility.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Our Commercial Laundry Machine Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day service</strong> – fast and professional dispatch.</li>
            <li><strong>Full system diagnostics</strong></li>
            <li><strong>Internal cleaning</strong> and clog removal</li>
            <li><strong>OEM parts installation</strong></li>
            <li><strong>Cycle testing</strong></li>
            <li><strong>Maintenance tips</strong></li>
          </ol>
        </>
      ),
    },
    {
      id: "content7",
      title: "Preventative Maintenance Programs",
      img: "",
      description: (
        <>
          <ul>
            <li>Descaling valves and hoses</li>
            <li>Testing heating elements</li>
            <li>Checking bearings</li>
            <li>Inspecting relays</li>
            <li>Calibrating control panels</li>
          </ul>
        </>
      ),
    },
    {
      id: "content8",
      title: "Why Choose Same Day Appliance Repair?",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Same-day repair</strong></li>
            <li><strong>Certified technicians</strong></li>
            <li><strong>OEM parts</strong></li>
            <li><strong>20+ years experience</strong></li>
            <li><strong>BBB accredited</strong></li>
          </ul>
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
