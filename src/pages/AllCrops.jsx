import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import CropCard from "../components/cropCard";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://agronet-server.vercel.app/crops")
      .then((res) => res.json())
      .then((data) => {
        const cropData = data || [];
        setCrops(cropData);
        setFilteredCrops(cropData); // initial load e full data
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredCrops(crops); // reset to all crops if search empty
    } else {
      const filtered = crops.filter((crop) =>
        crop.name.toLowerCase().includes(query)
      );
      setFilteredCrops(filtered);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search crops..."
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
        />
      </div>

      {filteredCrops.length === 0 ? (
        <p className="text-center text-gray-500">No results found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCrops.map((crop) => (
            <CropCard key={crop._id} crop={crop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCrops;
