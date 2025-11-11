import React, { useEffect, useState } from "react";

const AgroNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const sampleNews = [
      {
        id: 1,
        title: "Solar Irrigation Revolution in Bangladesh 🌞",
        description:
          "Thousands of farmers across Bangladesh are switching to solar-powered irrigation systems to cut fuel costs and ensure sustainable farming.",
        image: "https://i.ibb.co/dsfQP664/download-1.jpg",
        date: "November 10, 2025",
        author: "AgroNet News Team",
      },
      {
        id: 2,
        title: "Rise of Organic Fertilizers 🌿",
        description:
          "The demand for organic fertilizers is booming as health-conscious consumers prefer chemical-free crops and eco-friendly farming practices.",
        image: "https://i.ibb.co/mrJRLtTj/download-2.jpg",
        date: "November 9, 2025",
        author: "Bangla Krishi Update",
      },
      {
        id: 3,
        title: "AI Helping Farmers Predict Weather & Diseases 🤖",
        description:
          "AgroTech startups introduce AI tools that help farmers analyze weather data and prevent pest attacks before they spread.",
        image: "https://i.ibb.co/9HfG0PDg/download-3.jpg",
        date: "November 7, 2025",
        author: "AgroTech Journal",
      },
      {
        id: 4,
        title: "Hydroponic Vegetables Gaining Popularity 🥬",
        description:
          "Urban farmers are adopting hydroponics — growing plants without soil — ensuring cleaner, faster, and higher-quality vegetable production.",
        image: "https://i.ibb.co/qLV9hrTJ/download-4.jpg",
        date: "November 5, 2025",
        author: "GreenFarm Daily",
      },
      {
        id: 5,
        title: "Drone Technology Boosts Crop Monitoring 🚁",
        description:
          "Modern farmers are using drones for spraying pesticides, mapping fields, and real-time monitoring of crop health.",
        image: "https://i.ibb.co/j90dgWdw/images-3.jpg",
        date: "November 4, 2025",
        author: "Agro Innovation Hub",
      },
      {
        id: 6,
        title: "Bangladesh Exporting Mangoes to Europe 🥭",
        description:
          "High-quality mangoes from Rajshahi and Chapainawabganj are now reaching European markets thanks to improved packaging and export support.",
        image: "https://i.ibb.co/j9VSmF77/download-5.jpg",
        date: "November 2, 2025",
        author: "Agro Export News",
      },
    ];

    setNews(sampleNews);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2E7D32]">
            🌾 Agro News & Blogs
          </h2>
          <p className="text-gray-600 mt-2">
            Stay updated with the latest agricultural trends and innovations
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-[#388E3C]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description.length > 120
                    ? item.description.slice(0, 120) + "..."
                    : item.description}
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
                <button className="mt-2 bg-[#4CAF50] hover:bg-[#388E3C] text-white px-4 py-2 rounded-lg transition text-sm cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgroNews;
