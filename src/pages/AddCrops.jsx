import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCrop = () => {
  const { user: currentUser, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddCrop = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const cropName = form.cropName.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.pricePerUnit.value;
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;

    const newCrop = {
      cropName,
      category,
      quantity: parseFloat(quantity),
      pricePerUnit: parseFloat(price),
      location,
      description,
      image,
      ownerEmail: currentUser?.email,
      ownerName: currentUser?.displayName || currentUser?.name,
      created_at: new Date(),
    };

    try {
      const res = await fetch("http://localhost:3000/crops", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCrop),
      });

      const data = await res.json();
      if (data.insertedId || data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Crop added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/all-crops");
      }
    } catch (error) {
      console.error("Error adding crop:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to add crop!",
        text: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-6 text-green-700">
        Add New Crop
      </h2>
      <form
        onSubmit={handleAddCrop}
        className="bg-white shadow-md rounded-2xl p-6 space-y-5 border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="cropName"
            placeholder="Crop Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity (kg)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="pricePerUnit"
            placeholder="Price (৳ per kg)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows="4"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="btn bg-green-600 hover:bg-green-700 text-white w-full"
        >
          {loading ? "Adding..." : "Add Crop"}
        </button>
      </form>
    </div>
  );
};

export default AddCrop;
