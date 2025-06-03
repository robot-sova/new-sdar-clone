import React from "react";

const brands = [
    
"True-refrigeration",
"Beverage-Air",
"Turbo-Air",
"Kool-it",
"Perlick",
"Avantco",
"Manitowoc",
"Scotsman",
"Hoshizaki",
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
