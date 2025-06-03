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
  heading: "Why Choose Same Day Appliance Repair for Dishwasher Repair Services?",
      img: "/dishwasher/dishwasher-repair-los-angeles.webp",
      description: (
        <>
          <p>Choosing Same Day Appliance Repair means selecting a team of certified <strong>appliance repair technicians</strong> dedicated to diagnosing issues, providing effective fixes, and offering maintenance tips to keep your <strong>dishwasher</strong> running smoothly. Here's why homeowners trust us for dishwasher repair:</p><ul><p><strong>Same-Day Appointments</strong>: We know the importance of a functioning dishwasher in your daily routine. We offer same-day <strong>service appointments</strong> to work around your schedule.</p><p><strong>Certified Technicians</strong>: Our team is <strong>factory-trained</strong> and has extensive experience across all major dishwasher brands and models. We diagnose accurately and repair efficiently, ensuring lasting performance.</p><p><strong>Use of Original Parts</strong>: We use only original parts from trusted suppliers, each backed by a <strong>warranty period,</strong> to ensure reliable, long-lasting repairs.</p><p><strong>Transparent Pricing</strong>: We provide a detailed cost breakdown before starting any repair. With precise <strong>labor costs </strong>and no hidden fees, you'll know exactly what to expect.</p></ul>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Dishwashers We Repair",
  heading: "Types of Dishwashers We Repair and Our Specialized Approach",
      img: "/dishwasher/dishwasher-2.webp",
      description: (
        <><p>With comprehensive experience across various dishwasher types, we handle all <strong>dishwasher problems</strong>. Here's our approach to each:</p><h3>Built-In Dishwasher Repair</h3><p>Built-in dishwashers are standard in many homes, often facing issues like <strong>drain clogs</strong>, <strong>spray arm blockages</strong>, and <strong>heating element failures</strong>. Our technicians inspect and repair each component to restore efficient cleaning and drying.</p><h3>Portable Dishwasher Repair</h3><p>Portable dishwashers are convenient, but they can encounter problems such as <strong>water line clogs</strong>, <strong>float switch malfunctions</strong>, and <strong>door seal leaks</strong>. We thoroughly check for any blockages or faulty parts to keep your portable unit working smoothly.</p><h3>Countertop Dishwasher Repair</h3><p>Countertop dishwashers, while compact, can experience <strong>water flow issues</strong> and <strong>filter clogs</strong>. Our team identifies and resolves these issues, ensuring reliable cleaning without the hassle of hand-washing dishes.</p> </>
      ),
    },
    {
      id: "content3",
      title: "Common Dishwasher Problems We Fi",
  heading: "Common Dishwasher Problems We Fix",
      img: "/dishwasher/dishwasher-3.webp",
      description: (
        <>
          <p>With extensive experience handling all dishwasher problems, our technicians diagnose and repair quickly to keep your kitchen running efficiently. Here are some common dishwasher issues we address:</p><ul><p><strong>Dishwasher Not Draining</strong>: If water is left after a wash cycle, it's often due to a <strong>clogged drain</strong>, <strong>filter</strong>, or <strong>drain hose</strong>. We inspect these components, clean or replace them as needed, and ensure proper drainage.</p><p><strong>Dishes Not Getting Clean</strong>: When dishes are still dirty after a wash, it could mean <strong>clogged spray arms</strong>, a malfunctioning <strong>heating element</strong>, or a problem with the <strong>inlet valve</strong>. We troubleshoot and fix these issues so your dishes come out spotless.</p><p><strong>Leaking Dishwasher</strong>: Leaks can result from <strong>damaged door seals</strong>, <strong>cracked hoses</strong>, or <strong>loose water line connections</strong>. We pinpoint the source and make repairs to prevent future leaks that could damage your floors.</p><p><strong>Strange Noises</strong>: Grinding or squealing sounds often indicate <strong>motor issues</strong> or trapped <strong>food particles</strong> in the spray arms. Our technicians check for and fix any misaligned or worn components.</p><p><strong>Dishwasher Not Filling with Water</strong>: This issue can stem from a faulty <strong>float switch</strong>, <strong>inlet valve</strong>, or <strong>door latch</strong>. We assess and replace malfunctioning components to restore water flow and ensure a complete wash cycle.</p></ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Dishwasher Needs Repair",
  heading: "Signs Your Dishwasher Needs Repair – When to Call Us",
      img: "/dishwasher/dishwasher-5.webp",
      description: (
        <>
          <p>Our factory-trained technicians can recognize when your dishwasher needs professional repair. Here's what to look out for:</p><ul><p><strong>Residue or Food Particles on Dishes</strong><br />If dishes aren't coming out clean, this may indicate low water pressure, a <strong>clogged filter</strong>, or <strong>spray arm</strong> issues. Scheduling a repair can restore your dishwasher's cleaning power.</p><p><strong>Water Pooling at the Bottom</strong><br />Water left at the end of the cycle points to drainage problems or a <strong>blocked drain hose</strong>. Unaddressed, this can lead to more significant repairs, so please call us early.</p><p><strong>Inconsistent Cleaning Cycles</strong><br />If your dishwasher stops mid-cycle or doesn't complete the wash, it could signal an issue with the <strong>control panel </strong>or <strong>motor</strong>. We can troubleshoot these problems to keep your dishwasher running smoothly.</p><p><strong>Unpleasant Odors</strong><br />Persistent smells often mean <strong>food particles</strong> are trapped in the filter or drain. Regular cleaning can help, but a professional inspection may be necessary if odors persist.</p></ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Full-Service Dishwasher Repair",
  heading: "Full-Service Dishwasher Repair for Every Home",
      img: "/dishwasher/dishwasher-6.webp",
      description: (
        <><h3><strong>Kitchen Dishwasher Repair</strong></h3><p>Your <strong>dishwasher</strong> is essential for keeping dishes clean and your kitchen organized. Whether you have a <strong>built-in, portable, or countertop model</strong>, our technicians are equipped to handle any issue, from <strong>drainage problems</strong> to <strong>spray arm malfunctions</strong>. Our <strong>same-day service</strong> ensures your dishwasher is quickly restored to peak performance, helping you avoid handwashing piles of dishes and keep your kitchen running smoothly.</p><h3><strong>Dishwasher Repair for Large Families</strong></h3><p>Dishwashers in larger households often handle frequent, heavy loads, making reliability crucial for efficient operation. Our technicians specialize in diagnosing and repairing issues specific to <strong>high-capacity units</strong>, such as <strong>motor strain</strong>, <strong>water temperature adjustments</strong>, and <strong>advanced cycle troubleshooting</strong>, ensuring your dishwasher maintains the perfect cleaning environment for all your family's dishes.</p><h3><strong>High-End and Built-In Dishwasher Repair</strong></h3><p>Luxury and built-in dishwashers from brands like <strong>Bosch, Miele, and KitchenAid</strong> feature advanced technology and are designed to blend seamlessly with your kitchen. These models, with <strong>custom wash cycles, advanced filtration systems</strong>, and <strong>specialized spray configurations</strong>, require expert care. Our technicians are trained to handle issues such as <strong>sensor calibration, control board repairs,</strong> and <strong>leak prevention</strong> using only high-quality parts and techniques specifically crafted for luxury models. We ensure your dishwasher operates efficiently while preserving its stylish design.</p><h3><strong>Wine Glass and Specialty Dishware Cycle Repair</strong></h3><p>For homeowners with <strong>specialty dishware needs</strong>, including delicate wine glasses or fine china, precise <strong>cycle and temperature control</strong> is essential. We provide specialized repair services for these units, addressing <strong>sensor adjustments, cycle settings,</strong> and <strong>rack customization issues</strong> to ensure your dishes and glassware are stored and cleaned at the ideal settings. Our technicians make sure your specialty cycles perform flawlessly, safeguarding your valuable items.</p><p>With repair solutions for every type of dishwasher, including <strong>high-end and specialty models</strong>, we help keep your appliances running smoothly for optimal cleaning and efficiency. <strong>Call us today to schedule a fast and reliable repair service</strong> and enjoy the convenience of a fully functional dishwasher in your kitchen.</p></>
      ),
    },
    {
      id: "content6",
      title: "Dishwasher Maintenance Service",
  heading: "Routine Dishwasher Maintenance Service for Longevity and Efficiency",
      description: (
        <><p>Regular maintenance is essential to prevent common issues and extend your dishwasher's lifespan. Here's what our technicians recommend:</p><ul><p><strong>Filter and Drain Cleaning</strong>: Keeping filters and drains clear prevents clogs and ensures smooth operation. We offer professional cleaning for efficient water flow.</p><p><strong>Spray Arm Checks</strong>: <strong>Spray arms</strong> can become blocked by food or soap buildup. Our technicians inspect and clean these components to maintain optimal water circulation.</p><p><strong>Door Seal Inspection</strong>: A damaged <strong>door seal</strong> can lead to leaks. We examine and replace worn seals to prevent future issues.</p></ul><p>Don't wait for issues to arise—<strong>call us today</strong> to schedule routine maintenance and keep your dishwasher performing at its best.</p></>
      ),
    },
    {
      id: "content7",
      title: "Contact Us",
  heading: "Contact Us for Dishwasher Repair Services in Los Angeles",
      description: (
        <> <p>If your dishwasher isn't working properly, <strong>don't wait</strong>. Contact <strong>Same Day Appliance Repair</strong> for <strong>same-day dishwasher repair services</strong>. Serving Los Angeles and surrounding areas, we provide reliable, affordable solutions to get your dishwasher back in working order.</p></>
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
