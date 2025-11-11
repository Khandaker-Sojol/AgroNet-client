import React from "react";
import { Sprout, Leaf, BarChart3, User } from "lucide-react";

const features = [
  {
    icon: <Sprout size={36} className="text-black" />,
    title: "Innovation-Driven",
    desc: "We use AI, IoT, and machine learning to support smarter decisions in real time.",
  },
  {
    icon: <Leaf size={36} className="text-black" />,
    title: "Sustainability First",
    desc: "Every solution we offer is designed to protect soil, water, and ecosystems.",
  },
  {
    icon: <BarChart3 size={36} className="text-black" />,
    title: "Proven Results",
    desc: "Higher yields, lower costs, and improved sustainability.",
  },
  {
    icon: <User size={36} className="text-black" />,
    title: "Farm-Tested Expertise",
    desc: "Developed by farmers, for farmers — backed by agronomists and tech experts.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-center">
      <div className="max-w-9xl mx-auto">
        <p className="uppercase tracking-widest text-gray-500 mb-3 font-semibold">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
          Leading the Way in Smart, <br /> Scalable Farming
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We blend innovation with proven agronomic knowledge to help your
          agribusiness thrive in a rapidly evolving landscape.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-lime-400/70 rounded-lg p-3">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
