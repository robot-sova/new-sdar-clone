import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
       title: "Why Choose Us",
  heading: "Why Choose Same Day Appliance Repair for Stove Repair Services?",
      img: "/stove-repair/stove-repair-1.webp",
      description: (
        <><p>When you choose <strong>Same Day Appliance Repair</strong>, you're selecting expert technicians who can diagnose stove issues, find fast solutions, and provide ongoing maintenance advice to extend the life of your appliance. We're committed to finding and fixing any stove issue, from electric stove elements that won't heat to gas stove igniters that aren't sparking.</p><ul> <p><strong>Same-Day Appointments</strong>: We understand how important a functioning stove is in your daily life. That's why we offer same-day and flexible appointment times to work around your schedule.</p>  <p><strong>Certified Technicians</strong>: Our team is highly trained and certified, with hands-on experience across all major stove brands and models. You can trust that we'll diagnose the issue accurately and recommend the most effective solution.</p>  <p><strong>Use of Original Parts</strong>: We only use original parts from trusted suppliers, backed by warranties that start at three months. Quality parts ensure longevity and reliable performance, helping you avoid repeated repairs.</p>  <p><strong>Transparent Pricing</strong>: Before starting any repair, we provide a detailed breakdown of costs. With our transparent pricing, you'll always know what to expect—no hidden fees.</p> </ul> </>
      ),
    },
    {
      id: "content2",
       title: "Types of Stoves We Repair",
  heading: "Types of Stoves We Repair and Our Specialized Approach",
      img: "/stove-repair/stove-repair-2.webp",
      description: (
        <>
           <p>Our technicians have extensive experience with various <strong>stove types</strong>, allowing us to handle any issue that may arise. Here's how we approach each <strong>stove repair</strong>:</p><p><strong>Electric Stove Repair</strong> <br />Electric stoves are reliable, but common issues can include faulty elements, broken thermostats, or electrical connection problems. Our <strong>factory-trained</strong> technicians thoroughly inspect all electrical components and heating elements to ensure your stove operates safely and efficiently.</p><p><strong>Gas Stove Repair</strong> <br />Gas stoves are popular for their efficiency and precise temperature control, but issues like gas valve malfunctions, igniter failures, and burner problems can arise. We inspect the gas lines, verify connections, and ensure your gas stove works safely. We only use original parts to ensure reliability and warranty-backed repairs every time.</p><p><strong>Induction Stove Repair</strong> <br />Induction stoves are energy-efficient but may face issues like heating element malfunctions or control board problems. Our technicians are skilled in diagnosing and fixing these stove issues to restore your stove's performance.</p> </>
      ),
    },
    {
      id: "content3",
       title: "Common Stove Problems We Fix",
  heading: "Common Stove Problems We Fix",
      img: "/stove-repair/stove-repair-3.webp",
      description: (
        <> <p>With extensive experience, our technicians know how to diagnose and repair a wide range of stove problems quickly and effectively. Here are some of the most common stove issues we see and fix:</p><ul> <p><strong>Stove Not Heating Properly</strong>: If your stove isn't heating up as it should, we inspect the heating element, thermostat, and temperature sensor. A repair may involve replacing faulty parts to restore full heating capability.</p>  <p><strong>Burner Not Lighting or Sparking</strong>: For gas stoves, a common issue is the igniter not sparking or the burner not lighting. We check gas lines, igniters, and connections, making adjustments or replacements as needed.</p>  <p><strong>Stove Making Unusual Noises</strong>: If your stove is making unusual noises, this may indicate an issue with the igniter, control panel, or gas line. Our technicians carefully inspect each component to identify and fix the issue.</p>  <p><strong>Stove Overheating</strong>: Overheating can pose a safety risk. We inspect the thermostat and control board to prevent further complications and ensure safe cooking.</p>  <p><strong>Control Panel Issues</strong>: A malfunctioning control panel can disrupt cooking settings. Our technicians diagnose the problem and repair or replace components to restore full functionality.</p> </ul> </>
      ),
    },
    {
      id: "content4",
       title: "Signs Your Stove Needs Repair",
  heading: "Signs Your Stove Needs Repair Services – When To Call Us",
      img: "/stove-repair/stove-repair-6.webp",
      description: (
        <><p>Our <strong>factory-trained</strong> technicians, with years of hands-on experience, know when your stove may need a professional repair. Here's what to look for:</p><p><strong>Inconsistent Heating</strong> <br />If your stove heats unevenly or doesn't reach the desired temperature, it's often a sign of a heating element or thermostat issue. Scheduling a <strong>stove repair</strong> can help prevent further problems.</p><p><strong>Unusual Smells</strong> <br />If you detect unusual smells when using your stove, it could be due to a gas leak, electrical issue, or residue buildup. Addressing these early can prevent damage and ensure safety. <strong>Call us</strong> to assess and fix any unusual smells.</p><p><strong>Failure to Light or Heat Up</strong> <br />If your stove won't ignite or heat up, it may be due to a problem with the igniter, control board, or gas valve. Our team can <strong>diagnose</strong> and fix this to get your stove running smoothly.</p><p><strong>Repeated Shutdowns</strong> <br />Stoves that shut off frequently may have an underlying issue with the thermostat or electrical components. This can be a safety concern, so it's best to schedule a professional repair.</p></>
      ),
    },
    {
      id: "content5",
       title: "Full Service Oven Repair",
  heading: "Full Service Oven Repair for Every Home",
      img: null,
      description: (
        <><h3><strong>Kitchen Oven Repair</strong></h3><p>Your <strong>kitchen oven</strong> is the hub of your cooking space, making cooking easy and enjoyable. Whether you have a <strong>gas, electric, or convection oven</strong>, we have <strong>skilled technicians</strong> to fix any issue, from <strong>temperature fluctuations</strong> to <strong>igniter failure</strong>. With our <strong>same-day service</strong>, we get your oven back up and running quickly so you can enjoy <strong>uninterrupted cooking</strong> and maintain a well-functioning kitchen.</p><h3><strong>Oven Repair for Large Families</strong></h3><p>Ovens in <strong>larger homes</strong> are used frequently and need to be <strong>extra reliable</strong>. Our technicians specialize in diagnosing and repairing issues specific to <strong>high-volume ovens</strong>, addressing problems like <strong>burner malfunction</strong> and <strong>uneven heating</strong> so your oven meets your family's cooking needs with ease.</p><h3><strong>High-End and Built-In Oven Repair</strong></h3><p><strong>Luxury and built-in ovens</strong> from brands like <strong>Wolf, Thermador, and Viking</strong> are designed with advanced technology and integrate seamlessly into your kitchen. These models, with their <strong>high-end finishes</strong>, <strong>precision temperature controls</strong>, and <strong>custom cooking settings</strong>, require specialized expertise. Our technicians are trained to handle issues such as <strong>temperature calibration</strong>, <strong>control panel repairs</strong>, and <strong>igniter replacement</strong> using only <strong>high-quality parts</strong> and techniques tailored for luxury models. We ensure your oven runs efficiently and maintains its stylish appearance.</p><h3><strong>Specialty Oven and Convection Oven Repair</strong></h3><p><strong>Specialty ovens</strong>, including <strong>convection ovens</strong> and <strong>double ovens</strong>, require precise <strong>temperature control</strong> for optimal cooking results. We offer specialized repair services for these models, fixing issues like <strong>fan malfunction</strong>, <strong>temperature control adjustment</strong>, and <strong>door seal repair</strong>. Our technicians get your specialty ovens running perfectly to support great cooking results.</p><p>With <strong>repair solutions</strong> for all types of ovens, including <strong>high-end and specialty models</strong>, we keep your <strong>appliances running smoothly</strong> for stress-free cooking. <strong>Call us today</strong> to schedule a fast <strong>oven repair service</strong> and keep your kitchen in top shape.</p></>
      ),
    },
    {
      id: "content6",
       title: "Stove Maintenance Services",
  heading: "Professional Stove Maintenance Services - Why You Need It",
      img: null,
      description: (
        <> <p>Prevent common stove issues and extend your appliance's life with regular maintenance. Our <strong>factory-trained </strong>technicians recommend:</p><ul> <p><strong>Burner and Element Cleaning</strong>: Keeping burners and elements clean improves heat distribution and efficiency. Regular maintenance helps avoid clogs and performance issues.</p>  <p><strong>Gas Line Inspection</strong>: For gas stoves, we check connections and ensure there are no leaks, keeping your kitchen safe.</p>  <p><strong>Electrical Component Check</strong>: For electric stoves, we inspect thermostats, control boards, and heating elements for consistent and safe operation.</p> </ul><p>Don't wait for issues to arise—<strong>call us today</strong> to schedule routine maintenance and keep your stove performing like new.</p>
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
