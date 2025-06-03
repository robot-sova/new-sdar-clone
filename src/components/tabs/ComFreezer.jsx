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
  heading: "Why Choose Same Day Appliance Repair for Commercial Freezer Repair?",
        img: "/images/commercial-freezer-repair-2.webp",
        description: (
          <><p>When you work with <strong>Same Day Appliance Repair</strong>, you're choosing a team of expert technicians equipped with the tools, top-quality parts, and experience to handle any <strong>commercial freezer repair</strong> needs. Here's why businesses trust us with their essential appliances:</p><p><strong>Same-Day Service:</strong> We understand that a fully operational freezer is crucial to your business. Our <strong>same-day repair services</strong> minimize downtime, keeping your operations running smoothly and avoiding costly losses due to spoilage.</p><p><strong>Certified Technicians:</strong> Our technicians are not only certified but bring extensive experience across all major <strong>commercial freezer brands and models</strong>. Whether it's a simple fix or a complex repair, we have the expertise to diagnose and resolve issues promptly.</p><p><strong>Top-Quality Parts:</strong> We use only original, high-grade parts sourced from trusted suppliers. By choosing high-quality parts, we ensure your freezer operates efficiently and provides long-lasting performance, reducing the need for repeated repairs.</p><p><strong>Transparent Pricing:</strong> With us, you get straightforward pricing. We provide clear, upfront quotes for labor and parts—no hidden fees—so you'll know exactly what to expect before any work begins.</p><p>Trust Same Day Appliance Repair to get your <strong>commercial freezer</strong> back to optimal performance with reliable and timely service.</p></>
        ),
      },
    
    {
        id: "content2",
        title: "Commercial Freezer Types We Repair",
  heading: "Common Commercial Freezer Types We Repair and Our Approach",
        img: "",
        description: (
          <> <h4><strong>Freezer Repair: Keeping Large Inventories Safe</strong></h4><p><strong>Walk-in freezers</strong> are essential for <strong>businesses</strong> storing bulk perishable items. These units often face issues such as temperature fluctuations, frost build-up, or door gasket failures, which can cause excessive frost, temperature drops, or <strong>leaks</strong>. These problems can lead to spoiled goods, lost inventory, and even health code violations. Our <strong>technicians</strong> will inspect the compressor, evaporator coils, and door gaskets to ensure your <strong>walk-in freezer</strong> maintains the correct temperature and operates efficiently. We handle frost removal, thermostat <strong>repairs</strong>, and compressor replacements to ensure the smooth operation of your <strong>walk-in freezer</strong>.</p><h4><strong>Reach-In Freezer Repair: Quick and Efficient Solutions</strong></h4><p><strong>Reach-in freezers</strong> are common in <strong>commercial kitchens</strong> and retail spaces where items need to be readily accessible. Frequent issues with these units include evaporator coil icing, fan motor failures, and compressor malfunctions. These problems can lead to insufficient cooling and spoiled <strong>food</strong>. Our <strong>technicians</strong> specialize in diagnosing and repairing these common issues, ensuring your <strong>freezer</strong> stays cold and your <strong>products</strong> remain safe for consumption.</p><h4><strong>Undercounter Freezer Repair: Compact Freezing Solutions</strong></h4><p><strong>Undercounter freezers</strong> are often used in smaller <strong>commercial kitchens</strong> where space is limited. These units can experience issues like poor cooling, blocked air vents, and damaged door gaskets. If your <strong>under-counter freezer</strong> isn't maintaining the correct temperature or is overworking, our team will assess the fan motor, compressor, and airflow to restore proper cooling.</p> </>
        ),
      },
    
    {
        id: "content3",
        title: "Commercial Freezer Problems We Fix",
        heading:"Common Commercial Freezer Problems and How We Fix Them",
        img: "",
        description: (
          <><p>At <strong>Same Day Appliance Repair</strong>, we understand the stress that comes with a malfunctioning <strong>commercial freezer</strong>. Our <strong>technicians</strong> work with <strong>customers</strong> daily to address a wide range of <strong>freezer</strong> issues. Below are the most common problems we encounter and how we solve them to ensure your <strong>freezer</strong> is back up and running quickly.</p><h4>1. <strong>Freezer Not Cooling Properly</strong></h4><p><strong>Customer Concern</strong>: "My <strong>freezer</strong> isn't getting cold enough, and I'm worried about losing inventory." <strong>How We Fix It</strong>:<br />If your <strong>freezer</strong> isn't cooling properly, we start by inspecting the evaporator coils, compressor, and thermostat. Frozen or dirty evaporator coils can restrict airflow, so we clean them thoroughly. If the compressor isn't working efficiently, we <strong>repair</strong> or replace it to restore proper cooling. We also ensure the thermostat is accurately regulating the temperature.</p><h4>2. <strong>Excessive Frost or Ice Build-Up</strong></h4><p><strong>Customer Concern</strong>: "There's so much frost buildup in the <strong>freezer</strong> that I can barely use it!" <strong>How We Fix It</strong>:<br />Excessive frost can be caused by a malfunctioning defrost system or damaged door gaskets allowing warm air to enter. We inspect and <strong>repair</strong> the defrost heater, thermostat, and door seals to ensure your <strong>freezer</strong> maintains the proper temperature and eliminates frost buildup.</p><h4>3. <strong>Freezer Leaking Water</strong></h4><p><strong>Customer Concern</strong>: "Water is leaking from my <strong>freezer</strong>, and I don't know where it's coming from." <strong>How We Fix It</strong>:<br />Water <strong>leaks</strong> are often caused by clogged drain lines or issues with the water inlet valve. Our <strong>technicians</strong> will clean the drain lines to ensure proper drainage and check the water inlet valve for damage, replacing it if necessary. This will prevent further water damage to your <strong>freezer</strong> and surrounding areas.</p><h4>4. <strong>Freezer Making Loud Noises</strong></h4><p><strong>Customer Concern</strong>: "My <strong>freezer</strong> is making loud, strange noises, and I'm worried it might break down." <strong>How We Fix It</strong>:<br />Unusual noises typically point to a problem with the fan motor, compressor, or evaporator fan. We identify the source of the noise and replace any failing components to restore quiet, efficient operation. This is crucial to avoid further extensive damage to your <strong>freezer</strong>.</p><h4>5. <strong>Freezer Door Not Sealing Properly</strong></h4><p><strong>Customer Concern</strong>: "The door won't close all the way, and it's causing the <strong>freezer</strong> to overwork." <strong>How We Fix It</strong>:<br />A faulty door gasket can lead to significant temperature fluctuations, increasing energy costs and overworking your <strong>freezer</strong>. We replace the door gaskets and check the door hinges to ensure a proper seal, helping your <strong>unit</strong> maintain the correct temperature without overloading the system.</p><h4>6. <strong>Freezer Power Issues</strong></h4><p><strong>Customer Concern</strong>: "My <strong>freezer</strong> keeps turning off, and I can't figure out what's wrong." <strong>How We Fix It</strong>:<br />Power issues can stem from a malfunctioning thermostat, control board, or a faulty power connection. Our <strong>technicians</strong>troubleshoot the electrical components and <strong>repair</strong> or replace any faulty parts, ensuring your <strong>freezer</strong> runs consistently without interruptions.</p><h4>7. <strong>Temperature Fluctuations</strong></h4><p><strong>Customer Concern</strong>: "The temperature in my <strong>freezer</strong> keeps going up and down, and I'm worried about <strong>food</strong> safety."<strong>How We Fix It</strong>:<br />We thoroughly inspect the compressor, thermostat, and evaporator coils to find the source of the temperature fluctuations. If any part is faulty, we provide immediate <strong>repair services</strong> to restore consistent cooling and prevent <strong>food </strong>spoilage.</p></>
        ),
      },
    
    {
        id: "content4",
        title: "Signs Your Commercial Freezer Needs Repair",
        heading: "Signs Your Commercial Freezer Needs Repair – When and Why to Call Us",
        img: "",
        description: (
          <>
            <p>Spotting early warning signs of commercial freezer issues can save you money on repairs, prevent major disruptions, and ensure safe storage for your products. Here's what our expert technicians recommend watching out for and why it's essential to address these issues promptly:</p><p><strong>Unusual Smells:</strong> Strange or unpleasant smells coming from your freezer could indicate mold buildup or a clogged drain. These odors pose potential health hazards and could compromise food safety. If you notice unusual smells, call us right away. Our team will thoroughly inspect, clean, and sanitize your unit to maintain a safe storage environment.</p><p><strong>Water Leaks or Pooling:</strong> Visible water around your commercial freezer often results from worn-out door seals, clogged drain lines, or loose connections. Leaks can lead to floor damage, safety hazards, and even corrosion of your equipment. Contact us immediately to address the leak. Our technicians will identify the cause and perform the necessary repairs, safeguarding both your kitchen area and your equipment.</p><p><strong>Temperature Fluctuations or Inconsistent Cooling:</strong> A commercial freezer struggling to maintain consistent temperatures is a serious issue. Fluctuations are often due to problems with the thermostat, compressor, or condenser, impacting food safety and storage reliability. If your freezer is not holding the correct temperature, call us. Our technicians will restore consistent cooling quickly to protect your products.</p><p><strong>Excessive Frost or Ice Buildup:</strong> Frost or ice forming in or around the freezer compartments signals poor air circulation or a failing defrost system. Excessive frost not only reduces storage capacity but also increases energy consumption. Let us inspect and resolve these issues before they escalate. Regular airflow and defrost maintenance will keep your freezer running efficiently and preserve your products' quality.</p><p><strong>Strange Noises:</strong> Buzzing, rattling, or clicking sounds are early indicators of failing components like fans, compressors, or motors. These noises mean your freezer is overworking, which will drive up your utility costs and potentially cause larger breakdowns. If you hear unusual sounds, call us for a quick inspection. Our technicians will identify and fix the source of the problem to keep your freezer operating smoothly and efficiently.</p><p><strong>Contact Us Today!</strong> Don't wait for small issues to turn into costly repairs. Call our expert team now to ensure safe, reliable operation, protect food quality, and extend the life of your commercial freezer. We're here to keep your business running smoothly.</p><p></p>
          </>
        ),
      },
    
    {
        id: "content5",
        title: "Freezer Repair for Various Industries",
  heading: "Commercial Freezer Repair for Various Industries",
        img: "",
        description: (
          <><h4><strong>Restaurant Freezer Repair</strong></h4><p>We understand how essential it is for restaurants to keep their stock fresh. Whether it's a reach-in <strong>freezer</strong> in your kitchen or a <strong>walk-in freezer</strong> for storage, we have the expertise to <strong>fix</strong> all types of <strong>commercial freezers</strong>. Our same-day <strong>repair services</strong> ensure your restaurant's <strong>freezers</strong> operate efficiently, preventing <strong>food</strong> spoilage and keeping your <strong>business</strong> running smoothly.</p><h4><strong>Grocery Store Freezer Repair</strong></h4><p>A broken <strong>commercial freezer</strong> in a grocery store can lead to significant loss of perishable goods. We provide fast and reliable <strong>commercial freezer repair</strong> to ensure your shelves stay stocked and your <strong>products</strong> remain fresh. Our <strong>technicians</strong> handle everything from compressor issues to temperature control failures, making sure your <strong>freezer</strong> is back in working order quickly.</p><h4><strong>Healthcare Freezer Repair</strong></h4><p>Healthcare facilities rely on <strong>commercial freezers</strong> to store critical items such as vaccines, medications, and other sensitive materials. Our <strong>technicians</strong> are trained to work with healthcare <strong>refrigeration equipment</strong>, ensuring these units run smoothly to avoid failures that could compromise patient care. We offer prompt <strong>commercial freezer repair services</strong> to ensure your facility operates without disruption.</p></>
        ),
      },
    
    {
        id: "content6",
        title: "Commercial Freezer Maintenance",
  heading: "Expert Commercial Freezer Repair and Maintenance",
        img: "",
        description: (
          <><p>At <strong>Same Day Appliance Repair</strong>, we prioritize fast, reliable <strong>commercial freezer repair</strong> to minimize downtime and prevent spoilage. We also recommend <strong>regular maintenance</strong> to extend the life of your <strong>freezer</strong> and avoid unexpected failures. Our <strong>factory-trained technicians</strong> provide <strong>maintenance services</strong> such as cleaning evaporator coils, inspecting fan motors, and checking door gaskets to ensure your <strong>freezer</strong> operates at peak efficiency.</p> </>
        ),
      },
    
    {
        id: "content7",
        title: "Repair or Replacement",
        heading:"Deciding Between Repair and Replacement",
        img: "",
        description: (
          <><p>If your <strong>commercial freezer</strong> is experiencing frequent issues, it might be time to decide between <strong>repair</strong> and <strong>replacement</strong>. When <strong>repair costs</strong> start exceeding 50% of the replacement saving regularly, replacing the unit with a newer, more energy-efficient model may be more cost-effective cost, or if you need repairs re. Our <strong>expert technicians</strong> will thoroughly assess the condition of your <strong>commercial freezer</strong> and provide you with a detailed recommendation, helping you make the best decision for your <strong>business</strong>.</p><p>Newer models often come with advanced features that improve energy efficiency and reliability, which can <strong>save money</strong> in the long run. When advising on whether to repair or replace your equipment, we consider factors such as the age of the appliance, frequency of repairs, and potential energy.</p> </>
        ),
      },
    
    {
        id: "content8",
        title: "Contact Us",
  heading: "Contact Expert Commercial Freezer Repair in Los Angeles and Surrounding Areas",
        img: "",
        description: (
          <> <p>At <strong>Same Day Appliance Repair</strong>, we offer expert <strong>commercial freezer repair</strong> in <strong>Los Angeles</strong> and surrounding areas. Whether your <strong>business</strong> is located in downtown or in a quieter neighborhood, our team of <strong>factory-trained technicians</strong> is ready to assist you with <strong>same-day repairs</strong> to minimize any disruption to your operations.</p><p>Our extensive <strong>service area</strong> ensures that no matter where your <strong>commercial kitchen</strong> is located, we are never too far away to provide top-quality <strong>appliance repair</strong> for your <strong>commercial freezer</strong>. We serve the following locations:</p><p>Wherever your <strong>business</strong> is located, our <strong>same-day service</strong> ensures that your <strong>commercial freezer</strong> gets the <strong>repair</strong> it needs fast, so you can get back to running your <strong>business</strong> without worrying about costly downtime or spoiled inventory.</p></>
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
