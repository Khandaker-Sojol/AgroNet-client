import React from "react";
import { Link } from "react-router";

const CropCard = ({ crop }) => {
  return (
    <div>
      <div key={crop._id} className="border border-gray-200 rounded p-4 shadow">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2">{crop.cropName}</h2>
        <p className="text-gray-600">{crop.description?.slice(0, 60)}...</p>
        <p>Price: {crop.pricePerUnit} per kg</p>
        <Link
          to={`/crops/${crop._id}`}
          className="bg-green-500 text-white px-4 py-2 mt-2 inline-block rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CropCard;
