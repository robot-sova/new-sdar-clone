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
          <> <p>For <strong>commercial dryer repair</strong>, <strong>Same Day Appliance Repair</strong> is the go-to service. Our <strong>technicians</strong> are skilled, equipped with <strong>top-quality parts</strong>, and have the <strong>experience</strong> to fix any commercial dryer issue. Here's why businesses trust us to keep their essential appliances running:</p><p><strong>Same-Day Service:</strong> We understand that a <strong>commercial dryer</strong> is vital to your business. Our <strong>same-day repair service</strong> means no downtime for your operations and no delays in laundry services.</p><p><strong>Certified Technicians:</strong> Our <strong>certified technicians</strong> have extensive experience with all major <strong>commercial dryer brands and models</strong>. Whether it's a <strong>small adjustment</strong> or a major repair, we can accurately <strong>diagnose and fix</strong> any issue.</p><p><strong>High-Quality Parts:</strong> We use only <strong>top-quality, original parts</strong> from trusted suppliers, ensuring that your dryer runs efficiently and offers long-term performance. <strong>Quality parts</strong> help prevent future breakdowns, saving you <strong>time</strong> and <strong>money</strong>.</p><p><strong>Transparent Pricing:</strong> With <strong>Same Day Appliance Repair</strong>, you'll receive <strong>transparent pricing</strong>. We provide a <strong>detailed quote for labor and parts</strong>—with <strong>no hidden fees</strong>—so you know the cost before any work begins.</p><p><strong>Call us now</strong> to get your <strong>commercial dryer fixed</strong>—<strong>ASAP</strong>. Let us handle your repairs promptly and professionally.</p></>
        ),
      },
    
    {
        id: "content2",
        title: "Commercial Freezer Types We Repair",
  heading: "Common Commercial Freezer Types We Repair and Our Approach",
        img: "",
        description: (
          <> <h4><strong>Industrial Dryer Repair: Handling Large Loads Efficiently</strong></h4><p><strong>Industrial dryers</strong> are built to handle high volumes of laundry, but they can still face issues like <strong>overheating</strong>, motor failure, or worn belts. If left unchecked, these problems can disrupt your operations and increase your energy costs. Our technicians inspect the <strong>heating elements</strong>, motors, and belts to identify the issue and provide <strong>quick repairs</strong> to get your equipment back in action. Whether it's a worn-out belt or a faulty heating element, our <strong>factory-trained</strong> team has the experience to complete the <strong>repairs</strong> effectively.</p><h4><strong>Stacked Dryer Repair: Maximizing Space and Performance</strong></h4><p><strong>Stacked dryers</strong> are an excellent solution for saving space in <strong>commercial laundry</strong> setups, but they can experience common issues like poor airflow, overheating, or <strong>uneven drying</strong>. These issues can affect your operations and reduce efficiency. Our technicians assess the <strong>ventilation system</strong>, clean the lint filters, and inspect the motor to ensure your stacked <strong>commercial dryers</strong> are working properly and efficiently.</p><h4><strong>Coin-Operated Dryer Repair: Enhancing Customer Satisfaction</strong></h4><p>For businesses that rely on <strong>coin-operated dryers</strong>, such as laundromats, the <strong>payment systems</strong> and functionality are crucial. Common issues include faulty coin acceptors, malfunctioning timers, or dryers that won't start. We inspect both the mechanical and payment systems to ensure your <strong>coin-operated dryers</strong> are working seamlessly, keeping your customers happy and ensuring continuous business flow.</p></>
        ),
      },
    
    {
        id: "content3",
        title: "Commercial Dryer Problems We Fix",
  heading: "Common Commercial Dryer Problems and How We Fix Them",
        img: "",
        description: (
          <> <p>At <strong>Same Day Appliance Repair</strong>, we work closely with <strong>business owners</strong> to address various <strong>dryer problems</strong>. Our team of <strong>expert technicians</strong> is dedicated to providing <strong>quick</strong> and efficient <strong>repair services</strong>. Below are some of the most common issues we encounter and how we solve them to ensure your <strong>commercial dryer</strong> is <strong>back up and running </strong>efficiently.</p><h4>1. <strong>Dryer Not Heating Properly</strong></h4><p><strong>Customer Concern</strong>: "My dryer isn't getting hot, and the clothes are still damp after the cycle."</p><p><strong>How We Fix It</strong>:<br />Our technicians start by inspecting the <strong>heating element</strong>, thermostat, and thermal fuse. If the <strong>heating element</strong> is faulty, we replace it to restore proper heat. We also check the <strong>ventilation system</strong> to ensure there are no airflow restrictions, which can cause heating issues.</p><h4>2. <strong>Extended Drying Times</strong></h4><p><strong>Customer Concern</strong>: "It's taking too long to dry a load of laundry."</p><p><strong>How We Fix It</strong>:<br />Long drying times are often caused by clogged lint filters or blocked vents. We clean the <strong>ventilation system</strong> and inspect the <strong>blower motor</strong> to ensure proper airflow. If necessary, we also check the <strong>thermostat</strong> and sensors, providing timely <strong>repairs</strong> to speed up drying times.</p><h4>3. <strong>Loud Noises</strong></h4><p><strong>Customer Concern</strong>: "My dryer is making loud, unusual noises, and I'm worried something might break."</p><p><strong>How We Fix It</strong>:<br />Loud noises often point to issues with the drum support rollers, belt, or motor bearings. We inspect all the moving parts of the dryer, replacing any worn components, ensuring smooth, quiet operation and <strong>preventing further damage</strong>.</p><h4>4. <strong>Dryer Not Turning On</strong></h4><p><strong>Customer Concern</strong>: "My dryer won't start, and I need it to work right away."</p><p><strong>How We Fix It</strong>:<br />A dryer that won't start could be due to a faulty <strong>door switch</strong>, start switch, or control board. We check all the electrical systems, ensuring all components are functioning properly, and replace any faulty parts to restore your <strong>commercial dryer</strong> to full operation.</p><h4>5. <strong>Overheating or Burning Smell</strong></h4><p><strong>Customer Concern</strong>: "My dryer is overheating, and I'm noticing a burning smell."</p><p><strong>How We Fix It</strong>:<br />Overheating can be a serious issue caused by clogged vents or a malfunctioning thermostat. Our technicians clean out any obstructions in the venting system, inspect the thermostat, and replace the <strong>heating element</strong> if necessary to prevent future overheating and ensure safety.</p></>
        ),
      },
    
    {
        id: "content4",
        title: "Signs Your Commercial Dryer Needs Repair",
  heading: "Signs Your Commercial Dryer Needs Repair – When and Why to Call Us",
        img: "",
        description: (
          <><p>Spotting early signs of <strong>commercial dryer</strong> issues can save you money on repairs, prevent downtime, and ensure efficient service for your business. Here's what our expert <strong>technicians</strong> recommend watching out for and why it's essential to address these issues right away:</p><p><strong>Unusual Smells:</strong> Strange or unpleasant smells from your dryer can indicate <strong>overheated components</strong> or a <strong>clogged lint trap</strong>. These odors pose potential fire hazards and could compromise air quality in your work environment. If you notice unusual smells, <strong>call us immediately</strong>. Our team will inspect, clean, and repair the unit to keep your dryer operating safely.</p><p><strong>Overheating or Excessive Heat:</strong> If your dryer feels unusually hot to the touch or overheats during cycles, it could be a sign of <strong>blocked vents</strong>, <strong>worn heating elements</strong>, or a <strong>faulty thermostat</strong>. Ignoring these issues can lead to safety hazards and potential damage to your equipment. Contact us promptly to resolve the overheating—our technicians will check and repair your dryer for safe and reliable operation.</p><p><strong>Longer Drying Times or Poor Performance:</strong> If clothes are taking longer than usual to dry, it's often due to <strong>clogged vents</strong>, <strong>worn-out heating elements</strong>, or <strong>motor issues</strong>. Delayed drying times can slow down your operations and increase energy costs. If your dryer isn't drying efficiently, <strong>call us</strong> to diagnose and fix the issue quickly, ensuring optimal performance and energy savings.</p><p><strong>Strange Noises:</strong> Buzzing, rattling, or grinding noises often indicate failing components like <strong>belts, rollers, or motor bearings</strong>. These sounds mean your dryer is struggling and may soon require more extensive repairs. If you hear unusual sounds, reach out to us for an inspection. We'll identify and resolve the issue, keeping your dryer running smoothly and reducing further wear.</p><p><strong>Failure to Start or Complete Cycles:</strong> If your dryer won't start or stops mid-cycle, it may be due to a <strong>faulty control board</strong>, <strong>door latch issues</strong>, or <strong>power connection problems</strong>. This can severely disrupt your workflow. Call us to troubleshoot and repair these issues, ensuring your dryer runs reliably through each load.</p><p><strong>Contact Us Today!</strong> Don't let small issues turn into costly repairs. <strong>Call our expert team now</strong> to ensure safe, efficient operation, protect your equipment, and avoid downtime. We're here to keep your <strong>commercial dryer</strong> in top shape, so your business keeps running smoothly.</p></>
        ),
      },
    
    {
        id: "content5",
        title: "Commercial Dryer Repair",
  heading: "Commercial Dryer Repair for Various Industries",
        img: "",
        description: (
          <><h4><strong>Hotel and Hospitality Dryer Repair</strong></h4><p>In the hotel and hospitality industry, <strong>commercial dryers</strong> play a vital role in ensuring fresh linens and towels are available daily. Whether you have an <strong>industrial dryer</strong> or <strong>stacked dryer</strong>, we provide same-day <strong>repair services</strong> to ensure your operations run smoothly and your customers stay satisfied.</p><h4><strong>Laundromat Dryer Repair</strong></h4><p>Laundromats rely on <strong>coin-operated dryers</strong> for their daily operations, and a malfunctioning dryer can lead to loss of business. From <strong>payment system malfunctions</strong> to heating issues, our team of <strong>expert technicians</strong> ensures your <strong>commercial laundry equipment</strong> stays in top condition, delivering the <strong>quality service</strong> your customers expect.</p><h4><strong>Gym and Spa Dryer Repair</strong></h4><p>Gyms and spas need constant access to clean, dry towels. Our <strong>same-day service</strong> ensures that your <strong>commercial dryers </strong>are operating at their best, preventing downtime and ensuring that your customers always have clean, dry towels.</p></>
        ),
      },
    
    {
        id: "content6",
        title: "Commercial Dryer Repair and Maintenance",
  heading: "Expert Commercial Dryer Repair and Maintenance",
        img: "",
        description: (
          <><p>At <strong>Same Day Appliance Repair</strong>, we prioritize fast and efficient <strong>commercial dryer repair</strong> to minimize downtime and keep your <strong>business</strong> running smoothly. To prevent unexpected breakdowns, we also offer <strong>regular maintenance</strong> services to extend the life of your <strong>commercial laundry equipment</strong>. Our <strong>factory-trained technicians</strong> handle:</p><p>Cleaning the ventilation and lint systems to prevent clogs and improve airflow.</p><p>Inspecting belts, bearings, and motors to ensure all components are functioning properly.</p><p>Checking heating elements and thermostats to avoid overheating issues.</p>

          <h3>Maintenance Tips for Commercial Dryers</h3>
          
          <p>Adding practical advice for our <strong>customers</strong> helps position our <strong>company</strong> as a trusted resource for ongoing <strong>dryer maintenance</strong> and reduces the likelihood of future <strong>repairs</strong>.</p><h4><strong>Pro Tips for Maintaining Your Commercial Dryer</strong></h4><p><strong>Clean Lint Filters Regularly</strong>: Clogged lint filters can reduce airflow and cause dryers to overheat. Make sure to clean them after every cycle to prevent fire hazards and improve drying efficiency.</p><p><strong>Inspect the Vent System</strong>: Blocked vents can cause dryers to overheat and increase drying times. Schedule regular vent cleaning to avoid these issues.</p><p><strong>Monitor Temperature Fluctuations</strong>: If your dryer is overheating or not heating enough, it could signal a faulty thermostat or heating element. <strong>Contact us</strong> for <strong>repair service</strong> if you notice temperature problems.</p></>
        ),
      },
    
    {
        id: "content7",
        title: "Why Choose Us",
  heading: "Deciding Between Repair and Replacement",
        img: "",
        description: (
          <> <p>If your <strong>commercial dryer</strong> is experiencing frequent issues, you may be wondering whether it's more cost-effective to <strong>repair</strong> or <strong>replace</strong> it. Here's how we help you decide:</p><h4><strong>When to Repair</strong>:</h4><p>Repair costs are less than 50% of the price of a new <strong>dryer</strong>.</p><p>The <strong>dryer</strong> is relatively new and has not required frequent repairs.</p><p>The issue is minor, such as replacing a heating element or belt.</p><h4><strong>When to Replace</strong>:</h4><p><strong>Repair costs</strong> exceed 50% of the replacement cost.</p><p>The dryer is older, inefficient, and prone to frequent breakdowns.</p><p>Your business needs a more efficient <strong>dryer</strong> to handle large loads or reduce energy costs.</p><p>Our <strong>factory-trained technicians</strong> will thoroughly assess your <strong>commercial dryer</strong> and provide expert recommendations based on its condition, <strong>repair needs</strong>, and operational efficiency.</p></>
        ),
      },
    
    {
        id: "content8",
        title: "Contact Us",
  heading: "Contact Expert Commercial Freezer Repair in Los Angeles and Surrounding Areas",
        img: "",
        description: (
          <>
            <p>At <strong>Same Day Appliance Repair</strong>, we offer expert <strong>commercial freezer repair</strong> in <strong>Los Angeles</strong> and surrounding areas. Whether your <strong>business</strong> is located in downtown or in a quieter neighborhood, our team of <strong>factory-trained technicians</strong> is ready to assist you with <strong>same-day repairs</strong> to minimize any disruption to your operations.</p><p>Our extensive <strong>service area</strong> ensures that no matter where your <strong>commercial kitchen</strong> is located, we are never too far away to provide top-quality <strong>appliance repair</strong> for your <strong>commercial freezer</strong>. We serve the following locations:</p><p>Wherever your <strong>business</strong> is located, our <strong>same-day service</strong> ensures that your <strong>commercial freezer</strong> gets the <strong>repair</strong> it needs fast, so you can get back to running your <strong>business</strong> without worrying about costly downtime or spoiled inventory.</p>
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
