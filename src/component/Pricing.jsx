import React from "react";

const packages = [
  {
    name: "Bronze Package",
    price: "$99",
    description:
      "Ideal for individuals or small businesses looking to get started with mental wellness.",
    features: [
      "Access to basic wellness resources",
      "Weekly mental wellness tips",
      "Community support group access",
    ],
  },
  {
    name: "Silver Package",
    price: "$199",
    description:
      "A great choice for growing businesses with additional features and support for mental wellness.",
    features: [
      "All Bronze Package features",
      "Monthly guided meditation sessions",
      "Personalized wellness plan",
      "Access to expert webinars",
    ],
  },
  {
    name: "Gold Package",
    price: "$299",
    description:
      "Perfect for larger businesses needing advanced mental wellness features and premium support.",
    features: [
      "All Silver Package features",
      "Weekly one-on-one coaching sessions",
      "Advanced mental wellness tracking tools",
      "24/7 access to mental wellness experts",
    ],
  },
];
const Pricing = () => {
  // Logic for the contact Onclick
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="pricing" className="bg-[#f7f8fc] pt-32">
      <div className="container mx-auto px-8">
        {/* Heading---Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            Perfect for Small & Large Brands
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quae id excepturi, similique inventore eaque rerum error quidem
            temporibus voluptate?
          </p>
        </div>

        {/* Package----Card */}
        <div className="flex flex-col mx-auto md:flex-row md:gap-4 gap-8 pb-12">
          {
            // Packages Heading Names
            packages.map((pkgs, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex-1 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{pkgs.name}</h3>
                {/* Green--line */}
                <hr className="w-24 border text-primary border-primary" />
                {/* Amount---price */}
                <p className="text-3xl font-bold mb-4 mt-4 text-primary">
                  {pkgs.price}
                  <span className="text-lg font-normal text-black">/month</span>
                </p>
                {/* Description---Text */}
                <p className="text-lg mb-4 mt-4">{pkgs.description}</p>
                {/* Features---Text */}
                <ul className="mb-4">
                  {pkgs.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {/* Button */}
                <button
                  onClick={handleScrollToContact}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Get Started
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Pricing;
