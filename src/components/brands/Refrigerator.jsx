import React from "react";

const brands = [
  "General Electric",
  "Whirlpool",
  "Frigidaire",
  "Samsung",
  "LG",
  "KitchenAid",
  "Maytag",
  "Bosch",
  "Electrolux",
  "Kenmore",
  "Viking",
  "Thermador",
  "Sub-Zero",
  "Monogram",
  "Miele",
  "JennAir",
  "Bertazzoni",
  "Fisher & Paykel",
  "True Residential",
  "BlueStar",
  "Dacor",
  "Gaggenau",
  "Hotpoint",
  "Amana",
  "Beko",
  "Haier",
  "Smeg",
];

export const Brands = () => {
  const getBrandHref = (brand) => {
      if (brand === "Fisher & Paykel") return "/fisher-paykel-refrigerator-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-refrigerator-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand} Refrigerator Repair`}>
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
