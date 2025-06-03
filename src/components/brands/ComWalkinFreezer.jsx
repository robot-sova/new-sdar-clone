import React from "react";

const brands = [
 
   "True Refrigeration",
  "Turbo Air",
  "Kolpak",
  "Beverage-Air",
  "Hoshizaki",
  "Nor-Lake",
  "Master-Bilt",
  "Amerikooler",
  "U.S. Cooler",
  "Arctic Air",
  "Traulsen",
  "Victory",
  "Delfield",
  "Everest Refrigeration",
  "Perlick",
  "Imperial Brown",
  "Polar King",
  "Thermo-Kool",
  "CrownTonka",
  "Bally Refrigerated Boxes",

];

export const Brands = () => {
  const getBrandHref = (brand) => {
        if (brand === "U.S. Cooler") return "/us-cooler-walk-in-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-walk-in-freezer-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand} Walk in Freezer Repair`}>
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
