import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Commercial Stove Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p>When your <strong>commercial stove</strong> stops working properly, your entire kitchen operation can come to a standstill. Whether you run a busy restaurant, café, food truck, or catering service, you need reliable equipment to keep your business running efficiently. At <strong>Same Day Appliance Repair</strong>, our licensed and certified technicians specialize in <strong>same-day commercial stove repair</strong> so you can get back to serving customers fast.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Commercial Stoves We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Gas ranges</strong> – single and multi-burner</li>
            <li><strong>Electric stoves</strong> – solid top or coil element</li>
            <li><strong>Dual-fuel commercial stoves</strong></li>
            <li><strong>Restaurant cooktops and griddles</strong></li>
            <li><strong>Heavy-duty commercial ranges</strong></li>
            <li><strong>Countertop and freestanding models</strong></li>
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
          <p>We repair all major commercial stove brands, including: <strong>Vulcan, Garland, Southbend, Imperial, Wolf, American Range, Jade, Blodgett, Bakers Pride, Montague, Royal Range, Lang, TurboChef, Globe, Atosa, TrueHeat, Hobart, Waring, Toastmaster, Omcan</strong>, and more.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Common Stove Problems We Fix",
      img: "",
      description: (
        <>
          <ul>
            <li>Burners not igniting or heating unevenly</li>
            <li>Gas smell or ignition system failure</li>
            <li>Temperature not holding or fluctuating</li>
            <li>Broken knobs, thermostats, or control panels</li>
            <li>Oven portion not heating or overheating</li>
            <li>Electrical issues or blown fuses</li>
          </ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Diagnostic Process and OEM Part Replacement",
      img: "",
      description: (
        <>
          <p>We use professional-grade tools to inspect ignition systems, gas lines, heating elements, safety valves, thermostats, and other critical components. If parts are damaged or worn, we replace them with <strong>OEM (Original Equipment Manufacturer) parts</strong> to ensure safety and long-term reliability.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Our Step-by-Step Commercial Stove Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day response</strong> – We prioritize urgent repairs to avoid business downtime</li>
            <li><strong>Thorough diagnostic inspection</strong> – We check burners, pilot lights, thermostats, gas/electrical systems</li>
            <li><strong>Cleaning and safety check</strong> – We clean gas ports, valves, and inspect for leaks</li>
            <li><strong>OEM part replacement</strong> – We install only factory-approved parts for safety and warranty protection</li>
            <li><strong>Operational testing</strong> – We verify temperature control and burner function</li>
            <li><strong>Maintenance tips</strong> – We help you keep your stove in top condition moving forward</li>
          </ol>
        </>
      ),
    },
    {
      id: "content7",
      title: "Preventative Maintenance for Commercial Stoves",
      img: "",
      description: (
        <>
          <ul>
            <li>Cleaning burner assemblies and ports</li>
            <li>Inspecting gas lines and regulators</li>
            <li>Testing safety valves and thermostats</li>
            <li>Checking electrical connections and control panels</li>
            <li>Calibrating temperature and flame consistency</li>
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
            <li><strong>Same-day repair service</strong> to minimize kitchen disruption</li>
            <li><strong>Licensed and certified commercial appliance technicians</strong></li>
            <li><strong>OEM parts for high-quality, manufacturer-compliant repairs</strong></li>
            <li><strong>Over 20 years of experience</strong> with restaurant equipment</li>
            <li><strong>BBB accredited and trusted by hundreds of food service businesses</strong></li>
            <li><strong>We serve Los Angeles, Orange, and Ventura Counties</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content9",
      title: "Frequently Asked Questions",
      img: "",
      description: (
        <>
          <h3>Can you repair gas and electric stoves?</h3>
          <p>Yes, our technicians are trained to repair both gas and electric commercial stoves of all brands and sizes.</p>
          <h3>Do you service restaurant-grade ranges and cooktops?</h3>
          <p>Absolutely. We repair high-capacity restaurant-grade stoves, cooktops, and griddles daily.</p>
          <h3>Are OEM parts included in your repair?</h3>
          <p>Yes. We only use original manufacturer parts for safety and warranty purposes.</p>
          <h3>Can you provide maintenance contracts?</h3>
          <p>Yes, we offer ongoing maintenance plans to ensure your commercial cooking equipment stays reliable year-round.</p>
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
