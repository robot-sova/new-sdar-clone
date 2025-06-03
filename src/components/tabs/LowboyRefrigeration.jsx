import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Lowboy Refrigeration Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p><strong>Lowboy refrigerators</strong> — also known as undercounter or low-profile refrigeration units — are a staple in fast-paced kitchens where space, speed, and efficiency matter. These compact yet powerful refrigerators are designed to fit beneath prep tables, countertops, or workstations, giving chefs quick access to chilled ingredients without interrupting workflow. At <strong>Same Day Appliance Repair</strong>, we specialize in <strong>same-day lowboy refrigeration repair</strong> for restaurants, bakeries, cafés, ghost kitchens, and more.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "What Is a Lowboy Refrigerator?",
      img: "",
      description: (
        <>
          <p>Lowboy refrigeration units are short, wide refrigerators designed to be installed beneath work surfaces or along kitchen lines. They are used to store vegetables, proteins, dairy, and sauces in a space-saving, accessible way — helping to keep everything within arm’s reach during peak hours.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Types of Lowboy Refrigeration Units We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>One-, two-, and three-door lowboys</strong></li>
            <li><strong>Drawer-style lowboy fridges</strong></li>
            <li><strong>Lowboy freezers and dual-temp models</strong></li>
            <li><strong>Low-profile chef base units</strong></li>
            <li><strong>Custom stainless-steel refrigerated workstations</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Businesses We Serve",
      img: "",
      description: (
        <>
          <ul>
            <li>Restaurants and fine dining kitchens</li>
            <li>Food trucks and ghost kitchens</li>
            <li>Bakeries, cafés, and patisseries</li>
            <li>Hotels, resorts, and event venues</li>
            <li>Corporate cafeterias and educational facilities</li>
          </ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Brands We Service",
      img: "",
      description: (
        <>
          <p>We repair all major lowboy refrigerator brands, including: <strong>True, Turbo Air, Atosa, Beverage-Air, Continental, Hoshizaki, Traulsen, Arctic Air, Victory, Delfield, Randell, Coldline, Migali, Omcan</strong>, and others.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Common Issues with Lowboy Refrigerators",
      img: "",
      description: (
        <>
          <ul>
            <li>Temperature not holding or fluctuating</li>
            <li>Unit not cooling at all</li>
            <li>Compressor making noise or not starting</li>
            <li>Water leaks and condensation buildup</li>
            <li>Faulty thermostat or control board</li>
            <li>Damaged door seals or gaskets</li>
          </ul>
        </>
      ),
    },
    {
      id: "content7",
      title: "Examples of Models We Repair",
      img: "",
      description: (
        <>
          <p>Here are some of the lowboy refrigerator models we frequently service: True TUC-48, Turbo Air MUR-60, Atosa MGF8406GR, Beverage-Air UCR27HC, Traulsen UHT27-LR, Arctic Air AUC60R, Delfield UC4428N, Hoshizaki UR27A, Victory VUR60, Coldline UC36, Randell 9248A, Migali C-U48R, and others.</p>
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
