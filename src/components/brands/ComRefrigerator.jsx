import React from "react";

const brands = [
  
  "True",
  "Turbo-Air",
  "Hoshizaki",
  "Hussmann",
  "Frigoglass",
  "AHT Cooling Systems",
  "Coldline",
  "Everest",
  "Felix Storch",
  "Summit Appliance",
  "Conental Refrigerator",
  "Perlick",
  "Traulsen",
  "Beverage-Air",
  "Randell",
  "Migali",
  "Avantco",
  "Delfield",
  "Kool-It",
  "Maxx-cold",
  "Victory",
  "Arctic-Air",
  "Southbend",


];

export const Brands = () => {
  const getBrandHref = (brand) => {
      if (brand === "Fisher & Paykel") return "/fisher-paykel-bbg-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-commercial-refrigerator-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand} Commercial Refrigerator Repair`}>
              <span className={["Fisher & Paykel", "Elmira Stove Works"].includes(brand) ? "brand-small" : ""}>
                {brand}
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
