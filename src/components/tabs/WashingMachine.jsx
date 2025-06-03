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
  heading:"Why Choose Same Day Appliance Repair for Washing Machine Repair?",
      img: "/washer-repair/washer1.webp",
      description: (
        <><p>When you choose <strong>Same Day Appliance Repair</strong>, you trust a team of certified technicians with the right tools, <strong>parts</strong>, and expertise to handle any <strong>machine repair</strong> job. Here's why we stand out:</p><ul><li><p><strong>Same-Day Service:</strong> We know how crucial a <strong>working washing machine</strong> is in a busy household, so we offer <strong>same-day repair services</strong> to get your <strong>washer</strong> back to <strong>working correctly</strong>.</p></li><li><p><strong>Trained Technicians:</strong> Our technicians are trained and certified, with experience in <strong>washing machine repair</strong> for all brands and models.</p></li><li><p><strong>Use of Original Parts:</strong> We only use <strong>the right parts sourced from trusted suppliers, ensuring your washing machine </strong>operates efficiently and lasts longer.</p></li><li><p><strong>Transparent Pricing:</strong> With no hidden fees, we provide an accurate quote for labor and <strong>parts</strong> before any work begins, so you're always aware of <strong>repair costs</strong>.</p></li></ul></>
      ),
    },
    {
      id: "content2",
       title: "Types of Washing Machines We Repair",
  heading:"Types of Washing Machines We Repair",
      img: "/washer-repair/washer2.webp",
      description: (
        <><p>Our <strong>washing machine repair</strong> services extend across different <strong>washer</strong> types and models:</p><p><strong>Top-Loading Washers</strong><br />Top-loading <strong>washing machines</strong> are famous for their convenience but often face issues like <strong>agitator malfunctions, lid switch failures</strong>, and <strong>pump clogs</strong>. Our technicians will inspect the <strong>appliance</strong>, ensure proper <strong>water</strong> flow, and adjust settings to restore optimal performance.</p><p><strong>Front-Loading Washers</strong><br />Front-loading <strong>washers</strong> are known for efficiency, but they can develop <strong>door seal leaks, mold</strong> buildup, and <strong>motor </strong>problems. We clean, replace, or repair the affected parts to keep the <strong>clothes washer</strong> functioning and your <strong>clothes</strong> fresh and clean.</p><p><strong>High-Efficiency Washers</strong><br />High-efficiency <strong>washing machines</strong> save on <strong>water</strong> but can face unique issues like <strong>drain clogs</strong> from <strong>too much detergent</strong>. Our team ensures the <strong>proper detergent</strong> use, checks hoses, and performs necessary adjustments.</p><p><strong>Compact Washers</strong><br />Compact washing machines can have drain and spin issues, ideal for smaller spaces. We'll troubleshoot and repair your <strong>unit</strong> to meet your <strong>laundry</strong> demands without taking up extra space.</p> </>
      ),
    },
    {
      id: "content3",
       title: "Common Washing Machine Problems",
  heading:"Common Washing Machine Problems We Fix",
      img: "/washer-repair/washer3.webp",
      description: (
        <><p>Our technicians encounter various <strong>washing machine</strong> issues and have the experience to <strong>repair</strong> each <strong>washer</strong> precisely. Here are some of the most common <strong>washer</strong> problems we see and resolve:</p><ul><li><p><strong>Water Leaks or Puddles:</strong> If your <strong>washing machine</strong> leaks<strong> water</strong>, it may be due to <strong>worn hoses, door seal issues</strong>, or <strong>clogged pumps</strong>. We address <strong>leaks</strong> and check for damage to prevent future water problems.</p></li><li><p><strong>Washer Not Draining Properly:</strong> A <strong>washing machine</strong> that doesn't <strong>drain</strong> can have <strong>clogged hoses</strong> or a <strong>blocked pump</strong>. We clean, unclog, or replace these components to ensure efficient <strong>draining</strong>.</p></li><li><p><strong>No Agitation or Spin:</strong> When <strong>clothes</strong> aren't correctly agitated, it could mean <strong>belt, motor, or pulley issues</strong>. We replace <strong>worn parts</strong> as needed to restore proper <strong>agitation</strong> and <strong>spin cycles</strong>.</p></li><li><p><strong>Unusual Smells or Mold Growth:</strong> Persistent odors may come from <strong>mold</strong> buildup or <strong>clogged hoses</strong>. We clean and sanitize, address mold issues, and advise using <strong>less detergent</strong> to prevent future buildup.</p></li><li><p><strong>Machine Not Starting or Completing Cycles:</strong> If your <strong>washing machine</strong> fails to start or complete a cycle, it could be due to a <strong>control board or motor problem</strong>. We check each component to get your <strong>washer</strong> running smoothly.</p></li></ul> </>
      ),
    },
    {
      id: "content4",
       title: "Signs Your Washing Machine Needs Repair",
       heading:"Signs Your Washing Machine Needs Repair - When To Call Us",
      img: "/washer-repair/washer6.webp",
      description: (
        <><p>Our technicians often see common signs that a <strong>washer</strong> may need professional <strong>repair</strong>. These include:</p><ul><li><p><strong>Persistent Smells:</strong> A lingering smell may indicate <strong>mold buildup</strong> or <strong>clogged hoses</strong>.</p></li><li><p><strong>Water Leaks:</strong> Water collecting around the <strong>washing machine</strong> points to <strong>hose or gasket issues</strong>.</p></li><li><p><strong>Failure to Start or Complete Cycles:</strong> This can signal control board or motor issues.</p></li><li><p><strong>No Spin or Agitation:</strong> Worn belts or an <strong>imbalanced load</strong> can prevent the <strong>machine</strong> from spinning or agitating correctly.</p></li></ul><p>Addressing these issues early can save money on <strong>repair costs</strong> and extend the lifespan of your <strong>washing machine</strong>.</p>  </>
      ),
    },
    {
      id: "content5",
       title: "Full-Service Washing Machine Repair",
      heading:"Full-Service Washing Machine Repair for Every Home",
      description: (
        <><h3><strong>Kitchen Washing Machine Repair</strong></h3><p>Your <strong>washing machine</strong> is essential to keeping your household running smoothly, ensuring clean clothes are always within reach. Whether you have a <strong>top-loading, front-loading, or stackable</strong> model, our technicians are fully equipped to handle any issue, from <strong>drum malfunctions</strong> to <strong>water drainage problems</strong>. With our <strong>same-day service</strong>, we'll get your washing machine back to optimal performance quickly, helping you avoid laundry pile-ups and keeping your home running efficiently.</p><h3><strong>Washing Machine Repair for Large Families</strong><br /></h3><p>For larger households, <strong>high-capacity washing machines</strong> are often necessary to handle extra loads. Our technicians specialize in diagnosing and repairing <strong>issues specific to high-capacity models</strong>, from <strong>drum alignment</strong> and <strong>motor problems</strong> to <strong>water temperature regulation</strong>. We make sure your washing machine maintains the ideal performance so your family's laundry is always fresh and ready.</p><h3><strong>High-End and Built-In Washing Machine Repair</strong></h3><p><strong>Luxury</strong> and <strong>built-in washing machines</strong> from brands like <strong>Miele, Bosch,</strong> and <strong>Samsung</strong> feature advanced cleaning technology and integrate seamlessly with your <strong>laundry space</strong>. These high-end machines, with their <strong>custom settings, smart features,</strong> and <strong>premium finishes</strong>, require specialized care. Our technicians are trained to manage issues such as <strong>precision drum balancing, sealed system repairs,</strong> and <strong>control panel replacements</strong> using only <strong>high-quality parts</strong> and techniques tailored for luxury models. We ensure your washing machine runs efficiently and maintains its <strong>sophisticated style</strong>.</p><h3><strong>Specialty Washer Repair</strong></h3><p>Specialty washers, such as <strong>portable, compact,</strong> and <strong>combo washer-dryer units</strong>, need careful handling to ensure consistent performance and longevity. We offer <strong>specialized repair services</strong> for these models, addressing <strong>water flow adjustments, drum issues,</strong> and <strong>sensor calibrations</strong> so that your specialty washers operate as intended. Our technicians ensure that your washer provides efficient and reliable cleaning, whether for small loads or delicate fabrics.</p><p>With <strong>comprehensive repair solutions</strong> for every type of washing machine, including <strong>high-end</strong> and <strong>specialty models</strong>, we help keep your appliances running smoothly for <strong>optimal laundry care</strong>. <strong>Contact us today</strong> to schedule a <strong>fast and reliable repair service</strong>.</p> </>
      ),
    },
    {
      id: "content6",
       title: "Washing Machine Maintenance Service",

      heading:"Routine Washing Machine Maintenance Service - Why You Need It",
      description: (
        <><p>Prevent common <strong>washer</strong> issues and extend your <strong>washing machine's</strong> life with routine maintenance. Our technicians recommend:</p><ul><li><p><strong>Hose and Filter Inspections:</strong> Regularly clean and check <strong>filters and hoses</strong> to prevent clogs and improve efficiency.</p></li><li><p><strong>Balanced Loads:</strong> Correct <strong>load balancing</strong> protects your <strong>machine's</strong> internal components and ensures smooth operation.</p></li><li><p><strong>Door and Seal Cleaning:</strong> Regular cleaning around the <strong>door</strong> and seals prevent <strong>mold</strong> and maintain a tight seal.</p></li></ul>
        </>
      ),
    },

    {
      id: "content7",
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
               <h2>{item.heading}</h2>
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
