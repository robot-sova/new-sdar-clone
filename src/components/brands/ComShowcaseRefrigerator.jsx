import React from "react";

const brands = [
 
  "True Manufacturing",
  "Turbo Air",
  "Beverage-Air",
  "Traulsen",
  "Delfield",
  "Hoshizaki",
  "Nor-Lake",
  "Continental",
  "Arctic Air",
  "Avantco",
  "Kool-It",
  "Migali",
  "Maxx Cold",
  "Victory",
  "Fogel",
  "Master-Bilt",
  "Federal Industries",
  "Excellence Industries",
  "Summit",
  "Blue Air",

];

export const Brands = () => {
  const getBrandHref = (brand) => {
      if (brand === "Fisher & Paykel") return "/fisher-paykel-bbg-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-commercial-showcase-refrigerator-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand} Commercial Showcase Refrigerator Repair`}>
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
