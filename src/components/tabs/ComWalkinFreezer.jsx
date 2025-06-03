import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Walk-In Freezer Repair and Maintenance in Los Angeles and Surrounding Areas",
      img: "",
      description: (
        <>
          <p>At <strong>Same Day Appliance Repair</strong>, we understand that a <strong>walk-in freezer</strong> is essential to any <strong>commercial kitchen</strong>. Our expert technicians, serving <strong>Los Angeles</strong> and surrounding areas, bring extensive knowledge and experience to every <strong>service call</strong>. Whether you own a <strong>restaurant</strong>, <strong>grocery store</strong>, or any business that relies on a <strong>refrigeration system</strong>, we offer tailored <strong>walk-in freezer repair</strong> and <strong>preventative maintenance</strong> services to meet your needs.</p>
  <p>We know that <strong>walk-in freezers</strong> are critical for preserving your products. From minor <strong>cooler repairs</strong> to more complex <strong>freezer repairs</strong> involving the entire <strong>refrigeration system</strong>, our technicians handle it all. Downtime is costly, so we offer <strong>same-day repair service</strong> to protect your inventory and keep your <strong>business</strong> running smoothly. <strong>Contact us today</strong> to schedule a <strong>service call</strong> and get your <strong>commercial freezer</strong> operating like new.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Walk-In Freezer Types We Service and Our Approach",
      img: "",
      description: (
        <>
          <h4><strong>Walk-In Freezer Repair: Ensuring Optimal Freezing Conditions</strong></h4>
  <p><strong>Walk-in freezers</strong> are vital for businesses that store large quantities of perishable items like <strong>meat</strong>, <strong>produce</strong>, and other <strong>temperature-sensitive</strong> products. Common issues include <strong>temperature fluctuations</strong>, <strong>evaporator coil</strong> malfunctions, and <strong>condensing unit</strong> failures. Our technicians inspect each part of the <strong>refrigeration system</strong>, from <strong>evaporator coils</strong> to <strong>floor</strong> and <strong>ceiling seals</strong>, ensuring your commercial freezer maintains the appropriate <strong>temperature</strong> without wasting energy.</p>
  <h4><strong>Reach-In Freezer Repairs: Fast Solutions for Accessible Storage</strong></h4>
  <p><strong>Reach-in freezers</strong> are frequently used in <strong>commercial kitchens</strong> where easy access is necessary. Problems like <strong>evaporator coil icing</strong>, warm air leaks, and <strong>door gasket</strong> deterioration are common. Our technicians specialize in diagnosing and fixing these issues to ensure your <strong>commercial</strong> <strong>freezer</strong> circulates cold air efficiently, keeping your <strong>equipment</strong> in top working order so you can focus on <strong>customer service</strong>.</p>
  <h4><strong>Undercounter Freezer Repair: Space-Saving Cold Storage</strong></h4>
  <p>For smaller <strong>commercial kitchens</strong>, <strong>undercounter freezers</strong> offer essential storage without occupying much space. These units may experience <strong>temperature maintenance</strong> issues, blocked <strong>air vents</strong>, or worn <strong>door gaskets</strong>. Our team addresses these concerns to ensure a consistent <strong>freeze cycle</strong>, keeping your <strong>undercounter freezer</strong> operating smoothly.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Common Walk-In Freezer Problems We Fix",
      img: "",
      description: (
        <>
          <p>At <strong>Same Day Appliance Repair</strong>, our technicians address <strong>walk-in freezer</strong> issues daily. With years of experience and insights from working with <strong>customers</strong>, we’ve developed a repair process to keep your <strong>equipment</strong> performing optimally.</p>
  <ol><li><p><strong>Freezer Not Holding Temperature</strong></p><ul><li><p><strong>Customer Concern</strong>: “My commercial freezer isn’t cold, and I’m losing product.”</p></li><li><p><strong>How We Fix It</strong>: When a <strong>walk-in freezer</strong> struggles to maintain temperature, we check the <strong>condensing unit</strong>and <strong>evaporator coils</strong> for blockages or leaks. We inspect the <strong>refrigeration system</strong> for airflow issues affecting the <strong>cooling cycle</strong> and ensure stable <strong>temperature control</strong> to preserve your products.</p></li></ul></li><li><p><strong>Frost or Ice Build-Up</strong></p><ul><li><p><strong>Customer Concern</strong>: “There’s too much frost, and it’s hard to use.”</p></li><li><p><strong>How We Fix It</strong>: Excessive frost often indicates a problem with the <strong>defrost system</strong> or <strong>door gaskets</strong>. We repair the defrost cycle and replace any worn gaskets, helping maintain the right <strong>temperature</strong> and minimize ice build-up for stable storage.</p></li></ul></li><li><p><strong>Water Leak</strong></p><ul><li><p><strong>Customer Concern</strong>: “Water is pooling on the floor, but I can’t find the source.”</p></li><li><p><strong>How We Fix It</strong>: <strong>Water leakage</strong> usually results from clogged <strong>drain lines</strong> or damaged <strong>floor seals</strong>. Our technicians clear blockages, check for <strong>excess moisture</strong>, and repair <strong>door gaskets</strong> to ensure proper drainage and avoid further issues.</p></li></ul></li><li><p><strong>Freezer Door Not Sealing Properly</strong></p><ul><li><p><strong>Customer Concern</strong>: “The door won’t close all the way, so it isn’t cold enough.”</p></li><li><p><strong>How We Fix It</strong>: An unsealed door lets warm air into the <strong>walk-in freezer</strong>. We inspect and replace <strong>door gaskets</strong> and hinges as necessary, ensuring an airtight seal to prevent <strong>condensing unit</strong> overload and maintain efficient cooling.</p></li></ul></li><li><p><strong>Unusual Sounds from the Freezer</strong></p><ul><li><p><strong>Customer Concern</strong>: “It’s making strange noises, and I’m worried it will break.”</p></li><li><p><strong>How We Fix It</strong>: Strange noises often indicate wear in the <strong>fan motor</strong>, <strong>compressor</strong>, or <strong>evaporator fan</strong>. Our technicians identify the source and replace the faulty parts, restoring smooth, quiet operation to prevent further damage.</p></li></ul></li><li><p><strong>Electrical Issues</strong></p><ul><li><p><strong>Customer Concern</strong>: “The freezer keeps shutting off.”</p></li><li><p><strong>How We Fix It</strong>: Electrical issues, especially in older units, can stem from faulty thermostats, <strong>control boards</strong>, or loose connections. We inspect each component, replacing any malfunctioning parts to restore reliable performance and prevent breakdowns.</p></li></ul></li></ol>
        </>
      ),
    },
    {
      id: "content4",
      title: "Walk-In Freezer Repair for Various Industries",
      img: "",
      description: (
        <>
          <h4><strong>Restaurant Walk-In Freezer Repair</strong></h4>
  <p>For <strong>restaurants</strong>, a dependable freezer is crucial for inventory and food safety. We provide <strong>same-day service</strong> for <strong>commercial kitchens</strong>, ensuring your products stay at the ideal <strong>temperature</strong> and your kitchen operates at peak performance.</p>
  <h4><strong>Grocery Store Freezer Repair</strong></h4>
  <p><strong>Grocery stores</strong> rely on <strong>commercial freezers</strong> to keep perishables fresh. Our team offers efficient <strong>freezer repairs</strong>, from <strong>cooler and freezer</strong> temperature adjustments to <strong>door gasket</strong> replacements, minimizing downtime and product loss.</p>
  <h4><strong>Healthcare Facility Freezer Repair</strong></h4>
  <p>Healthcare facilities require dependable <strong>cooling systems</strong> for medications and sensitive items. Our technicians are experienced with specialized <strong>refrigeration equipment</strong>, ensuring <strong>walk-in freezers</strong> in these settings run smoothly and continuously.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Walk-In Freezer Maintenance Services",
      img: "",
      description: (
        <>
          <p>At <strong>Same Day Appliance Repair</strong>, we recommend <strong>preventative maintenance</strong> to avoid costly repairs and maintain optimal freezer performance. Our technicians clean <strong>evaporator coils</strong>, inspect <strong>fan motors</strong>, and check <strong>door gaskets</strong> to help extend your freezer’s life and save you time and money in the long run.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Tips to Maintain Your Walk-In Freezer",
      img: "",
      description: (
        <>
          <ul><li><p><strong>Clean Evaporator Coils</strong>: Dust and debris affect cooling performance. Regular cleaning keeps the <strong>cooling system</strong> efficient and helps avoid high <strong>repair costs</strong>.</p></li><li><p><strong>Check Door Seals</strong>: Worn seals let warm air in, causing temperature instability. Regular checks and replacements ensure stable temperatures.</p></li><li><p><strong>Watch for Temperature Fluctuations</strong>: Sudden changes may signal <strong>compressor</strong> or <strong>thermostat</strong> issues. Prompt inspection prevents product loss.</p></li><li><p><strong>Maintain Airflow</strong>: Keep areas around the freezer clear to ensure proper ventilation, as restricted airflow stresses the <strong>compressor</strong> and <strong>fan motor</strong>, leading to costly repairs.</p></li></ul>
        </>
      ),
    },
    {
      id: "content7",
      title: "Repair or Replace?",
      img: "",
      description: (
        <>
          <p>If frequent repairs are needed, it may be more economical to replace the freezer. When <strong>repair costs</strong> exceed 50% of a new unit, or <strong>temperature control</strong> remains unreliable, investing in a new, efficient model may save on <strong>long-term costs</strong>. Our technicians provide honest recommendations based on your freezer’s condition, considering <strong>age</strong>, <strong>repair frequency</strong>, and energy efficiency. A new unit can improve reliability, cut maintenance costs, and ensure optimal temperature control.</p>
        </>
      ),
    },
    {
      id: "content8",
      title: "Walk-In Freezer Repair in Los Angeles and Surrounding Areas",
      img: "",
      description: (
        <>
          <p>Our <strong>walk-in freezer repair</strong> services cover <strong>Los Angeles</strong> and nearby regions, ensuring businesses experience minimal downtime. We serve the following areas:</p>
  <ul><li><p><strong>Los Angeles</strong></p></li><li><p><strong>Culver City</strong></p></li><li><p><strong>Pasadena</strong></p></li><li><p><strong>South Pasadena</strong></p></li><li><p><strong>Los Feliz</strong></p></li><li><p><strong>Marina Del Rey</strong></p></li><li><p><strong>Santa Monica</strong></p></li><li><p><strong>Malibu</strong></p></li><li><p><strong>Burbank</strong></p></li><li><p><strong>Alhambra</strong></p></li><li><p><strong>Glendale</strong></p></li><li><p><strong>Beverly Hills</strong></p></li><li><p><strong>Monterey Park</strong></p></li><li><p><strong>Thousand Oaks</strong></p></li><li><p><strong>West Hollywood</strong></p></li><li><p><strong>San Marino</strong></p></li><li><p><strong>Glassell Park</strong></p></li><li><p><strong>East Hollywood</strong></p></li><li><p><strong>Playa Del Rey</strong></p></li></ul>
  <p>Wherever your business operates, our <strong>same-day service</strong> ensures your <strong>walk-in freezer</strong> receives timely repair, letting you focus on what’s most important—your <strong>customers</strong>.</p>
        </>
      ),
    },
    {
      id: "content9",
      title: "Walk-In Freezer Repair FAQs",
      img: "",
      description: (
        <>
          <ol><li><p><strong>What are the signs my walk-in freezer needs repair?</strong><br/>If your freezer experiences <strong>temperature fluctuations</strong>, frost buildup, strange noises, <strong>water leakage</strong>, or a non-sealing door, these are common signs that repair is needed. Our technicians often find these issues stem from <strong>evaporator coil</strong> or <strong>condensing unit</strong> problems, or worn-out <strong>door gaskets</strong>.</p></li><li><p><strong>How can I keep my walk-in freezer running efficiently?</strong><br/>Regular <strong>maintenance</strong> is key. Cleaning <strong>evaporator coils</strong>, checking <strong>door gaskets</strong>, and monitoring temperature can extend your freezer’s life and save on <strong>repair and energy costs</strong>.</p></li><li><p><strong>Why is my walk-in freezer freezing up?</strong><br/>Frost buildup is usually due to <strong>defrosting system</strong> malfunctions, worn <strong>door seals</strong>, or <strong>evaporator coils</strong> needing attention. We inspect and repair these to prevent temperature fluctuations.</p></li><li><p><strong>How often should my walk-in freezer be serviced?</strong><br/>We recommend <strong>maintenance</strong> every 6 months. Regular checks on the <strong>condensing unit</strong>, <strong>evaporator coils</strong>, and <strong>door gaskets</strong> keep your freezer running efficiently.</p></li><li><p><strong>My walk-in freezer isn’t holding temperature—what’s causing this?</strong></p></li></ol>
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
