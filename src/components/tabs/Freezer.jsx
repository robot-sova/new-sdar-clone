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
  heading: "Why Choose Same Day Appliance Repair for Commercial Freezer Repair?",
      img: "/freezer/1-freezer-repair.webp",
      description: (
        <> <p>When you work with <strong>Same Day Appliance Repair</strong>, you're choosing a team of expert technicians equipped with the tools, top-quality parts, and experience to handle any <strong>commercial freezer repair</strong> needs. Here's why businesses trust us with their essential appliances:</p><p><strong>Same-Day Service:</strong> We understand that a fully operational freezer is crucial to your business. Our <strong>same-day repair services</strong> minimize downtime, keeping your operations running smoothly and avoiding costly losses due to spoilage.</p><p><strong>Certified Technicians:</strong> Our technicians are not only certified but bring extensive experience across all major <strong>commercial freezer brands and models</strong>. Whether it's a simple fix or a complex repair, we have the expertise to diagnose and resolve issues promptly.</p><p><strong>Top-Quality Parts:</strong> We use only original, high-grade parts sourced from trusted suppliers. By choosing high-quality parts, we ensure your freezer operates efficiently and provides long-lasting performance, reducing the need for repeated repairs.</p><p><strong>Transparent Pricing:</strong> With us, you get straightforward pricing. We provide clear, upfront quotes for labor and parts—no hidden fees—so you'll know exactly what to expect before any work begins.</p><p>Trust Same Day Appliance Repair to get your <strong>commercial freezer</strong> back to optimal performance with reliable and timely service.</p></>
      ),
    },
  
    {
      id: "content2",
      title: "Why Choose Us",
      heading:  "Common Household Freezer Types We Service and Our Approach to Repair",
      img: "/freezer/2-freezer-repair.webp",
      description: (
        <><h3><strong>Top-Freezer Repair: Reliable Cooling Solutions</strong></h3><p>Popular in many homes, <strong>top-freezer refrigerators</strong> can experience <strong>common freezer problems</strong> like <strong>temperature </strong>fluctuations, frost buildup, and gasket wear on the freezer door. Our <strong>professional service</strong> includes thorough inspections and repairs of <strong>condenser, evaporator</strong>, and <strong>door seals</strong> to ensure your fridge and <strong>freezer</strong> maintain consistent, efficient cooling.</p><h3><strong>Side-by-Side Refrigerator Repair: Balanced Cooling Service</strong></h3><p><strong>Side-by-side refrigerators</strong> offer convenient storage but may experience <strong>unusual noises</strong> from fan motors, <strong>control board</strong> malfunctions, and water dispenser issues. We address these issues to restore consistent cooling between the fridge and <strong>freezer</strong> compartments, ensuring optimal performance and energy efficiency.</p><h3><strong>Bottom-Freezer Refrigerator Repair: Efficient Temperature Control</strong></h3><p>With <strong>bottom-freezer</strong> units, issues with <strong>fan motors</strong>, <strong>compressors</strong>, and <strong>thermostats</strong> can impact airflow and <strong>temperature</strong> regulation. Our technicians check each <strong>appliance</strong> thoroughly and <strong>replace</strong> old or faulty parts to keep your <strong>freezer</strong> cold and maintain food quality.</p><h3><strong>French Door Refrigerator Repair: Handling Complex Cooling Systems</strong></h3><p>Designed with ample storage, <strong>French door refrigerators</strong> have advanced cooling systems that can lead to problems with <strong>water supply</strong>, <strong>inlet valves</strong>, and <strong>evaporator fans</strong>. Our team services <strong>small appliances</strong> and <strong>major brands</strong>, ensuring each <strong>repair service</strong> is performed precisely and carefully.</p>  </>
      ),
    },
  
    {
      id: "content3",
      title: "Why Choose Us",
      heading: "Common Household  Freezer Problems We Fix",
      img: "/freezer/3-freezer-repair.webp",
      description: (
        <><p>Our expert technicians frequently encounter various <strong>common freezer problems</strong> and refrigerator issues. With years of hands-on experience, we provide efficient solutions to keep your <strong>appliance</strong> running:</p><ul><li><p><strong>Freezer or Refrigerator Not Cooling Properly</strong></p><ul><li><p><strong>Customer Concern</strong>: “My fridge isn't cold, and I'm worried about food spoilage.”</p></li><li><p><strong>Solution</strong>: We check <strong>the condenser coils, the evaporator fan, and the</strong> <strong>thermostat</strong> for cooling issues, replacing worn parts to restore the correct <strong>temperature</strong> for preserving food.</p></li></ul></li><li><p><strong>Frost Buildup in the Freezer Compartment</strong></p><ul><li><p><strong>Customer Concern</strong>: “My freezer has excessive frost buildup.”</p></li><li><p><strong>Solution</strong>: Frost buildup typically results from a <strong>defrost system</strong> malfunction or worn door seals. We inspect the system, repair or <strong>replace</strong> faulty gaskets, and ensure an airtight freezer door seal.</p></li></ul></li><li><p><strong>Water Leakage on the Kitchen Floor</strong></p><ul><li><p><strong>Customer Concern</strong>: “There's water pooling under my refrigerator.”</p></li><li><p><strong>Solution</strong>: Leaks often stem from clogged <strong>water supply lines</strong> or issues with the <strong>evaporator pan</strong>. We clear blockages and ensure proper drainage to avoid pooling on the <strong>kitchen floor</strong>.</p></li></ul></li><li><p><strong>Unusual Noises</strong></p><ul><li><p><strong>Customer Concern</strong>: “My refrigerator is making strange sounds.”</p></li><li><p><strong>Solution</strong>: Odd sounds are often signs of <strong>fan motor</strong> or <strong>compressor</strong> issues. We identify the cause and provide prompt <strong>repairs</strong> to ensure smooth, quiet operation.</p></li></ul></li><li><p><strong>Ice Maker Not Working</strong></p><ul><li><p><strong>Customer Concern</strong>: “My ice maker isn't producing ice.”</p></li><li><p><strong>Solution</strong>: Ice production issues can involve <strong>water supply</strong> or <strong>inlet valves</strong>. We inspect the <strong>water dispenser </strong>and <strong>ice maker</strong>, clear blockages, and ensure proper water flow for consistent ice production.</p></li></ul></li></ul> </>
      ),
    },
  
    {
      id: "content4",
      title: "Signs Your Freezer Needs Repair",
  heading: "Signs Your Freezer Needs Repair",
      img: "/freezer/5-freezer-repair.webp",
      description: (
        <> <p>Our technicians encounter various signs of <strong>freezer</strong> problems that require professional attention. Here's what to look for:</p><ul><li><p><strong>Unusual Noises</strong> – Buzzing or clicking noises may signal <strong>compressor</strong> or <strong>fan motor</strong> issues. Catching these early prevents more significant problems.</p></li><li><p><strong>Warm Interior</strong> – If the <strong>freezer</strong> or fridge lacks <strong>cold air</strong>, the <strong>condenser coils</strong>, <strong>evaporator fan</strong>, or thermostat may need inspection.</p></li><li><p><strong>Frost Buildup</strong> – Excess frost in the <strong>freezer compartment</strong> suggests a defrost system problem. This may affect the <strong>temperature</strong> and lead to more complex <strong>repairs</strong> if ignored.</p></li><li><p><strong>Water Leaks</strong> – Water around the fridge can be due to clogged <strong>water supply lines</strong> or blocked drain lines. Addressing leaks promptly prevents <strong>kitchen floor</strong> damage.</p></li><li><p><strong>Frequent Cycling</strong> – A constantly running fridge or <strong>freezer</strong> often points to <strong>thermostat</strong> or <strong>compressor</strong> issues, which increases energy costs and strain on the appliance.</p></li></ul> </>
      ),
    },
  
    {
      id: "content5",
      title: "Full-Service Freezer Repair",
  heading:  "Full-Service Freezer Repair for Every Home",
      description: (
        <><p><strong>Kitchen Freezer Repair</strong><br />Your <strong>kitchen freezer</strong> is essential to keeping <strong>food fresh</strong> and ready for daily use. Whether you have a <strong>top freezer, a bottom freezer,</strong> or a <strong>stand-alone model,</strong> our technicians are equipped to tackle any issue, from <strong>temperature fluctuations</strong> to <strong>frost buildup</strong>. With our <strong>same-day service,</strong> we'll ensure your freezer is restored to <strong>peak performance quickly,</strong> helping you avoid <strong>food spoilage</strong> and maintain an <strong>efficient kitchen</strong>.</p><p><strong>Freezer Repair for Large Families</strong><br /><strong>High-capacity freezers</strong> are often necessary for <strong>larger families</strong> to accommodate <strong>bulk storage</strong> needs. Our technicians specialize in diagnosing and repairing <strong>issues unique to high-capacity units,</strong> including <strong>compressor issues</strong> and <strong>consistent temperature regulation</strong>. We ensure your freezer reliably keeps <strong>groceries at the ideal temperature</strong> for longer-lasting freshness.</p><p><strong>High-End and Built-In Freezer Repair</strong><br /><strong>Luxury</strong> and <strong>built-in freezers</strong> from brands like <strong>Sub-Zero, Thermador,</strong> and <strong>Viking</strong> feature <strong>advanced cooling technology </strong>and integrate seamlessly with your <strong>kitchen's design</strong>. These models require <strong>specialized care</strong> due to their <strong>premium finishes, precise temperature zones,</strong> and <strong>unique configurations</strong>. Our technicians are trained to manage issues like <strong>temperature calibration, sealed system repairs,</strong> and <strong>panel replacements</strong> using <strong>high-quality parts</strong> and <strong>techniques</strong>tailored for luxury models. We ensure your freezer not only runs <strong>efficiently</strong> but also preserves its <strong>elegant design</strong>.</p><p><strong>Wine and Specialty Freezer Repair</strong><br /><strong>Wine and specialty freezers</strong> need <strong>precise temperature control</strong> to safely store items like <strong>wine</strong> or <strong>specialty foods</strong>. We provide <strong>specialized repair services</strong> for these units, addressing <strong>thermostat adjustments, fan repairs,</strong> and <strong>door seal replacements</strong> to keep your items stored at the <strong>perfect temperature</strong>. Our technicians make sure your <strong>specialty freezers </strong>function as intended, protecting your <strong>valuable collection</strong>.</p><p>With <strong>comprehensive repair solutions</strong> for every type of freezer, including <strong>luxury</strong> and <strong>specialty models,</strong> we keep your appliances running <strong>smoothly</strong> for <strong>optimal food storage</strong>. <strong>Contact us today</strong> to schedule a <strong>prompt</strong> and <strong>professional freezer repair service</strong>.</p> </>
      ),
    },
  
    {
      id: "content6",
      title: "Freezer Maintenance",
  heading:  "Importance of Regular Freezer Maintenance",
      description: (
        <><p>Regular maintenance is vital for keeping your <strong>freezer</strong> in optimal condition. During each service, we clean <strong>condenser coils</strong>, inspect <strong>door gaskets</strong>, check <strong>temperature</strong> settings, and test the <strong>thermostat</strong>. Without this routine care, most <strong>appliances</strong> incur higher <strong>energy</strong> costs and require more frequent repairs, impacting their <strong>life</strong> and efficiency.</p><p>Routine maintenance allows our technicians to catch signs of wear early, saving you from unexpected breakdowns and helping you <strong>save money</strong> on <strong>repair costs</strong>. Cleaning <strong>condenser coils</strong> and checking <strong>water supply lines</strong> are just a few ways we enhance your <strong>appliance's</strong> performance.</p></>
      ),
    },
  
    {
      id: "content7",
      title: "Repair or Replacement",
  heading: "Deciding Between Freezer Repair and Replacement",
      description: (
        <><p>If <strong>repair costs</strong> for your older fridge or freezer exceed 50% of a new unit's price, or if the <strong>appliance</strong> is over ten years old, replacement may be more economical. Upgrading to a newer model saves on future repairs and offers better <strong>energy</strong> efficiency. We'll assess your unit's <strong>total repair cost</strong> and condition to guide you in making the best choice for your home.</p></>
      ),
    },
  
    {
      id: "content8",
      title: "Contact Us",
      heading: "Contact Us Today for Household Freezer Repair",
      description: (
        <> <p>For expert <strong>freezer repair</strong> in <strong>Los Angeles</strong>, trust Same Day Appliance Repair for quick, reliable service. Whether a minor fix or a complex overhaul, our skilled technicians are equipped to handle the job with care and precision. <strong>Schedule</strong> your service appointment with us today to keep your <strong>appliances</strong> running efficiently. </p></>
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
