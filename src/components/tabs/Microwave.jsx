import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

 const items = [
    {
      id: "content1",
      title: "Why Choose Us",
  heading: "Why Choose Same Day Appliance Repair for Microwave Repairs?",
      img: "/microwave-repair/microwave-repair-2.webp",
      description: (
        <> <p>When it comes to <strong>microwave repair</strong>, our team brings unmatched expertise, the right tools, and access to high-quality <strong>replacement parts</strong> to address a wide range of issues. Here's why <strong>Los Angeles</strong> residents trust us for their <strong>appliance repair</strong> needs:</p><h3><strong>Same-Day Service</strong></h3><p>We understand how disruptive a <strong>broken microwave</strong> can be. Our <strong>same-day service</strong> ensures your appliance is repaired quickly so you can get back to your routine without delays.</p><h3><strong>Qualified Technicians</strong></h3><p>Our <strong>qualified technicians</strong> are highly trained to repair <strong>microwave ovens</strong>, addressing issues such as faulty door switches, defective <strong>capacitors</strong>, and broken <strong>stirrer belts</strong> with precision and care.</p><h3><strong>Top-Quality Parts</strong></h3><p>We only use original <strong>replacement parts</strong>, including <strong>door switches</strong>, <strong>diodes</strong>, and <strong>motors</strong>, to ensure long-lasting repairs. Whether it's fixing a <strong>turning mechanism</strong> or replacing a <strong>high-voltage diode</strong>, we guarantee reliable results.</p><h3><strong>Transparent Pricing</strong></h3><p>With upfront quotes for labor and parts, you'll always know the <strong>cost</strong> of the repair before any work begins. We prioritize honesty and clarity in every job.</p></>
      ),
    },
  
    {
      id: "content2",
      title: "Types of Microwaves We Fix",
  heading: "Types of Microwaves We Fix - Our Specialized Approach",
      img: "/microwave-repair/microwave-repair-3.webp",
      description: (
        <><p>Our technicians are experts in repairing <strong>all types of microwaves</strong>. Here's how we approach repairs for different models:</p><h3><strong>Countertop Microwave Repair</strong></h3><p>Countertop microwaves are known for their <strong>convenience</strong> and <strong>flexibility</strong>, but they can encounter common problems such as:</p><ul><p><strong>Faulty control panels</strong></p><p><strong>Broken door latches</strong></p><p><strong>Damaged magnetrons or diodes</strong></p></ul><p>Our service technicians thoroughly inspect internal components like the <strong>magnetron</strong>, <strong>diode</strong>, and <strong>control board</strong> to identify the issue. We repair or replace <strong>faulty parts</strong> to restore heating functionality and ensure your microwave works <strong>properly</strong>.</p><h3><strong>Over-the-Range Microwave Repair</strong></h3><p>Over-the-range microwaves combine <strong>cooking convenience</strong> and <strong>ventilation</strong> but may experience issues like:</p><ul><p><strong>Non-working vent fan</strong></p><p><strong>Lighting problems</strong></p><p><strong>Stuck or broken turntable</strong></p></ul><p>We repair <strong>fan motors</strong>, replace faulty <strong>light bulbs</strong> or wiring, and fix <strong>turntable motors</strong>, ensuring the microwave and ventilation system function <strong>seamlessly</strong>.</p><h3><strong>Built-In Microwave Repair</strong></h3><p>Built-in microwaves offer a <strong>sleek, modern design</strong> but can suffer from:</p><ul><p><strong>Temperature fluctuations</strong></p><p><strong>Control board malfunctions</strong></p><p><strong>Defective sensors</strong></p></ul><p>Our technicians specialize in troubleshooting <strong>built-in units</strong>, recalibrating <strong>control boards</strong>, replacing <strong>faulty sensors</strong>, and restoring consistent heating without disturbing your kitchen's <strong>design aesthetic</strong>.</p><h3><strong>Drawer Microwave Repair</strong></h3><p>Drawer microwaves are designed for <strong>under-counter installation</strong> but may encounter:</p><ul><p><strong>Sticking or malfunctioning drawer mechanisms</strong></p><p><strong>Heating element failures</strong></p><p><strong>Sensor or control panel issues</strong></p></ul><p>We address issues with <strong>drawer movement</strong>, replace damaged <strong>heating components</strong>, and repair <strong>sensor</strong> or <strong>control panel </strong>problems to bring your drawer microwave back to <strong>optimal performance</strong>.</p><h3><strong>Commercial Microwave Repair</strong></h3><p>Commercial microwaves are essential in <strong>high-demand environments</strong> like restaurants and cafeterias, but heavy usage can cause:</p><ul><p><strong>Worn-out heating elements</strong></p><p><strong>Faulty door switches</strong></p><p><strong>Control panel failures</strong></p></ul><p>Our technicians excel in repairing <strong>commercial units</strong> by fixing <strong>door latches</strong>, recalibrating <strong>thermostats</strong>, and replacing worn <strong>parts</strong> to keep your microwave operating efficiently in busy kitchens.</p></>
      ),
    },
  
    {
      id: "content3",
      title: "Common Microwave Problems",
  heading: "Common Microwave Problems and How We Fix Them",
      img: "/microwave-repair/microwave-repair-4.webp",
      description: (
        <><p>Our <strong>expert advice</strong> and extensive experience ensure that we can diagnose and fix a wide range of microwave issues. Here's how we address the most common problems:</p><h3><strong>Microwave Not Heating</strong></h3><ul><p><strong>How We Fix It:</strong> A <strong>broken magnetron</strong>, <strong>faulty door switch</strong>, or defective <strong>capacitor</strong> can prevent your microwave from <strong>heating</strong> food. We'll test each component, replace any damaged parts, and restore full heating functionality.</p></ul><h3><strong>Turntable Not Rotating</strong></h3><ul><p><strong>How We Fix It:</strong> A worn-out <strong>turning mechanism</strong> or <strong>motor</strong> can cause your microwave's <strong>turntable</strong> to stop rotating. Our technicians inspect the <strong>motor</strong>, replace defective parts, and ensure smooth rotation for even cooking.</p></ul><h3><strong>Unresponsive Control Panel</strong></h3><ul><p><strong>How We Fix It:</strong> A malfunctioning <strong>control panel</strong> or <strong>electronics</strong> can disrupt your microwave's operation. We'll troubleshoot the issue, repair the <strong>control panel</strong>, or replace it if necessary to restore functionality.</p></ul><h3><strong>Faulty Door Switches</strong></h3><ul><p><strong>How We Fix It:</strong> If the <strong>door</strong> doesn't latch properly or the <strong>microwave</strong> won't start, the problem may lie with a <strong>broken door switch</strong>. We replace the <strong>door switch</strong> with a <strong>new switch</strong> and test the unit to ensure it operates safely.</p></ul><h3><strong>Sparking or Burning Smell</strong></h3><ul><p><strong>How We Fix It:</strong> <strong>Insect infestation</strong>, residue buildup, or a damaged <strong>waveguide cover</strong> can cause sparks. We clean the interior, inspect the <strong>waveguide cover</strong>, and replace any damaged parts to eliminate the issue.</p></ul></>
      ),
    },
  
    {
      id: "content4",
      title: "Signs Your Microwave Needs Repair",
  heading: "Signs Your Microwave Needs Repair – From Our Technicians",
      img: "/microwave-repair/microwave-repair-6.webp",
      description: (
        <><p>Our <strong>service technicians</strong> often encounter warning signs that indicate a microwave may need professional repair. Look out for these common issues:</p><ul><p><strong>Unusual Noises:</strong> Buzzing, rattling, or humming sounds often signal a problem with the <strong>transformer</strong>, <strong>motor</strong>, or <strong>capacitors</strong>.</p><p><strong>Inconsistent Heating:</strong> If your food isn't evenly <strong>heated</strong>, there may be an issue with the <strong>magnetron</strong> or <strong>stirrer belt</strong>.</p><p><strong>Sparking Inside the Unit:</strong> Sparks or flashes of light can result from metal objects, <strong>foil</strong>, or damaged internal components like the <strong>diode</strong> or <strong>capacitor</strong>.</p><p><strong>Control Panel Malfunctions:</strong> Erratic or unresponsive controls often point to faulty <strong>electronics</strong> that need repair or replacement.</p></ul><p>If you notice these signs, don't <strong>forget</strong> to unplug the appliance and call us for immediate assistance. Our team ensures that your microwave is <strong>tested</strong>, <strong>repaired</strong>, and restored to safe operation.</p></>
      ),
    },
  
    {
      id: "content5",
      title: "Full-Service Microwave Repair",
  heading: "Full-Service Microwave Repair for Every Home",
      img: "/microwave-repair/microwave-repair-1.webp",
      description: (
        <><p>Our comprehensive approach to <strong>microwave repair services</strong> ensures that all issues are resolved efficiently and effectively. Here's what we offer:</p><h3><strong>Built-In Microwave Repair</strong></h3><p>We specialize in repairing <strong>built-in microwaves</strong>, addressing issues like <strong>defective door switches</strong>, broken <strong>turning mechanisms</strong>, and malfunctioning <strong>control panels</strong> while maintaining the aesthetic of your kitchen.</p><h3><strong>Countertop Microwave Repair</strong></h3><p>Countertop microwaves often experience problems such as heating failures or sparking. Our technicians repair and replace defective <strong>components</strong> to restore performance.</p><h3><strong>High-End Microwave Repair</strong></h3><p>Luxury microwave brands with advanced features require specialized care. We handle repairs for premium models, including fixing <strong>light bulbs</strong>, testing <strong>capacitors</strong>, and addressing sensor malfunctions.</p></>
      ),
    },
  
    {
      id: "content6",
      title: "Microwaves Maintenance Services",
  heading: "Routine Microwaves Maintenance Services – What Our Technicians Do",
      img: "",
      description: (
        <> <p>Routine maintenance helps extend the lifespan of your <strong>microwave</strong>. Our services include:</p><ul><p><strong>Interior Cleaning:</strong> Removes residue and prevents sparking.</p><p><strong>Door Seal Inspection:</strong> Ensures a tight seal to maintain efficiency.</p><p><strong>Component Testing:</strong> Verifies the functionality of the <strong>magnetron</strong>, <strong>diodes</strong>, and <strong>capacitors</strong>.</p><p><strong>Turntable Alignment:</strong> Ensures smooth operation for even cooking.</p></ul> </>
      ),
    },
  
    {
      id: "content7",
      title: "Repair or Replacement",
  heading: "Deciding Between Microwave Repair and Replacement",
      img: "",
      description: (
        <><p>If your microwave has recurring issues or the <strong>repair cost</strong> exceeds 50% of the price of a new <strong>unit</strong>, replacement may be the best option. We'll help you decide based on:</p><ul><p><strong>Age of the Unit:</strong> Older models may not be energy-efficient.</p><p><strong>Repair Frequency:</strong> Frequent breakdowns suggest replacement.</p><p><strong>Energy Efficiency:</strong> Upgrading can lower utility bills.</p></ul></>
      ),
    },
  
    {
      id: "content8",
      title: "Contact Us",
  heading: "Contact Us for Microwave Repair Services in Los Angeles",
      img: "",
      description: (
        <> <p>If you're dealing with a <strong>broken microwave</strong>, let <strong>Same Day Appliance Repair</strong> provide the expert solution you need. Contact us today to schedule your <strong>microwave repair</strong> service and get your appliance back to <strong>working properly</strong>.</p> </>
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
             <h2>{item.heading}</h2>
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
