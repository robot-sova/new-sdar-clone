import React from "react";

const brands = [

  "Middleby Marshalls",
  "Bakers Pride",
  "Blodgett",
  "Marsal & Sons",
  "Lincoln",
  "Vulcan",
  "Southbend",
  "Garland",
  "Hobart",
  "Turbochef",
  "Rational",
  "Alto-Shaam",
  "Electrolux Professional",
  "Merrychef",
  "Doyon",
  "Peerless",
  "Waring",
  "Cleveland Range",
  "Imperial",
  "Montague",
  "BKI",
  "Carter-Hoffmann",
  "Cres Cor",
  "Equipex",
  "FWE",
  "Lang",
  "Moffat",
  "Toastmaster",
  "Winholt",
  "Mainstreet",
  "Kratos",

];

export const Brands = () => {
  const getBrandHref = (brand) => {
      if (brand === "Fisher & Paykel") return "/fisher-paykel-bbg-repair/";
    // Generic formatter: lowercase, remove special chars, replace spaces with dashes
    return `/${brand
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "-")}-commercial-oven-repair/`;
  };

  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <a href={getBrandHref(brand)} title={`${brand} Commercial Oven Repair`}>
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
