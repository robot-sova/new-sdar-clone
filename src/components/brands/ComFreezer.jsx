import React from "react";

const brands = [
  
  "Speed Queen",
  "Maytag",
  "Whirlpool",
  "Electrolux",
  "LG electronics",
  "Samsung",
  "Huebsch",
  "Dexter",
  "Milnor",
  "Continental Girbau",
  "Unimac",
  "Wascomat",
  "American Dryer Corporation",
  "Ipso",
  "Primus",
  "Miele",
  "Fagor",
  "Alliance Laundry Systems",
  "Girbau North America",
  "Pellerin Milnor Corporation",

];

export const Brands = () => {
  const getBrandHref = (brand) => {
      if (brand === "Fisher & Paykel") return "/fisher-paykel-commercial-freezer-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-commercial-freezer-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand}  Commercial Freezer Repair`}>
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
