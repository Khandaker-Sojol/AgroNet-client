import React from "react";

const steps = [
  {
    icon: "🌱",
    title: "Add Your Crop",
    description:
      "Login and add your crop details like name, category, price, quantity, location and image.",
  },
  {
    icon: "📤",
    title: "Publish",
    description:
      "Publish your crop to make it visible to buyers in your region.",
  },
  {
    icon: "🛒",
    title: "Buy & Sell",
    description:
      "Buy or sell crops easily, check details, and manage your posts.",
  },
  {
    icon: "💰",
    title: "Get Paid",
    description: "Complete transactions smoothly and get paid securely.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
