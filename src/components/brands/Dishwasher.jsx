import React from "react";

const brands = [
  "Bosch",
  "Whirlpool",
  "KitchenAid",
  "Maytag",
  "Samsung",
  "LG",
  "General Electric",
  "Frigidaire",
  "Miele",
  "Electrolux",
  "Kenmore",
  "Cove",
  "Thermador",
  "Fisher & Paykel",
  "Dacor",
  "Viking",
  "Jenn-Air",
  "Blomberg",
  "Bertazzoni",
  "Smeg",
  "Asko",

];

export const Brands = () => {
  const getBrandHref = (brand) => {
      if (brand === "Fisher & Paykel") return "/fisher-paykel-dishwasher-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-dishwasher-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand} Dishwasher Repair`}>
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
