// ExpertsSection.jsx
import React from "react";

const experts = [
  {
    name: "Conrad Velez",
    role: "Innovation & Tech Advisor",
    image: "https://i.ibb.co/4nyhTYxc/63-profile-1-768x768.webp",
  },
  {
    name: "Karen Thomas",
    role: "Sustainability Lead",
    image: "https://i.ibb.co/RTTRxWD0/63-profile-2-768x768.webp",
  },
  {
    name: "Thomas Lynch",
    role: "Farm Operations Director",
    image: "https://i.ibb.co/Pv85cX10/63-profile-3-768x768.webp",
  },
  {
    name: "Miguel Torres",
    role: "Sustainability Lead",
    image: "https://i.ibb.co/6RR5mmYH/63-profile-4-768x768.webp",
  },
];

const ExpertsSection = () => {
  return (
    <section className="py-16 px-4 md:px-16">
      <div className="text-center mb-8">
        <button className="border px-4 py-1 rounded text-sm mb-2 hover:text-green-900 transition cursor-pointer">
          MEET OUR EXPERTS
        </button>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Leaders in Modern Agriculture
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-92 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-2xl">{expert.name}</h3>
                <p className="text-sm">{expert.role}</p>
              </div>
              <span className="text-green-900 font-bold text-xl">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;
