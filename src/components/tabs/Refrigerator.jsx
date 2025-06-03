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
  heading: "Why Choose Same Day Appliance Repair for Refrigerator Repair?",
      img: "/refrigerator-repair/refrigerator-repair-1.webp",
      description: (
        <><p>When you choose <strong>Same Day Appliance Repair</strong>, you're selecting a team of experts who use the right tools, <strong>top-quality parts</strong>, and years of experience to handle any <strong>refrigerator repair</strong> issue. Here's why <strong>Los Angeles residents</strong> choose us:</p><ul><p><strong>Same-Day Service:</strong> We know that a working refrigerator is vital to your home. Our <strong>same-day service</strong> minimizes downtime, ensuring your food stays fresh.</p><p><strong>Certified Technicians:</strong> Our team is highly trained, <strong>certified</strong>, and experienced in working with all major <strong>refrigerator brands and models</strong>. From minor adjustments to complex repairs, we've got you covered.</p><p><strong>Top-Quality Parts:</strong> We only use <strong>original, high-grade parts</strong> from trusted suppliers. This guarantees long-term performance and reduces the chance of future breakdowns.</p><p><strong>Transparent Pricing:</strong> With us, there are no surprises. We provide clear quotes for <strong>labor and parts</strong> upfront, so you know the exact cost before we begin.</p></ul> </>
      ),
    },
  
    {
      id: "content2",
      title: "Common Refrigerator Types We Repair",
  heading: "Common Refrigerator Types We Repair and Our Approach",
      img: "/images/commercial-refrigerator-repair-los-angeles.webp",
      description: (
        <><p><strong>Top-Freezer Refrigerator Repair: Ensuring Reliable Cooling for Everyday Use</strong></p><p>Top-freezer refrigerators are popular for their practicality and spacious storage. These units can experience issues like <strong>temperature inconsistencies</strong>, <strong>ice buildup</strong>, or <strong>leaking</strong> due to clogged defrost drains, door gasket problems, or compressor malfunctions. Such problems can lead to uneven cooling, spoiled food, and wasted energy. Our technicians thoroughly inspect the <strong>compressor, evaporator coils,</strong> and <strong>door gaskets</strong> to ensure your refrigerator maintains the correct temperature. We handle issues like <strong>thermostat adjustments, gasket replacements,</strong> and <strong>compressor repairs</strong> to keep your refrigerator operating efficiently and reliably.</p><p><strong>Bottom-Freezer Refrigerator Repair: Convenient and Efficient Cooling Solutions</strong></p><p>Bottom-freezer refrigerators make it easy to access fresh food while keeping frozen items below. Common issues include <strong>frost build-up, fan motor malfunctions,</strong> and <strong>blocked vents</strong>, which can lead to inadequate cooling and reduced efficiency. If your bottom-freezer unit isn't keeping food fresh or has excessive frost, our technicians will diagnose the problem and handle repairs promptly. We address everything from <strong>evaporator fan repairs</strong> to <strong>defrost system maintenance</strong> to keep your refrigerator running smoothly.</p><p><strong>French Door Refrigerator Repair: Maintaining Optimal Cooling for Premium Models</strong></p><p>French door refrigerators are known for their style and spacious interior but can be prone to specific issues like <strong>inconsistent temperatures</strong>, <strong>ice maker malfunctions</strong>, and <strong>door seal problems</strong>. These issues can compromise food quality and lead to high energy bills. Our team is skilled in addressing common French door refrigerator problems, inspecting and servicing <strong>compressors, door seals,</strong> and <strong>thermostats</strong> to ensure consistent cooling. Whether it's fixing an ice maker or improving air circulation, we restore functionality and efficiency to these premium models.</p><p><strong>Side-by-Side Refrigerator Repair: Balanced Cooling and Freezing Solutions</strong></p><p>Side-by-side refrigerators offer a balance between fresh and frozen storage but can suffer from <strong>temperature fluctuations, faulty water dispensers,</strong> or <strong>uneven cooling</strong> due to blocked air vents or malfunctioning fans. Our technicians check key components such as the <strong>fan motor, compressor,</strong> and <strong>water line</strong> to quickly diagnose and repair issues. From replacing a faulty compressor to fixing water dispenser issues, we ensure your side-by-side refrigerator maintains even cooling across both sections.</p> </>
      ),
    },
  
    {
      id: "content3",
      title: "Common Refrigerator Problems",
      heading: "Common Refrigerator Problems and Our Repair Approach",
      img: "/refrigerator-repair/refrigerator-repair-3.webp",
      description: (
        <><p><strong>Refrigerator Not Cooling Properly</strong><strong>How We Fix It:</strong> When a <strong>refrigerator isn't cooling</strong>, we inspect components like the <strong>compressor, evaporator coils,</strong> and <strong>thermostat</strong>. Often, cleaning the evaporator coils can restore airflow, but if deeper issues exist, we'll repair or replace the compressor or thermostat to ensure optimal cooling.</p><p><strong>Excessive Frost or Ice Build-Up</strong><strong>How We Fix It:</strong> Faulty defrost systems or damaged door seals can cause frost buildup. We inspect the <strong>defrost heater</strong> and thermostat for proper defrost cycles and replace any <strong>door gaskets</strong> if needed to prevent warm air infiltration.</p><p><strong>Water Leaks or Pooling</strong><strong>How We Fix It:</strong> Leaks are often due to <strong>clogged drain lines</strong> or a faulty water valve. We clear drain lines to restore proper water flow and replace the water inlet valve if it's defective to prevent further leaks.</p><p><strong>Strange Noises</strong><strong>How We Fix It:</strong> Unusual noises usually signal issues with the <strong>fan motor, compressor,</strong> or <strong>evaporator fan</strong>. We locate the source of the noise and replace failing components, ensuring quiet and efficient operation.</p><p><strong>Door Not Sealing Properly</strong><strong>How We Fix It:</strong> A faulty <strong>door gasket</strong> can lead to increased energy use and inconsistent temperatures. We inspect and replace damaged gaskets to create a tight seal and maintain efficiency.</p>
          </>
      ),
    },
  
    {
      id: "content4",
      title: "Signs Your Refrigerator Needs Repair",
  heading: "Signs Your Refrigerator Needs Repair – When and Why to Call Us",
      img: "/refrigerator-repair/commercial-freezer-repair-3.webp",
      description: (
        <><p>Spotting early signs of <strong>refrigerator issues</strong> can save you from costly repairs and prevent food spoilage. Here's what our techs recommend looking out for:</p><ul><p><strong>Unusual Smells:</strong> If you notice any strange or sour smells, it may indicate mold or spoiled food. We'll inspect, clean, and ensure your fridge is safe and sanitized.</p><p><strong>Water Leaks:</strong> Pooled water around your fridge can lead to floor damage and safety hazards. Ignoring leaks can cause more significant issues, so call us to address them right away.</p><p><strong>Inconsistent Cooling:</strong> If your fridge can't maintain a steady temperature, food safety could be compromised. We'll restore consistent cooling for proper food preservation.</p><p><strong>Excessive Frost or Ice:</strong> This could signal air circulation issues or a faulty defrost system. We'll address it before it worsens and keep your fridge running efficiently.</p><p><strong>Strange Noises:</strong> Buzzing, rattling, or clicking usually points to failing components. Our techs can repair or replace these parts to ensure quiet, reliable operation.</p></ul> </>
      ),
    },
  
    {
      id: "content5",
      title: "Full-Service Refrigerator Repair",
      heading: "Full-Service Refrigerator Repair for Every Home",
      description: (
        <><p><strong>Kitchen Refrigerator Repair</strong></p><p>Your <strong>kitchen refrigerator</strong> is the <strong>heart of your home</strong>, keeping food fresh and always within reach. Whether you have a <strong>top freezer, bottom freezer, French door, or side-by-side</strong> model, our technicians are equipped to handle any issue, from <strong>temperature fluctuations</strong> to <strong>ice maker problems</strong>. With our <strong>same-day service</strong>, we ensure your refrigerator is back to optimal performance quickly, so you avoid <strong>food waste</strong> and keep your kitchen running smoothly.</p><p><strong>Refrigerator Repair for Large Families</strong></p><p><strong>High-capacity and multi-door refrigerators</strong> designed for larger households need to be reliable to handle <strong>extra storage needs</strong>. Our technicians specialize in diagnosing and repairing issues specific to <strong>high-capacity units</strong>, addressing <strong>compressor problems</strong> and <strong>temperature adjustments</strong> so your refrigerator maintains the perfect cooling environment for your family's groceries.</p><p><strong>High-End and Built-In Refrigerator Repair</strong></p><p><strong>Luxury and built-in refrigerators</strong> from brands like <strong>Sub-Zero, Thermador, and Viking</strong> feature <strong>advanced technology</strong> and integrate seamlessly with your kitchen design. These models, with their <strong>high-end finishes</strong>, <strong>custom cooling zones</strong>, and <strong>unique configurations</strong>, require specialized care. Our technicians are trained to handle issues such as <strong>temperature calibration</strong>, <strong>sealed system repairs</strong>, and <strong>panel replacements</strong> using only <strong>high-quality parts</strong> and techniques specifically designed for luxury models. We ensure your refrigerator not only runs efficiently but also maintains its sophisticated style.</p><p><strong>Wine and Beverage Cooler Repair</strong></p><p><strong>Wine and beverage coolers</strong> need <strong>precise temperature control</strong> to preserve the quality and flavor of your drinks. We provide <strong>specialized repair services</strong> for these units, addressing <strong>thermostat calibration</strong>, <strong>fan issues</strong>, and <strong>door seal repairs</strong> so that your drinks are stored at the ideal temperature. Our technicians ensure your specialty coolers work as intended, safeguarding your valuable collection.</p><p>With <strong>repair solutions</strong> for every type of refrigerator, including <strong>high-end</strong> and <strong>specialty models</strong>, we help keep your appliances running smoothly for optimal food and beverage storage. <strong>Call us today</strong> to schedule a <strong>fast and reliable repair service</strong>.</p> </>
      ),
    },
  
    {
      id: "content6",
      title: "Maintenance Services",
      heading: "Professional Household Maintenance Services – What You'll Receive and Why It's Essential",
      description: (
        <><p>Choosing us for regular <strong>refrigerator maintenance</strong> ensures your appliance remains <strong>efficient and long-lasting</strong>. Here's what our maintenance includes and why it matters:</p><ul><p><strong>Thorough Coil and Condenser Cleaning:</strong> Dust and debris build up, causing the fridge to overwork and raising energy costs. We meticulously clean these areas to <strong>improve cooling</strong> and <strong>reduce utility expenses</strong>.</p><p><strong>Detailed Door Seal and Gasket Checks:</strong> Dirty or damaged seals lead to temperature fluctuations. We inspect and clean gaskets, ensuring a <strong>tight seal</strong> to maintain consistent cooling and save on energy costs.</p><p><strong>Drain Line Clearing:</strong> Clogged drain lines lead to leaks and unpleasant odors. Our team clears any blockages, keeping your fridge dry and free of unwanted smells.</p><p><strong>Precision Temperature Control Checks:</strong> We ensure your thermostat is calibrated to maintain safe temperatures, preventing food spoilage and ensuring energy efficiency.</p><p><strong>Fan and Motor Inspection:</strong> We examine fans and motors for wear, replacing them if needed to avoid overheating and keep your fridge running smoothly.</p></ul> </>
      ),
    },
  
    {
      id: "content7",
      title: "Repair or Replacement",
  heading: "Deciding Between Repair and Replacement",
      description: (
        <><p>If your <strong>fridge</strong> is <strong>breaking down often</strong>, it's time to decide whether to <strong>repair or replace</strong>. When <strong>repair costs</strong> reach <strong>50% of the price of a new fridge</strong>, it's usually more <strong>cost-effective</strong> to go for a <strong>newer, more energy-efficient model</strong>. Our <strong>technicians</strong> will <strong>assess your fridge</strong> and provide a <strong>clear recommendation</strong> to help you make the best decision.</p><p><strong>Newer models</strong> come with <strong>advanced features</strong> that are <strong>more energy-efficient and reliable</strong>, resulting in <strong>significant long-term savings</strong>. When we advise on <strong>repair or replacement</strong>, we consider factors such as the <strong>age of the appliance</strong>, <strong>repair frequency</strong>, and <strong>potential energy savings</strong>—ensuring you get the <strong>most value for your money</strong>.</p><p><strong>Contact Us Today for Expert  Refrigerator Repair and Maintenance</strong></p><p>If you notice any of these <strong>household refrigerator issues</strong>, don't wait for minor problems to escalate. <strong>Call Same Day Appliance Repair</strong> today to keep your refrigerator safe, efficient, and running smoothly. We're here to provide fast, reliable service and <strong>peace of mind</strong>.</p> </>
      ),
    },
  
    {
      id: "content8",
      title: "Contact Us",
  heading: "Contact Us Today for Expert Refrigerator Repair and Maintenance",
      description: (
        <> <p>If you notice household refrigerator issues, don't wait for them to worsen. Call Same Day Appliance Repair to keep your refrigerator efficient and safe.</p>  </>
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
