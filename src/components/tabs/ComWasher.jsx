import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Commercial Washer Repair by Same Day Appliance Repair Technicians",
      img: "",
      description: (
        <>
          <p>When your <strong>commercial washer</strong> breaks down, it can bring your entire laundry operation to a halt. Whether you manage a hotel, laundromat, fitness center, spa, or senior care facility, you depend on high-capacity washers that can handle non-stop loads. At <strong>Same Day Appliance Repair</strong>, our expert technicians specialize in <strong>same-day commercial washer repair</strong> to minimize downtime and keep your business running efficiently.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Commercial Washers We Repair",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Front-loading commercial washers</strong></li>
            <li><strong>Top-loading commercial washers</strong></li>
            <li><strong>High-efficiency (HE) washers</strong></li>
            <li><strong>Hard-mount and soft-mount washers</strong></li>
            <li><strong>Coin-operated and card-operated washers</strong></li>
            <li><strong>Washer-extractors (rigid and suspension models)</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content3",
      title: "Brands We Service",
      img: "",
      description: (
        <>
          <p>We repair a wide variety of major commercial laundry brands, including: <strong>Speed Queen, Maytag, Dexter, Continental Girbau, Wascomat, IPSO, Milnor, Huebsch, Electrolux Professional, ADC (American Dryer), UniMac, Primus, LG Commercial, Alliance Laundry Systems, Miele Professional, B&C Technologies, Tolon, Econo-Wash, Whirlpool, GE Commercial, Fagor, and Danube</strong>.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Common Problems with Commercial Washers",
      img: "",
      description: (
        <>
          <ul>
            <li>Washer won’t start or power on</li>
            <li>Water not filling or draining properly</li>
            <li>Excessive vibration or shaking during spin cycles</li>
            <li>Leaking water from the door or hoses</li>
            <li>Strange noises from the drum or motor</li>
            <li>Overheating, error codes, or control panel failure</li>
          </ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Advanced Diagnostics & OEM Parts",
      img: "",
      description: (
        <>
          <p>We use modern diagnostic tools to assess drum motors, drain pumps, solenoids, control boards, water valves, and more. When parts need to be replaced, we install only <strong>OEM (Original Equipment Manufacturer) components</strong> to ensure long-lasting and warranty-compliant repairs.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Our Commercial Washer Repair Process",
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day service</strong> – Call us and a technician will be dispatched immediately.</li>
            <li><strong>Full system inspection</strong> – Drum, motor, electrical, and plumbing components are checked.</li>
            <li><strong>Debris removal and internal cleaning</strong> – Clean out filters, hoses, and buildup.</li>
            <li><strong>Component replacement</strong> – Swap out any defective or worn OEM parts.</li>
            <li><strong>Cycle test</strong> – Machine is tested for water levels, spin speed, and error codes.</li>
            <li><strong>Follow-up care tips</strong> – We provide guidance to help you reduce future issues.</li>
          </ol>
        </>
      ),
    },
    {
      id: "content7",
      title: "Preventative Maintenance for Commercial Laundry",
      img: "",
      description: (
        <>
          <ul>
            <li>Checking and cleaning drain pumps and valves</li>
            <li>Inspecting belts, bearings, and motor mounts</li>
            <li>Testing temperature sensors and door switches</li>
            <li>Calibrating controls and reviewing error logs</li>
            <li>Cleaning filters and checking water inlet systems</li>
          </ul>
        </>
      ),
    },
    {
      id: "content8",
      title: "Why Choose Same Day Appliance Repair?",
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Same-day washer repair service available</strong></li>
            <li><strong>Licensed and certified commercial appliance technicians</strong></li>
            <li><strong>OEM parts and repairs based on manufacturer standards</strong></li>
            <li><strong>Over 20 years of industry experience</strong></li>
            <li><strong>BBB accredited and trusted by Southern California businesses</strong></li>
            <li><strong>Service coverage in Los Angeles, Orange, and Ventura Counties</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content9",
      title: "Book Your Commercial Washer Repair Today",
      img: "",
      description: (
        <>
          <p>Don’t let laundry delays affect your business. Call <strong>Same Day Appliance Repair</strong> now or use our online form to schedule service. We’ll send a technician as soon as possible to diagnose and repair your washer — fast and professionally.</p>
        </>
      ),
    },
    {
      id: "content10",
      title: "Frequently Asked Questions",
      img: "",
      description: (
        <>
          <h3>Do you service coin-operated washers?</h3>
          <p>Yes, we repair both coin and card-operated commercial laundry machines.</p>
          <h3>Can I schedule service after business hours?</h3>
          <p>Absolutely. We offer flexible scheduling to accommodate 24/7 operations like hotels and laundromats.</p>
          <h3>Do you provide maintenance contracts?</h3>
          <p>Yes. We offer monthly and quarterly service plans for high-usage commercial environments.</p>
          <h3>Are your repairs covered by warranty?</h3>
          <p>Yes, all parts and labor come with a warranty. Our work is fully insured and guaranteed.</p>
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
