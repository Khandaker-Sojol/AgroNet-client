import React, { use, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router";
import AuthContext from "../context/AuthContext";
import CropCard from "./cropCard";

const LatestCrops = () => {
  const { loading, setLoading } = use(AuthContext);
  const [latestCrops, setLatestCrops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latest-crops")
      .then((res) => res.json())
      .then((data) => {
        setLatestCrops(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching latest crops:", err);
        setLoading(false);
      });
  }, [setLoading]);

  if (loading) return <Loader></Loader>;
  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-[#388E3C]">
            Latest Crop Posts
          </h2>
          <p className="text-gray-600 mt-2">
            Check out the most recent crops shared by our farmers
          </p>
        </div>

        {/* Crops Grid */}
        {latestCrops.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {latestCrops.map((crop) => (
              <CropCard key={crop._id} crop={crop}></CropCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No crops available yet.</p>
        )}

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/all-crops"
            className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View All Crops
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCrops;
