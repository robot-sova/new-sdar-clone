import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Chef Base Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Chef bases</strong> are essential in busy commercial kitchens, offering the perfect combination of cold storage and countertop workspace for cooking equipment like griddles, charbroilers, and fryers. These refrigerated drawer units not only save space but also streamline prep and cook times. When your chef base malfunctions — whether it stops cooling, leaks, or the drawers get stuck — your entire kitchen workflow is affected. At <strong>Same Day Appliance Repair</strong>, we provide fast, reliable, <strong>same-day chef base repair</strong> to get your kitchen running smoothly again.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "What Is a Chef Base?",
      img: "",
      description: (
        <>
          <p>A chef base is a low-profile refrigerated unit with drawers that sits beneath countertop cooking equipment. It allows chefs to store ingredients like proteins and sauces right beneath the cooking line, improving efficiency and food safety in fast-paced kitchens.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Types of Chef Bases We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Two-drawer and four-drawer refrigerated chef bases</strong></li>
            <li><strong>Gas and electric equipment base models</strong></li>
            <li><strong>Heavy-duty reinforced tops for griddles or charbroilers</strong></li>
            <li><strong>Chef bases with integrated temperature controls</strong></li>
            <li><strong>Drawer freezer bases (low-temperature units)</strong></li>
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
          <p>We repair chef base units from leading manufacturers, including: <strong>True, Turbo Air, Beverage-Air, Delfield, Traulsen, Arctic Air, Hoshizaki, Atosa, Victory, Randell, Coldline, Migali, Omcan, Continental</strong>, and others.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Common Chef Base Issues We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li>Refrigeration failure or uneven cooling</li>
            <li>Compressor not running or making noise</li>
            <li>Water pooling or drain line clogs</li>
            <li>Damaged drawer seals or broken glides</li>
            <li>Drawer doors stuck, misaligned, or hard to open</li>
            <li>Faulty thermostat or digital control panel</li>
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
          <p>Here are some of the chef base models we commonly repair: True TRCB-72, Turbo Air PRCBE-72R, Beverage-Air WTRCS60, Atosa MGF8454GR, Delfield F2932, Traulsen UST7230-R, Arctic Air AUB65R, Hoshizaki CRMR72-D6, Coldline UC60-D2, Victory VCB72, and Migali C-CB72-60.</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Our Chef Base Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day dispatch</strong> – A certified technician is sent to your location immediately</li>
            <li><strong>Full inspection</strong> – Testing refrigeration cycle, drawer alignment, and electrical components</li>
            <li><strong>Cleaning coils and drain lines</strong> – Removing grease buildup and clogs</li>
            <li><strong>OEM part replacement</strong> – Installing drawer glides, gaskets, thermostats, or compressors</li>
            <li><strong>System testing</strong> – Ensuring temperature holds steady under hot kitchen conditions</li>
            <li><strong>Preventative care tips</strong> – Recommendations to avoid future failures</li>
          </ol>
        </>
      ),
    },
    {
      id: "content8",
      title: "Preventative Maintenance for Chef Bases",
      img: "",
      description: (
        <>
          <ul>
            <li>Cleaning condenser and evaporator coils</li>
            <li>Checking refrigerant levels and system pressure</li>
            <li>Testing drawer seals and hinges</li>
            <li>Inspecting electrical connections and digital controls</li>
            <li>Evaluating compressor, fan, and thermostat function</li>
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
            <li><strong>Same-day chef base repair</strong> to reduce downtime</li>
            <li><strong>Licensed, insured, and factory-trained technicians</strong></li>
            <li><strong>OEM parts and manufacturer-compliant procedures</strong></li>
            <li><strong>20+ years of experience</strong> with commercial kitchen equipment</li>
            <li><strong>BBB accredited and trusted throughout California</strong></li>
            <li><strong>Service coverage in Los Angeles, Orange, and Ventura Counties</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content10",
      title: "Schedule Your Chef Base Repair Today",
      img: "",
      description: (
        <>
          <p>Don't let a broken chef base slow down your kitchen. Contact <strong>Same Day Appliance Repair</strong> today to book fast and professional repair service. Call us or use our online form — our technicians are ready to help!</p>
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
