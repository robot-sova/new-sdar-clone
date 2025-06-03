import React from "react";

const brands = [
    
    "General Electric",
    "Whirlpool",
    "KitchenAid",
    "Samsung",
    "LG Electronics",
    "Bosch",
    "Frigidaire",
    "Maytag",
    "Kenmore",
    "Jenn-Air",
    "Thermador",
    "Wolf",
    "Electrolux",
    "Viking",
    "Dacor",
    "Bertazzoni",
    "La Cornue",
    "Miele",
    "Fisher & Paykel",
    "Gaggenau",
    "Haier",
    "Smeg",
    "BlueStar",
    "Monogram",
    "Café",

];

export const Brands = () => {
  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <span className={["General Electric", "Fisher & Paykel"].includes(brand) ? "brand-small" : ""}>
  {brand}
</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Brands;
