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
      heading: "Why Choose Us for Fireplace Repairs?",
      img: "/fireplace-repair/best-fireplace-repair-services.webp",
      description: (
        <> <p>When it comes to fireplace repairs, Same Day Appliance Repair is a trusted name in Los Angeles. Here's why homeowners consistently rely on us:</p><h3><strong>Expert Technicians</strong></h3><p>Our experienced fireplace repairmen are factory-trained and skilled in handling all types of fireplaces, including <strong>gas fireplaces</strong>, <strong>wood-burning fireplaces</strong>, and <strong>electric fireplaces</strong>. Whether it's replacing a remote control, repairing the damper, or addressing a faulty control board, we deliver expert solutions tailored to your specific needs.</p><h3><strong>Comprehensive Service</strong></h3><p>We cover every aspect of fireplace maintenance and repair, including <strong>annual inspections</strong>, <strong>chimney cleaning</strong>, and <strong>component replacements</strong>. Our technicians are equipped to address issues ranging from defective fan motors to smoke buildup, ensuring your fireplace operates efficiently and safely.</p><h3><strong>High-Quality Repairs</strong></h3><p>We only use original replacement parts and proven techniques to ensure lasting repairs. From repairing fan blades and mortar to addressing malfunctioning fireboxes or control boards, we guarantee results that meet or exceed industry standards.</p><h3><strong>Timely Appointments</strong></h3><p>We understand the importance of having a functional fireplace, especially during colder months. Our same-day service ensures prompt attention to your repair needs, minimizing downtime and inconvenience.</p><h3><strong>Customized Solutions</strong></h3><p>Every fireplace is unique, and so are its repair requirements. Whether you're dealing with a <strong>gas fireplace repair</strong>, a <strong>wood-burning fireplace issue</strong>, or an <strong>electric fireplace malfunction</strong>, we provide tailored services that address your specific problem.</p><h3><strong>Focus on Safety</strong></h3><p>Safety is our priority. Our professional technicians thoroughly inspect your fireplace to identify potential hazards, such as smoke leakage, damaged dampers, or unsafe chimney conditions, and resolve them to ensure your home remains safe and comfortable.</p><h3><strong>Transparent Communication</strong></h3><p>We believe in keeping our customers informed every step of the way. After diagnosing your fireplace issue, we explain the problem clearly and provide a detailed repair plan before starting any work.</p> </>
      ),
    },
    {
      id: "content2",
      title: "Fireplace Types We Repair",
      heading: "Fireplace Types We Repair and Our Approach",
      img: "/fireplace-repair/electric-fireplace-repair-services.webp",
      description: (
        <> <p>Our team handles <strong>fireplace repairs</strong> for all types of fireplaces. Here's what you can expect:</p><h3><strong>Gas Fireplace Repair</strong></h3><p>Common issues with <strong>gas fireplaces</strong> include:</p><p>Pilot light malfunctions</p><p>Clogged burners</p><p>Defective remote control systems</p><p>Our <strong>fireplace repairmen</strong> inspect the gas lines, clean burners, and test components like the <strong>remote control</strong> to ensure safe and efficient operation.</p><h3><strong>Electric Fireplace Repair</strong></h3><p><strong>Electric fireplaces</strong> are convenient but can experience:</p><p>Heating element failures</p><p>Control panel malfunctions</p><p>Blower motor issues</p><p>We replace worn-out components and restore functionality, ensuring your <strong>electric fireplace</strong> heats your room effectively.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Common Fireplace Problems",
      heading: "Common Fireplace Problems and Our Repair Approach",
      img: "/fireplace-repair/fireplace-repair-los-angeles.webp",
      description: (
        <><h3><strong>Fireplace Not Heating Properly</strong></h3><p><strong>How We Fix It:</strong> If your fireplace isn't generating enough heat, we inspect components like the <strong>gas valve</strong>, <strong>igniter</strong>, or <strong>burner ports</strong>. For <strong>wood-burning fireplaces</strong>, we check for blockages in the <strong>chimney</strong> or damage to the <strong>firebox</strong>. Once the root cause is identified, we clean, repair, or replace the necessary components to restore optimal heating performance.</p><h3><strong>Excessive Smoke or Poor Ventilation</strong></h3><p><strong>How We Fix It:</strong> Smoke buildup often indicates issues with the <strong>damper</strong>, <strong>chimney</strong>, or <strong>ventilation system</strong>. Our technicians perform a thorough inspection, clearing blockages and repairing or replacing defective dampers to ensure proper airflow. For gas fireplaces, we check the <strong>vent hood</strong> and <strong>blower</strong> for obstructions.</p><h3><strong>Unusual Noises During Operation</strong></h3><p><strong>How We Fix It:</strong> Noises like buzzing, rattling, or grinding in a gas or electric fireplace often point to issues with the <strong>fan motor</strong>, <strong>blower wheel housing</strong>, or <strong>motor bearings</strong>. We inspect these components and replace any that are worn or defective, ensuring quiet and smooth operation.</p><h3><strong>Damaged or Inoperable Remote Control</strong></h3><p><strong>How We Fix It:</strong> A malfunctioning <strong>remote control</strong> for gas or electric fireplaces may result from battery issues, signal interference, or a faulty receiver. We troubleshoot the remote system, replace batteries or parts as needed, and test the system to ensure it operates seamlessly.</p><h3><strong>Pilot Light Won't Stay Lit (Gas Fireplaces)</strong></h3><p><strong>How We Fix It:</strong> A pilot light issue may stem from a faulty <strong>thermocouple</strong>, <strong>pilot assembly</strong>, or <strong>gas supply</strong>. We inspect these components, clean the assembly, and replace defective parts to restore consistent ignition.</p><h3><strong>Faulty Lighting or Flame Control</strong></h3><p><strong>How We Fix It:</strong> If your gas or electric fireplace's <strong>lights or flame control</strong> aren't functioning properly, we troubleshoot the <strong>control board</strong>, <strong>switches</strong>, and wiring. We repair or replace defective components to ensure full functionality.</p><h3>Let Our Experts Restore Your Fireplace</h3><p>No matter the issue, our professional <strong>fireplace repairmen</strong> are equipped to provide effective and lasting solutions for your <strong>gas, wood-burning, or electric fireplaces</strong>. Call us today to schedule an inspection and enjoy a warm, safe, and efficient fireplace once again.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Fireplace Needs Repairs",
      heading: "Signs Your Gas or Electric Fireplace Needs Repairs",
      img: "/fireplace-repair/gas-fireplace-repair-near-me.webp",
      description: (
        <> <p>Identifying issues with your <strong>gas or electric fireplace</strong> early can help prevent costly repairs and ensure safety. Look out for these common warning signs:</p><h3><strong>The buildup of Soot or Residue</strong></h3><p>Excessive <strong>soot</strong>, creosote, or residue around the fireplace or in the venting system can reduce airflow and lead to smoke or odor issues. For <strong>gas fireplaces</strong>, residue buildup can clog burners, affecting efficiency. <strong>Regular cleaning</strong> is essential to maintain proper airflow and prevent potential hazards.</p><h3><strong>Damaged Firebox or Components</strong></h3><p>Cracks, worn mortar, or corrosion in the <strong>firebox</strong> can compromise the structure and safety of your fireplace. For <strong>electric fireplaces</strong>, damage to heating elements or visual components can reduce efficiency and functionality. Our technicians repair structural issues in <strong>gas fireplaces</strong> and replace faulty parts in <strong>electric units</strong> to restore full functionality.</p><h3><strong>Pilot Light or Ignition Issues</strong></h3><p>A <strong>gas fireplace</strong> that fails to ignite could indicate problems with the <strong>pilot light</strong> or ignition system. <strong>Service technicians </strong>can clean, repair, or replace these components to restore safe and reliable operation. For <strong>electric fireplaces</strong>, unresponsive controls or faulty circuits may require recalibration or replacement.</p><h3><strong>Smoke or Odor in the Room</strong></h3><p><strong>Gas fireplaces</strong> emitting odors or <strong>electric fireplaces</strong> producing unusual smells might signal internal issues. Poor ventilation or a <strong>faulty damper</strong> in gas units can also lead to smoke buildup. We inspect and repair vents, dampers, and filters to ensure clean, efficient operation.</p><h3><strong>Unusual Noises or Inconsistent Heating</strong></h3><p>Rattling, buzzing, or clicking sounds in <strong>gas or electric fireplaces</strong> can point to issues with blowers, fans, or internal components. Our technicians identify the source of the noise and replace or repair the faulty parts to restore quiet, consistent performance.</p><p>If you notice any of these issues, <strong>schedule a service appointment</strong> with our experienced <strong>fireplace repair technicians </strong>immediately. Timely repairs ensure your <strong>gas or electric fireplace</strong> operates safely, efficiently, and reliably.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Full-Service Fireplace Repair",
      heading: "Full-Service Fireplace Repair for Every Home",
      img: "/fireplace-repair/gas-fireplace-service-los-angeles.webp",
      description: (
        <> <h3><strong>Living Room Fireplace Repair</strong></h3><p>Your living room fireplace is the centerpiece of comfort and warmth in your home. Whether you have a <strong>gas fireplace</strong> or an <strong>electric fireplace</strong>, our technicians are equipped to handle any issue, from faulty <strong>pilot lights</strong> and <strong>damaged fireboxes</strong> to malfunctioning <strong>blower fans</strong>. Our same-day service ensures your fireplace is restored to safe and efficient operation quickly so you can enjoy a cozy atmosphere without delays.</p><h3><strong>Fireplace Repair for Large Homes</strong></h3><p>Fireplaces in larger homes are often used more frequently and must be reliable to heat larger spaces. Our technicians specialize in diagnosing and repairing issues unique to high-capacity fireplaces, including <strong>ventilation blockages</strong>, <strong>damper malfunctions</strong>, and <strong>motor issues</strong>. We ensure your fireplace operates efficiently, providing consistent warmth throughout your home.</p><h3><strong>High-End and Built-In Fireplace Repair</strong></h3><p>Luxury and built-in fireplaces from brands featuring advanced designs and custom configurations require specialized care. Whether you own a <strong>high-end gas fireplace</strong> with remote control features or an elegantly integrated <strong>electric fireplace</strong>, our technicians are trained to handle intricate repairs, such as fixing <strong>control boards</strong>, recalibrating <strong>heat settings</strong>, or addressing <strong>smoke buildup</strong>. We use high-quality parts and techniques tailored for premium models, ensuring your fireplace retains its performance and sophisticated style.</p><h3><strong>Gas and Electric Fireplace Maintenance</strong></h3><p>Routine maintenance for <strong>gas fireplaces</strong> includes inspecting the <strong>ignition system</strong>, cleaning <strong>burner ports</strong>, and ensuring proper <strong>gas flow</strong>. For <strong>electric fireplaces</strong>, we check components like <strong>heating elements</strong>, <strong>fan motors</strong>, and <strong>light displays</strong>, addressing any malfunctions to prevent further issues. Regular maintenance ensures your fireplace is always ready to provide warmth and ambiance when you need it.</p><p>With repair solutions for every type of fireplace, including <strong>gas, wood-burning, and electric models</strong>, we ensure your unit is safe, efficient, and tailored to your home's needs. Call us today to schedule a fast and reliable <strong>fireplace repair service</strong> and bring warmth back to your living space.</p>
        </>
      ),
    },

    {
      id: "content6",
      title: "Fireplace Maintenance Services",
      heading: "Fireplace Maintenance Services",
      heading: "Professional Gas and Electric Fireplace Maintenance Services – What Our Technicians Do",
      description: (
        <><p>Regular maintenance is essential for keeping your <strong>gas or electric fireplace</strong> in optimal condition. Our comprehensive services ensure your fireplace is safe, efficient, and ready to provide warmth and comfort.</p><h3><strong>Regular Cleaning</strong></h3><p>For <strong>gas fireplaces</strong>, we clean burners, pilot lights, and venting systems to ensure proper airflow and prevent clogs. For <strong>electric fireplaces</strong>, we clean heating elements, vents, and fans to maintain peak performance.</p><h3><strong>Annual Inspections</strong></h3><p>Our technicians perform thorough <strong>annual inspections</strong> to assess all components, including <strong>ignition systems, burners, dampers</strong>, and <strong>electrical connections</strong>. We ensure your fireplace operates efficiently and safely, identifying potential issues before they become costly repairs.</p><h3><strong>Component Repairs and Replacement</strong></h3><p>For <strong>gas fireplaces</strong>, we repair or replace worn <strong>pilot lights, thermocouples</strong>, and other essential parts. For <strong>electric fireplaces</strong>, we address faulty <strong>control panels, heating elements</strong>, and damaged wiring to restore full functionality.</p><h3><strong>Ventilation and Chimney Maintenance</strong></h3><p>For <strong>gas fireplaces</strong>, we inspect and clean vents to prevent airflow issues and ensure proper ventilation. If your fireplace uses a chimney, our technicians clean and maintain it to prevent debris buildup and improve overall safety.</p><h3><strong>Firebox Repairs</strong></h3><p>For <strong>gas fireplaces</strong>, we check the integrity of the firebox and repair cracks or damaged seals. For <strong>electric fireplaces</strong>, we ensure the internal structure and visual displays are working correctly for a safe and efficient heating experience.</p><p>Preventative maintenance extends the lifespan of your <strong>gas or electric fireplace</strong> while improving performance and safety. <strong>Contact us today</strong> to schedule your maintenance appointment and enjoy reliable warmth year-round!</p></>
      ),
    },
  
    {
      id: "content7",
      title: "Repair or Replace",
      heading: "Deciding Between Repair and Replacement",
      description: (
        <>
         <p>If your <strong>fireplace</strong> frequently malfunctions or requires extensive repairs, it may be time to consider replacement. Here's what we evaluate:</p><p><strong>Age of the Fireplace</strong>: Older fireplaces may not meet modern safety standards or efficiency expectations.</p><p><strong>Repair Costs</strong>: If the repair cost exceeds 50% of the price of a new unit, replacement may be more cost-effective.</p><p><strong>Energy Efficiency</strong>: Upgrading to a newer model can lower energy bills and improve performance.</p></>
      ),
    },
  
    {
      id: "content8",
      title: "Contact Us",
      heading: "Contact Us for Fireplace Repairs in Los Angeles",
      description: (
        <><p>Don't wait for small problems to escalate—contact us today for <strong>professional fireplace repair services</strong> in Los Angeles and surrounding areas. Our <strong>best fireplace repair services</strong> ensure your <strong>fireplace</strong> is fixed quickly, affordably, and reliably.</p>

          
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
