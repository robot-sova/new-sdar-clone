import React from "react";

const brands = [
  "AGA",
  "Big Chill",
  "BlueStar",
  "Bosch",
  "Dacor",
  "Fisher & Paykel",
  "Gaggenau",
  "Jenn-Air",
  "KitchenAid",
  "La Cornue",
  "Miele",
  "Smeg",
  "Sub-Zero",
  "Thermador",
  "Viking",
  "Wolf",
  "Elmira Stove Works",
];

export const Brands = () => {
  const getBrandHref = (brand) => {
    if (brand === "Sub-Zero") return "/sub-zero-repair/";
    if (brand === "Fisher & Paykel") return "/fisher-paykel-appliance-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-appliance-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand} Appliance Repair`}>
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
