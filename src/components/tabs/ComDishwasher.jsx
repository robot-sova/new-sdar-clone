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
  heading: "Why Choose Same Day Appliance Repair for Commercial Dishwasher Services?",
      img: "/commercial-dishwasher/commercial-dishwasher-5.webp",
      description: (
        <><p><strong>Expert Service</strong>: Our <strong>factory-trained technicians</strong> have the knowledge and <strong>expertise</strong> to <strong>repair</strong> all significant commercial dishwashers and appliance brand<strong>s</strong>.</p><p><strong>Same-Day Service</strong>: We understand the importance of running your business, so we offer <strong>same-day repair services</strong> to minimize downtime.</p><p><strong>Preventative Maintenance</strong>: Our <strong>regularly scheduled maintenance</strong> services ensure that your <strong>appliances</strong> are in top working condition, preventing costly <strong>repairs</strong> and improving efficiency.</p><p><strong>Quality Service</strong>: We pride ourselves on delivering professional, high-quality <strong>service</strong> for all <strong>commercial kitchen </strong>appliances, ensuring your <strong>equipment</strong> is fixed quickly and effectively.</p><p><strong>Warranty</strong>: We stand by our <strong>repairs</strong> with a <strong>warranty</strong>, giving you peace of mind and protecting your investment in your <strong>business</strong>.</p></>
      ),
    },
  
    {
      id: "content2",
      title: "Commercial Dishwasher Problems",
  heading: "Common Commercial Dishwasher Problems and How We Fix Them",
      img: "/commercial-dishwasher/commercial-dishwasher-3.webp",
      description: (
        <><h4><strong>Dishwasher Not Draining</strong></h4><p>A common issue with <strong>commercial dishwashers</strong> is improper draining, resulting in dirty <strong>dishes</strong> and unsanitary conditions in your <strong>business</strong>.</p><p><strong>How We Fix It</strong>:<br />Our <strong>technicians</strong> inspect and <strong>fix</strong> clogged <strong>filters</strong> and blocked <strong>drain lines</strong> to ensure proper water flow. We replace faulty <strong>components</strong> such as the <strong>drain pump</strong> and check for <strong>leaks</strong> to keep your <strong>dishwasher</strong> running smoothly and provide clean water circulating through the system.</p><h4><strong>Dishwasher Leaking Water</strong></h4><p>Leaking water from a <strong>commercial dishwasher</strong> can lead to water damage, slips, and increased <strong>safety</strong> concerns for your <strong>employees</strong>.</p><p><strong>How We Fix It</strong>:<br />We inspect and replace worn <strong>door gaskets</strong>, damaged hoses, and faulty <strong>components</strong> to stop the leak and prevent further damage. Our <strong>team</strong> ensures the <strong>dishwasher</strong> seals properly, helping you <strong>save money</strong> by avoiding costly repairs.</p><h4><strong>Dishwasher Not Cleaning Properly</strong></h4><p>If your <strong>dishwasher</strong> leaves <strong>dishes</strong> dirty or cloudy, it could be due to issues with the <strong>spray arms</strong>, <strong>water temperature</strong>, or <strong>detergent dispensers</strong>.</p><p><strong>How We Fix It</strong>:<br />Our <strong>factory-trained technicians</strong> clean and adjust <strong>spray arms</strong>, repair <strong>heating elements</strong>, and ensure the machine runs at the correct temperature for optimal <strong>cleaning</strong>. We'll get your <strong>dishwasher</strong> performing at its best, delivering clean, sanitized <strong>dishes</strong> every time.</p><h4><strong>Dishwasher Making Loud Noises</strong></h4><p>Unusual noises during a cycle are typically signs of problems with the <strong>motor</strong>, <strong>fan</strong>, or other internal <strong>components</strong>.</p><p><strong>How We Fix It</strong>:<br />Our <strong>team</strong> inspects and repairs worn parts like the <strong>wash pump</strong>, <strong>motor bearings</strong>, and <strong>fan</strong>, ensuring your <strong>commercial dishwasher</strong> operates smoothly and quietly. We can <strong>replace</strong> faulty parts to extend the <strong>life</strong> of your <strong>equipment</strong> and <strong>prevent downtime</strong> in your <strong>commercial kitchen</strong>.</p><h4><strong>Dishwasher Not Starting</strong></h4><p>If your <strong>dishwasher</strong> doesn't start, it could be due to an issue with the <strong>control board</strong>, <strong>door latch</strong>, or power connection.</p><p><strong>How We Fix It</strong>:<br />We check the electrical system, inspect the <strong>control board</strong>, and ensure the <strong>door latch</strong> functions appropriately. Our <strong>technicians</strong> repair or <strong>replace</strong> any malfunctioning parts to get your <strong>dishwasher</strong> up and running, preventing unnecessary delays in your <strong>business</strong> operations.</p></>
      ),
    },
  
    {
      id: "content3",
      title: "Signs Your Commercial Dishwasher Needs Repair",
  heading: "Signs Your Commercial Dishwasher Needs Repair – When and Why to Call Us",
      img: "",
      description: (
        <><p>Spotting early signs of trouble in your commercial dishwasher can help you avoid expensive repairs, keep your kitchen running smoothly, and ensure dishes are always clean and ready for use. Here's what our expert technicians recommend watching out for and why it's crucial to address these issues quickly:</p><p><strong>Unusual Odors:</strong> If your dishwasher has strange or unpleasant smells, it could indicate trapped food particles, mold buildup, or drainage issues. These odors can affect cleanliness and hygiene standards in your kitchen. Contact us if you notice any bad smells, and our team will thoroughly clean and sanitize your dishwasher to ensure a fresh, safe environment.</p><p><strong>Water Leaks or Pooling:</strong> Water around your commercial dishwasher can result from loose connections, faulty door seals, or clogged drain lines. Leaks can lead to floor damage, safety hazards, and equipment corrosion. Call us immediately to address the problem. Our technicians will identify and fix the cause to protect both your kitchen space and your equipment.</p><p><strong>Inconsistent Cleaning Results:</strong> If your dishwasher isn't consistently cleaning dishes, it could be due to clogged spray arms, a malfunctioning heating element, or issues with the water pump. This can slow down operations and lead to unclean dishes. If your dishwasher isn't performing as it should, contact us. Our team will restore its cleaning power, ensuring spotless results every time.</p><p><strong>Excessive Steam or Temperature Issues:</strong> Steam escaping from your dishwasher or temperatures that are too low or too high could mean a problem with the thermostat, heating element, or ventilation system. These issues can affect sanitation and energy efficiency. Let us inspect and repair any temperature or steam concerns to keep your dishwasher working safely and efficiently.</p><p><strong>Strange Noises:</strong> Buzzing, clanking, or grinding sounds may indicate failing components like motors, pumps, or spray arms. Odd noises mean your dishwasher is overworking and could lead to breakdowns. If you hear any unusual sounds, call us for a quick inspection. Our technicians will identify and fix the source to keep your dishwasher running smoothly.</p><p><strong>Contact Us Today!</strong> Don't wait for small problems to turn into big repairs. Call our expert team now to ensure safe, reliable operation, improve cleanliness, and extend the life of your commercial dishwasher. We're here to keep your kitchen running efficiently!</p> </>
      ),
    },
  
    {
      id: "content4",
      title: "Commercial Dishwasher Repair",
  heading: "Commercial Dishwasher Repair for Various Industries",
      img: "",
      description: (
        <><h4><strong>Restaurant Dishwasher Repair</strong></h4><p>We understand restaurants rely on efficient dishwashing to keep their kitchens running smoothly. Whether it's an <strong>under-counter dishwasher</strong> or a high-capacity <strong>conveyor dishwasher</strong>, we offer <strong>same-day repair services</strong> to minimize downtime and keep your restaurant running efficiently.</p><h4><strong>Hotel Dishwasher Repair</strong></h4><p>For hotels, having a functional <strong>commercial dishwasher</strong> is essential for serving guests promptly. We provide <strong>expert repair services</strong> for <strong>hotel dishwashers</strong>, ensuring they operate at full capacity and meet the rigorous demands of the hospitality industry.</p><h4><strong>Healthcare Dishwasher Repair</strong></h4><p>Healthcare facilities need reliable <strong>dishwashers</strong> to maintain hygiene and safety standards. We specialize in <strong>healthcare dishwasher repair</strong>, ensuring your <strong>equipment</strong> meets sanitation regulations while minimizing downtime.</p></>
      ),
    },
  
    {
      id: "content5",
      title: "Commercial Dishwasher Maintenance",
  heading: "Expert Commercial Dishwasher Repair and Maintenance",
      img: "",
      description: (
        <> <p>At <strong>Same Day Appliance Repair</strong>, we prioritize <strong>fast, reliable repair services</strong> to minimize disruption to your <strong>business</strong>. Our factory-trained technicians handle <strong>commercial appliances</strong>, ensuring your <strong>commercial dishwasher</strong> is fixed quickly and thoroughly. We also recommend <strong>regular maintenance</strong> to avoid unexpected breakdowns and extend the life of your <strong>appliance</strong>.</p><h3><strong>Preventative Maintenance to Save Money and Prevent Downtime</strong></h3><p>We recommend regular and preventive maintenance for your dishwashers to avoid costly repairs and keep your commercial appliances running smoothly. Our <strong>regularly scheduled maintenance</strong> services ensure your <strong>equipment</strong> is in top condition, helping to extend its <strong>life</strong> and reduce the risk of unexpected <strong>breakdowns</strong>.</p><p>Our <strong>in-house maintenance</strong> experts thoroughly inspect all components, including filters, spray arms, and water systems, to ensure proper function. By scheduling preventative maintenance, you'll save money on future repairs and time on emergency service calls and improve the longevity of your <strong>commercial appliance</strong>.</p></>
      ),
    },
  
    {
      id: "content6",
      title: "Repair or Replacement",
  heading: "Deciding Between Repair and Replacement for Your Commercial Dishwasher",
      img: "",
      description: (
        <><p>If your commercial dishwasher is frequently breaking down, it might be time to consider whether repair or replacement is the best option. When repair costs start to exceed 50% of the cost of a new unit, or if breakdowns are happening regularly, it may be more cost-effective to invest in a newer, more energy-efficient model. Our expert technicians will assess the condition of your dishwasher and provide detailed recommendations to help you make the best decision for your business.</p><p>Newer models often come with advanced features that enhance energy efficiency and reliability, saving you money over time. When deciding whether to repair or replace, we consider factors like the appliance's age, frequency of repairs, and potential energy savings, ensuring you get the best long-term solution for your kitchen.</p></>
      ),
    },
  
    {
      id: "content7",
      title: "Contact Us",
  heading: "Contact Expert Commercial Dishwasher Repair",
      img: "",
      description: (
        <><p>When your <strong>commercial dishwasher</strong> needs <strong>repair</strong>, you need a <strong>trustworthy company</strong> to do the <strong>job</strong> right. At <strong>Same Day Appliance Repair</strong>, we provide expert <strong>commercial dishwasher repair</strong> services for <strong>business owners</strong> in <strong>Los Angeles</strong> and the surrounding areas. Our <strong>team</strong> of professional <strong>technicians</strong> is ready to provide fast, reliable <strong>repair services</strong> that ensure your <strong>commercial dishwasher</strong> is back up and running with minimal downtime.</p><p><strong>Contact us today</strong> to <strong>schedule service</strong> and keep your <strong>commercial kitchen</strong> operating at total capacity.</p></>
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
