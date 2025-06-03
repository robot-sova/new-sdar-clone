import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Commercial Fryer Machine Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Same Day Appliance Repair</strong> understands how important a properly functioning commercial fryer is for your restaurant or food service operation. Whether you're running a fast-paced kitchen or a high-volume chain, a broken fryer can slow down service, impact food quality, and affect your bottom line. That’s why our certified and licensed technicians offer <strong>same-day commercial fryer repair</strong> to keep your business moving without interruption.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Commercial Fryers We Service",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Open fryers</strong> – standard for everyday frying</li>
            <li><strong>Pressure fryers</strong> – ideal for fried chicken and fish</li>
            <li><strong>Countertop fryers</strong> – compact units for cafes and food trucks</li>
            <li><strong>Conveyor fryers</strong> – designed for high-volume kitchens</li>
            <li><strong>Multi-basket fryers</strong> – perfect for simultaneous cooking</li>
          </ul>
        </>
      ),
    },
    {
      id: "content3",
      title: "Brands We Repair",
      img: "",
      description: (
        <>
          <p>We service both American and international commercial fryer brands, including: <strong>Frymaster, Pitco, Dean, Vulcan, Garland, Imperial, Henny Penny, Wells, Anets, Globe, Winco, Avantco, Atosa, CookRite, American Range, Royal Range, Equipex, Adcraft, Cecilware, Comstock-Castle, Doyon, DCS, Hobart, Jade, Lang, Magikitchn, Southbend, TurboChef</strong>, and more.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Common Fryer Issues We Fix",
      img: "",
      description: (
        <>
          <ul>
            <li>Fryer not heating or maintaining temperature</li>
            <li>Oil leaks or overheating</li>
            <li>Uneven burner flame or ignition failure</li>
            <li>Thermostat or control panel malfunctions</li>
            <li>Clogged filters and grease buildup</li>
            <li>Electrical issues or tripped safety switches</li>
          </ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Professional Diagnosis and Modern Tools",
      img: "",
      description: (
        <>
          <ul>
            <li>Temperature sensors</li>
            <li>Burners and thermoblocks</li>
            <li>Electrical wiring and fuses</li>
            <li>Control panels and relays</li>
            <li>Safety switches and sensors</li>
          </ul>
          <p>This approach ensures lasting, effective repairs rather than short-term fixes.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "OEM Parts and Manufacturer Specifications",
      img: "",
      description: (
        <>
          <p>To ensure performance and safety, we use only <strong>OEM (Original Equipment Manufacturer) parts</strong>. All repairs are completed according to the manufacturer’s official specifications. For more information, check your brand’s official website or speak to our technician on-site.</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Step-by-Step Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day dispatch</strong> – we send a technician right after your call</li>
            <li><strong>Full inspection</strong> – diagnosis of heating elements, controls, and safety systems</li>
            <li><strong>Cleaning and maintenance</strong> – filters and grease traps thoroughly cleaned</li>
            <li><strong>OEM replacement</strong> – worn or broken parts are replaced using certified components</li>
            <li><strong>Final testing</strong> – unit is tested for heat consistency and safety</li>
            <li><strong>Maintenance tips</strong> – we explain how to keep your fryer running longer</li>
          </ol>
        </>
      ),
    },
    {
      id: "content8",
      title: "Preventative Maintenance to Avoid Breakdowns",
      img: "",
      description: (
        <>
          <ul>
            <li>Degreasing and internal cleaning</li>
            <li>Inspection and replacement of worn components</li>
            <li>Calibration of thermostats and controls</li>
            <li>Checking all electrical connections</li>
            <li>Testing built-in safety systems</li>
          </ul>
        </>
      ),
    },
    {
      id: "content9",
      title: "Why Choose Same Day Appliance Repair?",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Same-day service</strong> – we respond fast so you don’t lose business</li>
            <li><strong>Licensed, insured, and certified technicians</strong></li>
            <li><strong>OEM parts and manufacturer-level repairs</strong></li>
            <li><strong>20+ years of experience in commercial equipment repair</strong></li>
            <li><strong>BBB accredited</strong> – we’re a trusted name in the industry</li>
            <li><strong>We serve all foodservice businesses</strong> – from local restaurants to national chains</li>
            <li><strong>Service across Los Angeles, Orange, and Ventura Counties</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content10",
      title: "FAQs – Commercial Fryer Repair",
      img: "",
      description: (
        <>
          <h4>Which brands do you work with?</h4>
          <p>We repair Frymaster, Pitco, Vulcan, Henny Penny, and many others. A full list is available above.</p>
          <h4>Can you come the same day?</h4>
          <p>Yes! In most cases, we offer same-day dispatch and repair.</p>
          <h4>Do you offer service contracts?</h4>
          <p>Yes, we provide customizable preventative maintenance plans for businesses.</p>
          <h4>Do your repairs come with a warranty?</h4>
          <p>Absolutely. We provide warranties on both parts and labor for all completed repairs.</p>
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
