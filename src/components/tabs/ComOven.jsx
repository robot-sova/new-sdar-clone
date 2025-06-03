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
  heading: "Why Choose Same Day Appliance Repair for Commercial Oven Repair?",
      img: "/commercial-oven-stove/commercial-oven-1.webp",
      description: (
        <><p>When you choose <strong>Same Day Appliance Repair</strong>, you're selecting a team of <strong>trained technicians</strong> with the <strong>right tools, top-quality parts</strong>, and <strong>years of experience</strong> to fix any <strong>commercial oven</strong>. Here's why businesses trust us with their <strong>appliance repairs</strong>:</p>
        <p><strong>Same Day Service:</strong> We know a <strong>working oven</strong> is crucial for your business, and <strong>downtime</strong> can be disastrous. That's why we offer <strong>same-day service</strong> to get your oven up and running, restoring your kitchen to normal operations quickly.</p>
        <p><strong>Trained Technicians:</strong> Our technicians are not only <strong>trained and certified</strong> but bring <strong>years of experience</strong> across all major <strong>commercial oven brands and models</strong>. Whether it's a <strong>simple fix</strong> or a more complex problem, we have the knowledge to <strong>diagnose and repair</strong> your oven fast and accurately.</p>
        <p><strong>Top-Quality Parts:</strong> We use only <strong>top-quality, original parts</strong> from approved suppliers. By choosing <strong>quality components</strong>, we ensure your oven operates <strong>efficiently and reliably</strong>, minimizing the risk of future issues and extending the life of your unit.</p>
        <p><strong>No Hidden Fees:</strong> We provide a <strong>clear, upfront quote</strong> for <strong>labor and parts</strong>, so there are no surprises. You'll know the exact cost before we start, ensuring full transparency and control over your <strong>repair budget</strong>.</p></>
      ),
    },
    {
      id: "content2",
      title: "Commercial Oven Types We Repair",
  heading: "Common Commercial Oven Types We Repair and Our Approach",
      img: "/commercial-oven-stove/commercial-oven-2.webp",
      description: (
        <><h3><strong>Convection Oven Repair: Ensuring Even Heat Distribution</strong></h3>
        <p>Convection ovens are essential for commercial kitchens that require even heat distribution for cooking. Frequent issues include malfunctioning fans, temperature control problems, and heating element failures. Our technicians will inspect and repair the fan motor, thermostats, and heating elements to ensure your oven operates at the proper temperatures and provides consistent cooking results.</p>
        
        <h3><strong>Gas Oven Repair: Handling Pilot Light Issues and More</strong></h3>
        <p>Gas ovens often experience pilot lights, burners, and temperature regulation issues. If your pilot light won't stay lit or if you're having trouble reaching the correct heat, our team is equipped to fix these issues quickly. We use OEM parts to ensure your oven is repaired to top manufacturer standards, and our repair services will get your commercial oven back in top shape.</p></>
      ),
    },
    {
      id: "content3",
      title: "Commercial Oven Problems We Fix",
  heading: "Common Commercial Oven Problems and Ways We Fix Them",
      img: "/commercial-oven-stove/commercial-oven-3.webp",
      description: (
        <><h3><strong>Oven Not Heating Properly</strong></h3>
        <p><strong>Customer Concern</strong>: "My oven isn't reaching the correct temperature, and my food isn't cooking evenly."</p>
        <p><strong>How We Fix It</strong>: If your oven isn't heating properly, we begin by inspecting the heating elements, thermostats, and fans. Often, a faulty thermostat or burnt-out heating element causes uneven cooking. Our team will replace any faulty parts with OEM components, ensuring reliable, long-term results and optimal temperatures.</p>

        <h3><strong>Unevenly Cooked Food</strong></h3>
        <p><strong>Customer Concern</strong>: "My dishes are coming out overcooked in some spots and undercooked in others."</p>
        <p><strong>How We Fix It</strong>: This issue is often related to problems with the fan motor or heating elements in convection ovens. We'll inspect the oven thoroughly, replacing or repairing any worn-out components to restore proper airflow and heat distribution for even cooking.</p>
        
        <h3><strong>Oven Door is Not Sealing Properly</strong></h3>
        <p><strong>Customer Concern</strong>: "The oven door won't close all the way, causing the oven to lose heat."</p>
        <p><strong>How We Fix It</strong>: A damaged or worn-out door gasket can lead to heat escaping, affecting cooking performance and energy efficiency. We'll replace the door gaskets and inspect the door hinges to ensure a proper seal, helping your oven maintain consistent temperatures and saving you on energy costs.</p>

        <h3><strong>Pilot Light Keeps Going Out</strong></h3>
        <p><strong>Customer Concern</strong>: "My gas oven's pilot light keeps going out, and I can't get the oven to stay on."</p>
        <p><strong>How We Fix It</strong>: Problems with pilot lights are standard in gas ovens and are typically caused by blockages or faulty ignition components. Our technicians will clean the pilot assembly, repair any gas flow issues, and replace broken components to restore reliable ignition.</p>

        <h3><strong>Oven Making Strange Noises</strong></h3>
        <p><strong>Customer Concern</strong>: "My oven makes loud, strange noises when I turn it on."</p>
        <p><strong>How We Fix It</strong>: Strange noises can often be traced back to issues with the fan motor, burners, or conveyor systems. We inspect these components carefully, replacing worn-out parts to restore quiet, smooth operation and prevent further equipment damage.</p>

        <h3><strong>Oven Won't Turn On</strong></h3>
        <p><strong>Customer Concern</strong>: "The oven won't start, and I need it fixed immediately."</p>
        <p><strong>How We Fix It</strong>: If your oven isn't turning on, our team checks the power supply, control board, and ignition system for any issues. Once we identify the problem, we will fix or replace the malfunctioning components, ensuring your commercial oven is back up and running without delay.</p></>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Commercial Oven Needs Repair",
  heading: "Signs Your Commercial Oven Needs Repair – When and Why to Call Us",
      img: "/commercial-oven-stove/commercial-oven-5.webp",
      description: (
        <><p>Identifying early signs of commercial oven issues can help you avoid costly repairs, minimize downtime, and keep your business running smoothly. Here's a guide from our expert technicians on when and why to call us:</p>
        <p><strong>Unusual Smells:</strong> Strange or unpleasant odors coming from your oven can signal issues such as burnt wiring, gas leaks, or food debris trapped in hard-to-reach areas. These smells could compromise food quality or even pose a safety risk. If you notice any unusual odors, call us immediately for an inspection. We'll check for potential hazards, clean any buildup, and ensure your oven is safe for use.</p>
        <p><strong>Heat Inconsistency or Uneven Cooking:</strong> If your oven is struggling to maintain a consistent temperature or food is cooking unevenly, it could be due to malfunctioning heating elements, temperature sensors, or a faulty thermostat. Maintaining even heat is essential to the quality of your dishes, so let our technicians assess the issue promptly to keep your kitchen running smoothly.</p>
        <p><strong>Visible Smoke or Excessive Grease Buildup:</strong> Visible smoke during normal operation or grease accumulation can be a sign of poor ventilation or malfunctioning fans. Ignoring these issues can lead to fire hazards and poor kitchen air quality. Contact us, and we'll clear any obstructions, inspect the ventilation system, and get your oven back to a safe operating condition.</p>
        <p><strong>Strange Noises:</strong> Buzzing, clicking, or rattling sounds are often signs of worn-out components like fans, motors, or loose electrical connections. These noises indicate that your oven is overworking, potentially increasing energy costs and risking further damage. If you hear anything unusual, call us to investigate and resolve the issue to prevent further wear and tear.</p>
        <p><strong>Failure to Ignite or Heat Up Properly:</strong> If your gas oven won't ignite or an electric oven isn't reaching the right temperature, it may be due to issues with the ignition system, gas lines, or heating elements. Our technicians can quickly diagnose and repair these critical components, ensuring your oven is ready for reliable use.</p>
        <p><strong>Door Seal Damage or Heat Loss:</strong> A damaged or worn door seal can allow heat to escape, leading to longer cooking times and increased energy costs. Consistent heat is essential for food safety and efficiency, so let us replace worn seals to improve your oven's performance.</p></>
      ),
    },
    {
      id: "content5",
      title: "Commercial Oven Repair",
  heading: "Commercial Oven Repair for Various Industries",
      img: "/commercial-oven-stove/commercial-oven-6.webp",
      description: (
        <><h3><strong>Restaurant Oven Repair</strong></h3>
        <p>We know how essential a reliable <strong>commercial oven</strong> is in a <strong>restaurant</strong> environment. We provide fast and efficient <strong>oven repair services</strong> to ensure your <strong>kitchen</strong> continues operating at full capacity. Whether it's <strong>gas ovens</strong> or <strong>convection ovens</strong>, we are here to serve you.</p>

        <h3><strong>Bakery Oven Repair</strong></h3>
        <p>Bakeries rely on precision and consistency in their ovens to produce high-quality products. Our <strong>team</strong> of <strong>technicians</strong> understands the specific needs of <strong>bakery ovens</strong>, and we offer timely <strong>repairs</strong> to keep your baked goods coming out perfectly every time.</p>

        <h3><strong>Hotel Oven Repair</strong></h3>
        <p>Hotels need to keep their <strong>commercial kitchens</strong> running without disruption. Our <strong>experienced team</strong> provides <strong>commercial oven repair</strong> for all major <strong>appliance</strong> brands to keep your <strong>business</strong> running smoothly and guests happy.</p>  </>
      ),
    },
    {
      id: "content6",
      title: "Commercial Oven Maintenance",
  heading: "Expert Commercial Oven Repair and Maintenance",
      img: "",
      description: (
        <> <p>At <strong>Same Day Appliance Repair</strong>, we are dedicated to providing <strong>quality commercial oven repair</strong> services to keep your <strong>business</strong> running efficiently. We recommend scheduling <strong>regular maintenance</strong> to prevent breakdowns and extend the lifespan of your <strong>commercial ovens</strong>. Our <strong>factory-trained technicians</strong> are skilled in maintaining <strong>commercial appliances</strong> and ensuring they are operating at peak performance.</p>
        <h3><strong>Maintenance Tips for Commercial Ovens</strong></h3>
        <p>By incorporating routine <strong>maintenance</strong> practices, you can avoid costly <strong>repairs</strong> and ensure your <strong>oven</strong> operates efficiently.</p>
        
          <strong>Clean Heating Elements Regularly</strong>: Build-up on <strong>heating elements</strong> can cause uneven <strong>cooking</strong> and decrease <strong>oven</strong> efficiency. Regular cleaning will prevent these issues.
          <strong>Check Door Gaskets</strong>: A damaged <strong>door gasket</strong> can allow heat to escape. Regularly inspect the <strong>gasket</strong> and replace it as needed.
          <strong>Monitor Temperature Fluctuations</strong>: Fluctuations in <strong>temperature</strong> can signal a problem with the <strong>thermostat</strong> or <strong>control board</strong>. If you notice inconsistencies, contact us for a quick <strong>repair</strong>.
          <strong>Ensure Proper Ventilation</strong>: Keep your <strong>oven</strong> well-ventilated to prevent overheating and <strong>equipment</strong> damage.
          </>
      ),
    },

    {
      id: "content7",
      title: "Repair or Replacement",
  heading: "Deciding Between Repair and Replacement",
      img: "",
      description: (
        <> <p>When your <strong>commercial oven</strong> experiences frequent breakdowns, you may need to decide between <strong>repair</strong> and replacement. If the <strong>repair costs</strong> exceed 50% of the replacement cost, it might be more economical to invest in a new unit. Our <strong>technicians</strong> will assess your <strong>oven</strong> thoroughly and offer professional advice based on your needs.</p></>
      ),
    },

    {
      id: "content8",
      title: "Contact Us",
  heading: "Contact Us for Expert Commercial Oven Repair",
      img: "",
      description: (
        <><p>When your <strong>commercial oven</strong> needs <strong>repair</strong>, trust the experts at <strong>Same Day Appliance Repair</strong>. We offer fast, reliable <strong>repair services</strong> across <strong>Los Angeles</strong> and nearby areas. Our <strong>technicians</strong> are equipped with the skills and knowledge to handle any <strong>oven issue</strong>, big or small. <strong>Contact us today</strong> to schedule your <strong>repair service</strong> and keep your <strong>commercial kitchen</strong> running efficiently!</p></>
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
