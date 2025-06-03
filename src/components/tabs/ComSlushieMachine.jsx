import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Commercial Slushie Machine Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Same Day Appliance Repair</strong> specializes in fast, efficient repair of <strong>commercial slushie machines</strong>. Whether you run a convenience store, café, or food truck, we restore your frozen drink machine same-day.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "We Repair All Types of Slush Machines",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Single, double, and triple-bowl slushie machines</strong></li>
            <li><strong>Frozen carbonated beverage (FCB) dispensers</strong></li>
            <li><strong>Frozen uncarbonated beverage machines</strong></li>
            <li><strong>Granita machines</strong></li>
            <li><strong>Countertop and floor models</strong></li>
          </ul>
          <p>We service brands like Bunn, Elmeco, Taylor, Electro Freeze, Carpigiani, SaniServ, Frosty Factory, and more.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Common Slushie Machine Issues We Fix",
      img: "",
      description: (
        <>
          <ul>
            <li>Machine not freezing or freezing too slowly</li>
            <li>Leaks around bowls or valves</li>
            <li>Inconsistent product texture</li>
            <li>Motor or gearbox noises</li>
            <li>Power issues or won't start</li>
            <li>Faulty control panel or display</li>
          </ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Advanced Diagnostic Equipment for Accurate Repairs",
      img: "",
      description: (
        <>
          <p>We use professional tools to test temperatures, pressure, board function, and component performance. From the freezing barrel to the auger motor, every detail is inspected.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "We Only Use OEM Parts",
      img: "",
      description: (
        <>
          <p><strong>OEM parts</strong> ensure long-lasting repairs. Our team uses factory service manuals and receives brand-specific training. Learn more at <a href='https://www.bunn.com' rel='nofollow'>Bunn's official site</a>.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Our Step-by-Step Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li>Same-day arrival</li>
            <li>System-wide diagnostic</li>
            <li>Condenser and filter cleaning</li>
            <li>Replacement of worn parts</li>
            <li>Testing of cycles and performance</li>
            <li>Cleanup and confirmation</li>
          </ol>
        </>
      ),
    },
    {
      id: "content7",
      title: "Preventative Maintenance Keeps Your Business Flowing",
      img: "",
      description: (
        <>
          <ul>
            <li>Evaporator and drain cleaning</li>
            <li>Check refrigerant and pressures</li>
            <li>Lubricate auger shaft and motor</li>
            <li>Inspect gaskets and O-rings</li>
            <li>Test electronics and defrost timers</li>
          </ul>
        </>
      ),
    },
    {
      id: "content8",
      title: "Why Choose Same Day Appliance Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Same-day service</strong> across Southern California</li>
            <li><strong>Certified and insured</strong> technicians</li>
            <li><strong>20+ years of experience</strong></li>
            <li>BBB accredited and trusted by hundreds</li>
            <li>Minimal disruption to your workflow</li>
          </ul>
        </>
      ),
    },
    {
      id: "content9",
      title: "Book Your Slushie Machine Repair Today",
      img: "",
      description: (
        <>
          <p>Contact <strong>Same Day Appliance Repair</strong> today to restore your <strong>commercial slush machine</strong>. Call us now or book online for immediate service.</p>
        </>
      ),
    },
    {
      id: "content10",
      title: "FAQs About Commercial Slushie Machine Repair",
      img: "",
      description: (
        <>
          <h4>Do you repair frozen drink machines used for alcoholic beverages?</h4>
          <p>Yes, we repair margarita and daiquiri machines in commercial settings.</p>
          <h4>Can you fix imported brands?</h4>
          <p>Yes, our technicians are trained to service both domestic and imported slush machines.</p>
          <h4>Do you offer cleaning and tune-up services?</h4>
          <p>Yes, including descaling and internal sanitization.</p>
          <h4>Can I get a maintenance contract?</h4>
          <p>Yes. We offer service plans tailored for frozen beverage machines used year-round.</p>
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
