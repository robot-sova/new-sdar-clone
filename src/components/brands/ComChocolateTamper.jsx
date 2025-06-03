import React from "react";

const brands = [
  
  "Weber",
  "Traeger",
  "Char-Broil",
  "Nexgrill",
  "Big Green Egg",
  "Kamado Joe",
  "Napoleon",
  "Dyna-Glo",
  "Broil King",
  "Pit Boss",
  "Blackstone",
  "Cuisinart",
  "Z Grills",
  "Ooni",
  "Coleman",
  "Masterbuilt",
  "George Foreman",
  "Royal Gourmet",
  "Kenmore",
  "Lynx",

];

export const Brands = () => {
  const getBrandHref = (brand) => {
      if (brand === "Fisher & Paykel") return "/fisher-paykel-bbg-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-bbq-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand} BBQ Repair`}>
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
