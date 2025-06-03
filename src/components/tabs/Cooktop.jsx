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
  heading: "Why Choose Same Day Appliance Repair for Cooktop Repair Services?",
      img: "/cooktop-repair/Best-cooktop-repair-service.webp",
      description: (
        <>
          <p><p><strong>Same-Day Service</strong>: We understand that a working <strong>cooktop</strong> is critical for your daily routine. Our <strong>same-day service</strong> minimizes downtime, ensuring you can resume cooking quickly.</p></p>
          <p><p><strong>Certified Technicians</strong>: Our <strong>factory-trained service technicians</strong> have extensive experience repairing <strong>gas cooktops</strong>, <strong>electric cooktops</strong>, and <strong>induction cooktops</strong> across all major brands and models.</p></p>
          <p><p><strong>Top-Quality Parts</strong>: We use only original, high-grade <strong>replacement parts</strong> to ensure long-term reliability and performance. Whether it's a faulty <strong>coil element</strong> or a malfunctioning <strong>control switch</strong>, we provide parts that meet the highest standards.</p></p>
          <p><p><strong>Transparent Pricing</strong>: No hidden costs. We provide upfront quotes for labor and aparts so you know exactly what the <strong>repair cost</strong> will be before we begin.</p></p>
          <p><p><strong>Flexible Scheduling</strong>: We offer <strong>flexible scheduling</strong>, making it easy to fit a <strong>service call</strong> into your busy lifestyle.</p></p>
        </>
      ),
    },
  
    {
      id: "content2",
      title: "Cooktop Types We Repair",
      heading: "Common Cooktop Types We Repair - Our Specialized Approach",
      img: "/cooktop-repair/cooktop-repair-service-los-angeles.webp",
      description: (
        <>
          <p>Our technicians have expertise in a variety of <strong>cooktop models</strong>. Here's how we approach different types of <strong>cooktop repairs</strong>:</p><h3><strong>Gas Cooktop Repair</strong></h3><p><strong>Gas cooktops</strong> are favored for their precise temperature control and cooking efficiency but can encounter issues like:</p><ul><li><p><strong>Clogged burner openings</strong></p></li><li><p><strong>Igniter malfunctions</strong></p></li><li><p><strong>Gas leaks</strong></p></li></ul><p>Your service technician thoroughly inspect <strong>burner caps</strong>, clean out <strong>burner openings</strong>, and ensure safe and efficient operation by testing <strong>control switches</strong> and repairing faulty igniters. We also verify proper gas line connections to prevent leaks and ensure safety.</p><h3><strong>Electric Cooktop Repair</strong></h3><p><strong>Electric cooktops</strong> are reliable and user-friendly but can face problems like:</p><ul><li><p><strong>Damaged electric coils</strong></p></li><li><p><strong>Control panel malfunctions</strong></p></li><li><p><strong>Temperature inconsistencies</strong></p></li></ul><p>We diagnose and repair faulty <strong>coil elements</strong>, recalibrate <strong>control switches</strong>, and resolve issues with <strong>indicator lights</strong> to restore optimal functionality.</p><h3><strong>Induction Cooktop Repair</strong></h3><p><strong>Induction cooktops</strong> are a modern choice for energy-efficient cooking but may experience:</p><ul><li><p><strong>Heating irregularities</strong></p></li><li><p><strong>Sensor failures</strong></p></li><li><p><strong>Control board issues</strong></p></li></ul><p>Our technicians specialize in troubleshooting <strong>induction cooktops</strong>, ensuring precise temperature control and efficient performance by addressing <strong>control board</strong> and sensor issues.</p>
        </>
      ),
    },
  
    {
      id: "content3",
      title: "Cooktop Problems We Fix",
      heading: "Common Cooktop Problems We Fix",
      img: "/cooktop-repair/cooktop-repair-service-near-me.webp",
      description: (
        <> <p>With years of experience, our team resolves a wide range of <strong>cooktop issues</strong>. Below are some of the most common problems we address:</p><ul><li><p><strong>Burner Not Heating Properly</strong>: Uneven or inadequate heating often stems from damaged <strong>electric coils</strong>, clogged gas lines, or thermostat malfunctions. We identify and fix the root cause to ensure consistent performance.</p></li><li><p><strong>Igniter Fails to Spark</strong>: A faulty igniter can prevent <strong>gas cooktops</strong> from lighting. We replace defective igniters, clean <strong>burner openings</strong>, and inspect the gas flow for safe operation.</p></li><li><p><strong>Control Panel Malfunction</strong>: Unresponsive or erratic controls disrupt cooking routines. We repair or replace defective <strong>control boards</strong> and <strong>switches</strong>, restoring full functionality.</p></li><li><p><strong>Indicator Lights Not Working</strong>: Faulty <strong>indicator lights</strong> on <strong>electric cooktops</strong> may signal underlying electrical problems. We fix these issues to ensure proper functionality.</p></li><li><p><strong>Cracked or Damaged Cooktop Surface</strong>: Cracks on the <strong>cooktop surface</strong> can compromise safety and aesthetics. We assess the damage and recommend replacement if necessary.</p></li></ul>      </>
      ),
    },
  
    {
      id: "content4",
      title: "Signs Your Cooktop Needs Repair",
  heading: "Signs Your Cooktop Needs Repair",
      img: "/cooktop-repair/cooktop-repair-today.webp",
      description: (
        <><p>If you notice any of the following signs, it's time to call in the experts at <strong>Same Day Appliance Repair</strong>:</p><ul><li><p><strong>Inconsistent Heating</strong>: Uneven cooking is a telltale sign of a problem with <strong>burners</strong>, <strong>heating elements</strong>, or thermostats. Don't wait for further complications—reach out for professional troubleshooting.</p></li><li><p><strong>Unusual Noises or Smells</strong>: Clicking sounds, gas odors, or burning smells may indicate gas leaks or electrical malfunctions. Contact us immediately for a <strong>service call</strong> to ensure safety.</p></li><li><p><strong>Failure to Turn On</strong>: When your <strong>cooktop</strong> doesn't start, the issue may lie with the <strong>power cord</strong>, <strong>control panel</strong>, or electrical connections. We'll diagnose the problem and restore functionality.</p></li><li><p><strong>Unresponsive Burners</strong>: Burners that fail to ignite or heat up are often caused by clogged burners, faulty igniters, or damaged gas connections. Our technicians will fix the problem efficiently to get you back to cooking.</p></li></ul>  </>
      ),
    },
  
    {
      id: "content5",
      title: "Full-Service Cooktop Repair",
  heading: "Full-Service Cooktop Repair Services – Tailored to Your Needs",
      img: "/cooktop-repair/same-day-cooktop-repair.webp",
      description: (
        <>
        <h3><strong>Kitchen Cooktop Repair</strong></h3><p>Your <strong>cooktop</strong> is at the heart of your kitchen. From minor issues like <strong>damaged electric coils</strong> to major repairs such as replacing a <strong>control switch</strong>, we ensure your <strong>cooktop</strong> is restored to full functionality without delay.</p><h3><strong>High-End Cooktop Repair</strong></h3><p>Luxury brands like <strong>Wolf</strong>, <strong>Thermador</strong>, and <strong>Viking</strong> require specialized care. Our team uses original parts and advanced techniques to handle issues like <strong>temperature calibration</strong>, <strong>control board malfunctions</strong>, and <strong>igniter replacement</strong>, ensuring your premium <strong>cooktop</strong> maintains its performance and elegance.</p><h3><strong>Built-In Cooktop Repair</strong></h3><p>Built-in <strong>cooktops</strong> blend seamlessly into modern kitchens. Our technicians focus on efficient, non-disruptive repairs, whether it's fixing cracked <strong>cooktop surfaces</strong>, replacing <strong>burner caps</strong>, or addressing wiring issues, all while preserving your kitchen's design.</p>
          
        </>
      ),
    },
  
    {
      id: "content6",
      title: "Cooktop Maintenance Services",
      heading: "Routine Cooktop Maintenance Services – What Our Technicians Do",
      description: (
        <><p>Routine maintenance is essential for keeping your <strong>cooktop</strong> in top condition, ensuring it operates efficiently and safely for years to come. When you schedule maintenance with us, here's what our technicians will do:</p><h3><strong>Burner and Element Cleaning</strong></h3><p>Our technicians meticulously clean the <strong>burners</strong> and <strong>heating elements</strong> to remove grease, debris, and buildup that can hinder performance. By cleaning these components, we improve heat distribution, prevent clogs, and enhance overall cooking efficiency. This step ensures your <strong>cooktop</strong> delivers consistent, reliable heating every time you cook.</p><h3><strong>Gas Line Inspection</strong></h3><p>For <strong>gas cooktops</strong>, our technicians conduct a thorough inspection of the <strong>gas lines</strong> to ensure there are no leaks or blockages. We verify the connections and test the gas flow to confirm it is safe and efficient. This step is crucial for maintaining safety and preventing potential hazards in your kitchen.</p><h3><strong>Electrical Component Testing</strong></h3><p>Our team carefully examines the electrical system of your <strong>electric</strong> or <strong>induction cooktop</strong>, including:</p><ul><li><p><strong>Indicator lights</strong>: Ensuring they work correctly to signal burner activity.</p></li><li><p><strong>Control switches</strong>: Testing for responsiveness and accurate temperature control.</p></li><li><p><strong>Coil elements</strong>: Checking for wear, damage, or irregular heating patterns.</p></li></ul><p>By inspecting and testing these components, we ensure your <strong>cooktop</strong> operates smoothly and efficiently.</p>  </>
      ),
    },
  
    {
      id: "content7",
      title: "Repair or Replace",
      heading: "Deciding Between Cooktop Repair and Replacement",
      description: (
        <>
          
          <p>If your <strong>cooktop</strong> is frequently malfunctioning, it's important to decide whether <strong>cooktop repair</strong> or replacement is the better option. When <strong>repair costs</strong> reach 50% of the price of a new unit, replacing your <strong>electric cooktop</strong>, <strong>gas cooktop</strong>, or <strong>induction cooktop</strong> may be more cost-effective. Our <strong>factory-trained technicians</strong> will assess your appliance, providing expert advice to ensure you get the most value for your investment.</p><h3><strong>When to Choose Cooktop Repair</strong></h3><p>Repairing your <strong>cooktop</strong> is the best choice when:</p><ul><li><p>The <strong>cooktop</strong> is relatively new and still in good working condition aside from minor issues.</p></li><li><p>Problems such as <strong>damaged electric coils</strong>, <strong>igniter issues</strong>, or <strong>control switch malfunctions</strong> are identified and can be fixed affordably.</p></li><li><p>The cost of repair is significantly less than replacing the appliance.</p></li></ul><p>By opting for <strong>cooktop repair services</strong>, you can extend the life of your <strong>kitchen appliance</strong> and maintain seamless functionality.</p><h3><strong>When Replacement is More Cost-Effective</strong></h3><p>Replacing your <strong>cooktop</strong> may be necessary if:</p><ul><li><p><strong>Repair costs</strong> approach or exceed 50% of the price of a new <strong>cooktop</strong>.</p></li><li><p>Your <strong>gas burners</strong>, <strong>coil elements</strong>, or <strong>burner caps</strong> frequently fail to work.</p></li><li><p>The unit is outdated and lacks modern features like <strong>energy efficiency</strong>, <strong>precise temperature control</strong>, or <strong>indicator lights</strong>.</p></li></ul><p>A new <strong>cooktop installation</strong> can enhance your <strong>cooking performance</strong>, reduce energy consumption, and add convenience with advanced technology.</p><h3><strong>How Our Technicians Help You Decide</strong></h3><p>When you call us for service, our <strong>certified technicians</strong> will:</p><ol><li><p>Conduct a comprehensive inspection of your <strong>cooktop</strong>, including <strong>burner openings</strong>, <strong>control panels</strong>, and <strong>power cords</strong>.</p></li><li><p>Provide a transparent, upfront estimate for <strong>cooktop repair costs</strong>, including parts and labor.</p></li><li><p>Discuss your <strong>cooktop brand</strong>, age, and condition to determine if a replacement is warranted.</p></li><li><p>Offer unbiased recommendations based on <strong>best practices</strong> to ensure your kitchen appliances serve you efficiently.</p></li></ol><h3><strong>Contact Us for Cooktop Repair Services</strong></h3><p>Whether you have an issue with <strong>electric cooktops</strong>, <strong>gas cooktops</strong>, or <strong>induction cooktops</strong>, our <strong>cooktop repair experts</strong>are here to help. We specialize in troubleshooting common problems, such as <strong>heating irregularities</strong>, <strong>damaged burner caps</strong>, and <strong>unresponsive controls</strong>, to restore your appliance's performance.</p><p>Don't let a faulty <strong>stovetop</strong> disrupt your kitchen routine. Contact <strong>Same Day Appliance Repair</strong> today for professional advice and fast, reliable service. Let us handle your <strong>cooktop repair</strong> or replacement to keep your kitchen running smoothly.</p>     </>
      ),
    },
  
    {
      id: "content8",
      title: "Contact Us",
      heading: "Contact Us for Cooktop Repair Services in Los Angeles",
      description: (
        <><p>Don't let a malfunctioning <strong>cooktop</strong> disrupt your kitchen routine. Call <strong>Same Day Appliance Repair</strong> today for fast, professional service. We proudly serve <strong>Los Angeles</strong> and nearby areas, offering <strong>same-day cooktop repair</strong> for all models and brands.</p>

          
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
                {item.heading}
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
