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
      heading: "Why Choose Same Day Appliance Repair for Walk-In Cooler Repair in Los Angeles?",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-1.webp",
      description: (
        <><section>
             
        <h3><strong>Same-Day Service Across Los Angeles</strong></h3>
        <p>
          We respond fast to minimize downtime for businesses in <strong>Los Angeles, Pasadena, West Hollywood, Thousand Oaks, Irvine</strong>, and nearby cities.
          Our <strong>same-day service</strong> ensures your <strong>walk-in cooler</strong> is restored quickly, protecting your products and operations.
        </p>
      
        <h3><strong>Certified Local Technicians</strong></h3>
        <p>
          All repair work is performed by our own <strong>certified, factory-trained technicians</strong> based in <strong>Los Angeles</strong>. 
          They are experienced with every major <strong>walk-in cooler brand and model</strong>, capable of diagnosing and resolving both simple and complex issues.
        </p>
      
        <h3><strong>OEM Replacement Parts</strong></h3>
        <p>
          We use only <strong>original, manufacturer-approved replacement parts</strong> to ensure durability and long-lasting reliability. 
          Whether it’s a <strong>compressor, fan motor, or thermostat</strong>, we repair your equipment using parts you can trust.
        </p>
      
        <h3><strong>Upfront Pricing with No Hidden Fees</strong></h3>
        <p>
          Before starting any repair, we provide a <strong>clear and upfront quote</strong>. 
          There are no surprises—just honest, transparent pricing you can plan for.
        </p>
      
        <h3><strong>Expertise Across Commercial Industries</strong></h3>
        <p>We tailor our services for a variety of industries across <strong>Los Angeles</strong>:</p>
        <ul>
          <li><strong>Restaurants</strong></li>
          <li><strong>Grocery Stores</strong></li>
          <li><strong>Florists</strong></li>
          <li><strong>Catering Facilities</strong></li>
          <li><strong>Medical & Healthcare Centers</strong></li>
        </ul>
        <p>
          No matter your industry, our <strong>Same Day Appliance Repair</strong> team ensures your <strong>refrigeration system</strong> supports your business needs reliably and efficiently.
        </p>
      </section>
      </>
      ),
    },
    {
      id: "content2",
      title: "Types of Walk-In Units We Repair",
      heading: "Types of Walk-In Units We Repair in Los Angeles",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-2.webp",
      description: (
        <><section>
       
        <h3><strong>Walk-In Cooler Repair</strong></h3>
        <p>
          We service <strong>walk-in coolers</strong> throughout <strong>Los Angeles</strong>, resolving issues such as <strong>temperature fluctuations</strong>,
          <strong>water leaks</strong>, and <strong>worn door gaskets</strong>. Our team inspects the <strong>compressor, evaporator coils</strong>,
          and more to ensure cold air circulation and system efficiency.
        </p>
      
        <h3><strong>Walk-In Freezer Repair</strong></h3>
        <p>
          For businesses relying on deep freeze technology, we repair <strong>walk-in freezers</strong> experiencing
          <strong>frost buildup, faulty compressors</strong>, and <strong>defrost cycle failures</strong>.
        </p>
      
        <h3><strong>Cooler Installation and Replacement</strong></h3>
        <p>
          We handle <strong>new installations</strong> and <strong>replacement of outdated systems</strong>. If your unit in <strong>Los Angeles or nearby areas</strong>
          breaks down frequently or wastes energy, we’ll help you upgrade to a <strong>cost-efficient, high-performance model</strong>.
        </p>
      </section>
      
        </>
      ),
    },
    {
      id: "content3",
      title: "Walk-In Cooler Problems",
      heading: "Common Walk-In Cooler and Freezer Problems We Solve",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-3.webp",
      description: (
        <><section>
              
        <h3><strong>Inconsistent Temperatures</strong></h3>
        <p>
          Our specialists in <strong>Los Angeles</strong> inspect and clean <strong>evaporator coils</strong>, replace <strong>faulty compressors</strong>,
          and calibrate <strong>thermostats</strong> to restore reliable temperature control.
        </p>
      
        <h3><strong>Frost or Ice Buildup</strong></h3>
        <p>
          We repair <strong>defrost heaters</strong> and replace <strong>door gaskets</strong> to eliminate ice buildup and improve airflow.
        </p>
      
        <h3><strong>Water Leaks</strong></h3>
        <p>
          <strong>Clogged drain lines</strong> or <strong>faulty inlet valves</strong> can cause leaks. We clean the drains and replace valves to keep your business
          dry and safe.
        </p>
      
        <h3><strong>Loud or Strange Noises</strong></h3>
        <p>
          We repair <strong>fan motors, compressors</strong>, and <strong>evaporator fans</strong> to eliminate disruptive sounds and restore quiet operation.
        </p>
      
        <h3><strong>Door Seal Failures</strong></h3>
        <p>
          A faulty <strong>door gasket</strong> leads to warm air infiltration and energy loss. We replace the gasket and adjust the hinges to ensure a proper seal.
        </p>
      </section>
      </>
      ),
    },

    {
      id: "content4",
      title: "Walk-In Cooler Needs Service",
      heading: "Signs Your Walk-In Cooler in Los Angeles Needs Service",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-3.webp",
      description: (
        <><section>
         <p>
          If you notice any of the following signs at your facility in <strong>Los Angeles</strong>, call <strong>Same Day Appliance Repair</strong> immediately:
        </p>
        <ul>
          <li><strong>Unusual odors</strong> (from mold or refrigerant leaks)</li>
          <li><strong>Water pooling</strong> on the floor</li>
          <li><strong>Inconsistent cooling</strong></li>
          <li><strong>Frost buildup</strong></li>
          <li><strong>Strange noises</strong></li>
        </ul>
        <p>
          <strong>Delaying repairs</strong> increases the risk of <strong>inventory loss</strong> and <strong>higher utility bills</strong>.
          Contact us as soon as you notice a problem.
        </p>
      </section>
      </>
      ),
    },

    {
      id: "content5",
      title: "Walk-In Cooler Repair Services",
      heading: "Walk-In Cooler Repair Services for Key Industries in Los Angeles",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-3.webp",
      description: (
        <><section>
              
        <h3><strong>Restaurant Walk-In Cooler Repair</strong></h3>
        <p>
          We help <strong>Los Angeles restaurants</strong> avoid food spoilage with fast and reliable repair services.
        </p>
      
        <h3><strong>Grocery Store Walk-In Cooler Repair</strong></h3>
        <p>
          We respond quickly to keep your <strong>inventory fresh</strong> and your <strong>customers satisfied</strong>.
        </p>
      
        <h3><strong>Medical & Laboratory Walk-In Cooler Repair</strong></h3>
        <p>
          We service <strong>walk-in coolers</strong> used for storing <strong>vaccines and medications</strong> with precision and care.
        </p>
      </section>
      
      </>
      ),
    },

    {
      id: "content6",
      title: "Maintenance for Walk-In Coolers",
      heading: "Preventative Maintenance for Walk-In Coolers",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-3.webp",
      description: (
        <>
        <p>
          We offer ongoing maintenance plans for businesses in <strong>Los Angeles</strong> to help extend the lifespan of their refrigeration units.
          Our routine service includes:
        </p>
        <ul>
          <li><strong>Evaporator coil cleaning</strong></li>
          <li><strong>Door gasket inspection and replacement</strong></li>
          <li><strong>Thermostat calibration</strong></li>
          <li><strong>Fan motor cleaning</strong></li>
          <li><strong>Full system inspection</strong></li>
        </ul>
        <p>
          Preventative maintenance ensures <strong>efficiency, safety,</strong> and <strong>compliance</strong> with sanitation standards for your cooler or freezer.
        </p>
      
      </>
      ),
    },
   
    {
      id: "content8",
      title: "Repair or Replace",
      heading: "Should You Repair or Replace a Walk-In Cooler?",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-3.webp",
      description: (
        <>
        <p>
          If your cooler breaks down frequently, we’ll inspect the <strong>compressor, fans, thermostats, door seals, insulation,</strong> and
          <strong>refrigerant lines</strong> to determine whether <strong>repair or replacement</strong> is the better option.
          In most cases, <strong>targeted repairs</strong> are more cost-effective and efficient.
        </p>
      
      </>
      ),
    },

    {
      id: "content9",
      title: "Schedule Walk-In Repair",
      heading: "Schedule Walk-In Cooler Repair in Los Angeles",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-3.webp",
      description: (
        <>
        <p>
          If you need fast, professional <strong>walk-in cooler repair in Los Angeles or nearby cities</strong>,
          trust <strong>Same Day Appliance Repair</strong>. Our experienced technicians are available for
          <strong>same-day appointments</strong> and come equipped with the tools and parts needed for immediate repairs.
        </p>
        <p>
          📍 We serve <strong>Los Angeles, West Hollywood, Beverly Hills, Pasadena, Thousand Oaks, Santa Monica, Culver City, Glendale, Irvine</strong>,
          and surrounding areas.
        </p>
        <p>
          📞 Call us now at <strong>(323) 870-4790</strong> or <a href="https://samedayappliance.repair/los-angeles/" target="_blank" rel="nofollow"><strong>book online</strong></a>
          to schedule expert walk-in cooler repair.
        </p>
      
      </>
      ),
    },

    {
      id: "content10",
      title: "FAQ",
      heading: "Frequently Asked Questions",
      img: "/commercial-walk-in-freezer/commercial-walk-in-freezer-3.webp",
      description: (
        <>
        <dl>
          <dt><strong>How often should walk-in coolers be serviced?</strong></dt>
          <dd>Twice a year. Preventative maintenance helps detect problems early and avoids costly breakdowns.</dd>
      
          <dt><strong>What are signs that my cooler needs repair?</strong></dt>
          <dd>Watch for <strong>temperature fluctuations, frost buildup, water leaks,</strong> or <strong>strange noises</strong>.</dd>
      
          <dt><strong>Can repairs be done on-site?</strong></dt>
          <dd>Yes, in most cases, our Los Angeles technicians are equipped for on-site repairs.</dd>
      
          <dt><strong>How long do walk-in coolers last?</strong></dt>
          <dd>With regular maintenance, 10–15 years or more.</dd>
      
          <dt><strong>What should I do if my cooler isn’t maintaining temperature?</strong></dt>
          <dd>First, check for door obstructions. Then call us to inspect <strong>thermostats, compressors,</strong> or <strong>evaporator coils</strong>.</dd>
      
          <dt><strong>Why is maintenance important?</strong></dt>
          <dd>It prevents breakdowns, ensures consistent cooling, and reduces energy costs.</dd>
      
          <dt><strong>How can I prevent water leaks?</strong></dt>
          <dd>Regularly clean <strong>drain lines</strong> and inspect <strong>door gaskets</strong> during maintenance visits.</dd>
        </dl>
      
      </>
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
