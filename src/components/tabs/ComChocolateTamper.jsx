import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  
const items = [
    {
      id: "content1",
      title: "Commercial Chocolate Tamper Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p>
            If your <strong>commercial chocolate tamper</strong> stops working, your production can quickly grind to a halt. At <strong>Same Day Appliance Repair</strong>, we understand how crucial this equipment is for chocolatiers, bakeries, dessert manufacturers, confectionery producers, and commercial kitchens. That’s why our expert technicians offer <strong>same-day chocolate tamper repair</strong> to restore smooth operations and reduce downtime.
          </p>
        </>
      ),
    },
    {
      id: "content2",
      title: "What Is a Chocolate Tamper?",
      img: "",
      description: (
        <>
          <p>
            A chocolate tamper (or chocolate vibrating table) ensures that chocolate molds are evenly filled by removing air bubbles and compacting the liquid chocolate. If this unit fails, it can compromise product quality and consistency, which is especially critical for food production businesses that rely on volume and presentation.
          </p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Types of Chocolate Tampers We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Tabletop vibrating chocolate tampers</strong></li>
            <li><strong>Industrial vibrating tables for chocolate molding</strong></li>
            <li><strong>Integrated tampers in chocolate tempering machines</strong></li>
            <li><strong>Custom vibrating platforms for chocolate production lines</strong></li>
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
          <p>
            We repair chocolate tampers and vibrating tables from popular manufacturers such as:
            <strong> Selmi, Chocovision, Mol D'Art, Hilliard's, Prefamac, ICB Tecnologie, KREA Swiss, Martellato, Savage Bros., FBM (Boscolo), Gami, Dedy, Sollich</strong>, and other commercial chocolate equipment brands.
          </p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Common Chocolate Tamper Problems We Fix",
      img: "",
      description: (
        <>
          <ul>
            <li>Motor not running or vibrating platform not engaging</li>
            <li>Unstable or uneven vibration</li>
            <li>Burned-out wiring or switch failure</li>
            <li>Loose parts, brackets, or structural vibration issues</li>
            <li>Electrical shorts or blown fuses</li>
            <li>Integration failures with tempering units or production lines</li>
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
          <p>
            Here are some examples of commercial chocolate tamper models we service regularly:
            Selmi Vibra, Mol D’Art VTR-2, Hilliard’s Mini Tamper, FBM Unica Vibe, Prefamac Vibra-1, Chocovision Rev2 Vibrator, KREA Vibro, Martellato Vibrating Table 400, Dedy Vibrator 30/50, Gami Vibrato S, ICB Vibrating Tray 1000, and more.
          </p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Diagnostic Process and OEM Parts",
      img: "",
      description: (
        <>
          <p>
            We use precision testing tools to check vibration motors, control circuits, speed regulators, rubber mounts, electrical switches, and drive mechanisms. If components need replacement, we use <strong>OEM (Original Equipment Manufacturer)</strong> parts to ensure safety, durability, and full compatibility with your chocolate production equipment.
          </p>
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
