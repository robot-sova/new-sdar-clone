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
  heading: "Why Choose Same Day Appliance Repair for Showcase Refrigerator Repair?",
      img: "/cooktop-repair/Best-cooktop-repair-service.webp",
      description: (
        <><p>When you choose Same Day Appliance Repair, you're partnering with a team of experts who have the tools, experience, and dedication to handle any showcase refrigerator issue. Here's why businesses trust us with their appliance repair needs:</p><p><strong>Same-Day Service</strong>: Downtime can result in product loss and dissatisfied customers. Our same-day service ensures your refrigerator is up and running quickly to maintain your inventory and operations.</p><p><strong>Certified Technicians</strong>: Our factory-trained technicians are experienced with all major <strong>commercial refrigerator brands</strong> and models. Whether it’s a simple fix or a more complex issue, we diagnose and repair with precision.</p><p><strong>High-Quality Parts</strong>: We use only OEM-quality replacement parts for repairs, ensuring long-term reliability and peak performance.</p><p><strong>Transparent Pricing</strong>: We provide upfront quotes for labor and parts with no hidden fees, so you have complete control over repair costs.</p></>
      ),
    },
  
    {
      id: "content2",
      title: "Commercial Showcase Refrigerator Types We Repair",
      heading: "Common Commercial Showcase Refrigerator Types We Repair - Our Approach",
      img: "/cooktop-repair/cooktop-repair-service-los-angeles.webp",
      description: (
        <><h3><strong>Upright Display Refrigerator Repair</strong></h3>

        <p>These <strong>refrigerators</strong> are commonly used for beverages and perishable items in retail settings. Common issues include <strong>temperature inconsistencies</strong>, <strong>faulty thermostats</strong>, and <strong>condenser fan problems</strong>. Our technicians <strong>inspect</strong> and repair critical components like <strong>evaporators</strong>, <strong>compressors</strong>, and <strong>temperature sensors</strong> to ensure proper cooling and <strong>energy efficiency</strong>.</p>
        
        <h3><strong>Glass-Door Coolers</strong></h3>
        
        <p>Glass-door refrigerators are ideal for showcasing products, but they often face issues like door seal damage, condensation buildup, or lighting failures. We repair and replace <strong>door gaskets</strong>, LED lighting, and <strong>defrost systems</strong> to maintain clear visibility and <strong>optimal cooling </strong>for your products.</p>
        
        <h3><strong>Custom-Built Refrigeration Units</strong></h3>
        
        <p>Custom units are designed for unique business needs but can face challenges like <strong>cooling system malfunctions</strong> or <strong>electronic control failures</strong>. Our technicians are equipped to handle complex repairs on custom units, ensuring seamless operation while preserving your investment.</p></>
      ),
    },
  
    {
      id: "content3",
      title: "Showcase Refrigerator Problems",
      heading: "Common Showcase Refrigerator Problems - How We Fix Them",
      img: "/cooktop-repair/cooktop-repair-service-near-me.webp",
      description: (
        <><h3><strong>Inconsistent Cooling</strong></h3>

        <p><strong>Problem</strong>: "My refrigerator isn't cooling evenly, and some sections are warmer than others."</p><p><strong>Solution</strong>: This often indicates a problem with the <strong>condenser fan</strong>, <strong>evaporator</strong>, or <strong>thermostat</strong>. We’ll clean any clogged components, inspect the cooling system, and replace faulty parts to restore even temperature distribution.</p>
        
        <h3><strong>Excessive Frost Build-Up</strong></h3>
        
        <p><strong>Problem</strong>: "There’s ice forming inside the refrigerator, affecting product display and cooling."</p><p><strong>Solution</strong>: Frost buildup often results from a <strong>faulty defrost system</strong> or poor air circulation. We repair the defrost timer and replace any broken evaporator coils to ensure proper airflow and eliminate frost.</p>
        
        <h3><strong>Glass Doors Fogging or Not Sealing Properly</strong></h3>
        
        <p><strong>Problem</strong>: "The refrigerator doors aren’t sealing, and there’s fog obstructing the view."</p><p><strong>Solution</strong>: Damaged <strong>door gaskets</strong> or poor insulation can cause sealing issues. We replace gaskets, inspect hinges, and ensure the glass doors are properly insulated to maintain energy efficiency and product visibility.</p>
        
        <h3><strong>Lighting Issues</strong></h3>
        
        <p><strong>Problem</strong>: "The display lighting isn’t working, making it hard to showcase products."</p><p><strong>Solution</strong>: Faulty or burnt-out <strong>LED lighting</strong> can affect product display. We replace defective lighting components and check wiring to ensure bright and reliable illumination.</p>
        
        <h3><strong>Refrigerator Making Strange Noises</strong></h3>
        
        <p><strong>Problem</strong>: "There are loud noises coming from the refrigerator, and it’s distracting customers."</p><p><strong>Solution</strong>: Strange noises often indicate issues with the <strong>compressor</strong>, <strong>fan motor</strong>, or loose components. We inspect and replace worn parts to restore quiet operation.</p></>
      ),
    },
  
     
    {
      id: "content5",
      title: "Showcase Refrigerator Needs Repair",
  heading: "Signs Your Showcase Refrigerator Needs Repair",
      img: "/cooktop-repair/same-day-cooktop-repair.webp",
      description: (
        <><p>Identifying early signs of refrigerator issues can prevent costly repairs and inventory loss. Here’s when to call us:</p><p><strong>Temperature Fluctuations</strong>: Inconsistent cooling or warm spots can compromise product quality.</p><p><strong>Unusual Noises</strong>: Buzzing, clicking, or rattling sounds indicate worn components.</p><p><strong>Condensation or Frost</strong>: Excess moisture or frost buildup affects energy efficiency and product visibility.</p><p><strong>Lighting Failures</strong>: Poor illumination reduces the appeal of your displayed products.</p><p><strong>Increased Energy Bills</strong>: Sudden spikes in energy consumption may point to an inefficient cooling system.</p>

        </>
      ),
    },
  
    {
      id: "content6",
      title: "Showcase Refrigerator for Various Industries",
      heading: "Professional Showcase Refrigerator Repair for Various Industries",
      description: (
        <><p>At Same Day Appliance Repair, we specialize in <strong>showcase refrigerator repair services</strong> designed to meet the diverse needs of various industries. Whether you operate a grocery store, restaurant, or hotel, a properly functioning <strong>showcase refrigerator</strong> is essential for preserving product quality, showcasing items attractively, and maintaining customer satisfaction. Our experienced technicians are trained to repair all types of <strong>glass display refrigerators</strong>, ensuring minimal downtime and optimal performance for your business operations.</p>

        <h3><strong>Grocery Store Refrigerator Repair</strong></h3>
        
        <p>In the grocery industry, a reliable <strong>showcase refrigerator</strong> is vital for keeping perishable products fresh and appealing. Whether you’re dealing with temperature inconsistencies, condensation issues, or lighting failures, our technicians are ready to provide efficient repairs to keep your products properly displayed and stored.</p><h4><strong>Common Issues We Fix:</strong></h4><p><strong>Temperature fluctuations</strong> affecting product preservation</p><p><strong>Foggy glass doors</strong> hindering product visibility.</p><p><strong>Faulty lighting</strong> reduces display attractiveness.</p><p><strong>Compressor issues</strong> leading to cooling failures.</p><p><strong>Damaged door seals</strong> cause energy inefficiency.</p><p>With our expertise, we’ll ensure your <strong>glass-door refrigerators</strong> are functioning efficiently, helping you maintain high standards for food quality and energy savings.</p>
        
        <h3><strong>Restaurant Refrigerator Repair</strong></h3>
        
        <p>For restaurants, a functional <strong>showcase refrigerator</strong> plays a dual role: preserving food quality and presenting items like desserts or beverages to customers. Malfunctions can disrupt service and negatively impact your establishment’s reputation. Our team delivers prompt and effective repairs to keep your kitchen and dining areas running smoothly.</p><h4><strong>Restaurant-Specific Services:</strong></h4><p>Fixing <strong>defrost system issues</strong> to prevent ice buildup</p><p>Addressing <strong>evaporator fan malfunctions</strong> for consistent cooling</p><p>Replacing faulty <strong>control boards</strong> or <strong>thermostats</strong></p><p>Repairing <strong>door hinges</strong> and <strong>glass panels</strong> for smooth operation</p><p>Optimizing <strong>interior lighting systems</strong> for improved product visibility</p><p>From chilled desserts to perfectly displayed beverages, we ensure your <strong>showcase refrigerators</strong> enhance customer experience and maintain the quality of your offerings.</p>
        
        <h3><strong>Hotel Showcase Refrigerator Repair</strong></h3>
        
        <p>Hotels rely on <strong>glass display refrigerators</strong> in various settings, including buffets, lobbies, and room service areas. A malfunctioning <strong>showcase refrigerator</strong> can lead to customer dissatisfaction and operational delays. Our skilled technicians provide reliable repair services for all major brands, ensuring your appliances are always guest-ready.</p><h4><strong>Hotel-Specific Repairs:</strong></h4><p>Resolving <strong>uneven cooling</strong> for large-scale food displays</p><p>Repairing <strong>timer controls</strong> and <strong>temperature sensors</strong></p><p>Fixing <strong>broken glass doors</strong> or <strong>seals</strong> to maintain energy efficiency</p><p>Cleaning and servicing <strong>condenser coils</strong> for optimal performance</p><p>Repairing or replacing <strong>lighting systems</strong> to enhance food presentation</p><p>Whether you’re showcasing beverages in the lobby or maintaining a buffet, we’ll ensure your <strong>showcase refrigerators </strong>perform flawlessly, supporting your high standards of hospitality.</p> </>
      ),
    },
  
    {
      id: "content7",
      title: "RShowcase Refrigerator Maintenance",
      heading: "Expert Commercial Showcase Refrigerator Maintenance Services",
      description: (
        <><p>At Same Day Appliance Repair, our technicians take pride in delivering thorough and reliable <strong>showcase refrigerator maintenance</strong> to keep your unit running efficiently and prevent costly breakdowns. Here’s what you can expect when we perform routine maintenance on your <strong>commercial showcase refrigerator</strong>:</p>

        <h3><strong>1. Cleaning Condenser Coils</strong></h3>
        
        <p><strong>What We Do:</strong><br />Over time, <strong>dust and debris</strong> accumulate on the condenser coils, reducing your refrigerator’s ability to maintain consistent cooling. Our technicians carefully clean these coils using specialized tools to remove buildup, restoring the system’s efficiency and reducing strain on the compressor. Regular cleaning improves energy efficiency and prevents overheating, extending the lifespan of your appliance.</p>
        
        <h3><strong>2. Inspecting Door Seals</strong></h3>
        
        <p><strong>What We Do:</strong><br />Cracked or worn <strong>door gaskets</strong> can cause air leaks, leading to energy waste and inconsistent temperatures. During maintenance, we meticulously inspect the seals for any damage or gaps. If we identify worn gaskets, we’ll recommend replacements to ensure a tight seal, keeping your <strong>refrigerator’s cooling system</strong> working efficiently and preventing unnecessary energy loss.</p><p><strong>3. Monitoring and Calibrating Temperature Settings</strong></p><p><strong>What We Do:</strong><br />Our technicians verify that the <strong>thermostat</strong> is set to the correct temperature for your products and calibrate it as needed to ensure precise cooling. We also test the <strong>temperature sensors</strong> and controls to ensure they function accurately, preventing temperature fluctuations that could compromise product quality.</p>
        
        <h3><strong>4. Inspecting and Maintaining Fans and Motors</strong></h3>
        
        <p><strong>What We Do:</strong><br />The <strong>evaporator and condenser fans</strong> play a critical role in distributing cool air throughout the unit. We check these components for proper operation, clean away any obstructions, and lubricate moving parts as necessary. If a motor shows signs of wear, we’ll recommend a replacement to avoid unexpected failure.</p>
        
        <h3><strong>5. Verifying Interior Lighting</strong></h3>
        
        <p><strong>What We Do:</strong><br />Bright, functional lighting is essential for product visibility in a <strong>showcase refrigerator</strong>. We inspect the <strong>lighting system</strong>, replace burnt-out bulbs, and address wiring issues to ensure your display looks its best and attracts customer attention.</p>
        
        <h3><strong>6. Checking for Refrigerant Leaks</strong></h3>
        
        <p><strong>What We Do:</strong><br />Low refrigerant levels or leaks can severely impact cooling performance. Our technicians inspect the <strong>refrigeration system</strong> for any signs of leaks, test refrigerant levels, and recharge the system if necessary, ensuring your unit maintains optimal cooling.</p>
        
        <h3><strong>7. Examining Electrical Components</strong></h3>
        
        <p><strong>What We Do:</strong><br />Electrical issues can disrupt your refrigerator’s performance or cause safety hazards. We test the <strong>circuit board, wiring, and power connections</strong> to ensure they function properly. Any faulty or worn components are repaired or replaced to prevent further issues.</p><p>By focusing on these essential tasks during maintenance, our technicians ensure your <strong>commercial showcase refrigerator</strong> operates efficiently, extends its lifespan, and minimizes the risk of costly repairs. Schedule a maintenance appointment with our skilled team today to keep your equipment in top condition and your products perfectly preserved.</p></>
      ),
    },
  
    {
      id: "content8",
      title: "Contact Us",
      heading: "Deciding Between Repair and Replacement Showcase Refrigerator",
      description: (
        <><p>If your refrigerator frequently breaks down or repair costs exceed 50% of the replacement cost, investing in a new unit may be more cost-effective. Our technicians will provide expert advice to help you make the best decision for your business.</p>
        </>
      ),
    },

{
      id: "content9",
      title: "Contact Us",
      heading: "Contact Us for Professional Showcase Refrigerator Repair",
      description: (
        <><p>Don’t let a malfunctioning refrigerator disrupt your business operations. Contact Same Day Appliance Repair today for fast, reliable <strong>showcase refrigerator repair services</strong> across Los Angeles. Our skilled technicians are ready to handle any issue and keep your commercial refrigeration running smoothly.</p><p><strong>Call now to schedule your repair service!</strong></p></>
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
