import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Loader from "../components/Loader";
import Swal from "sweetalert2";

const MyPosts = () => {
  const { user, loading } = useContext(AuthContext);
  const [myCrops, setMyCrops] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [editingCrop, setEditingCrop] = useState(null);
  const [editLoading, setEditLoading] = useState(false);

  // Fetch logged-in user's crops
  useEffect(() => {
    if (user?.email) {
      setDataLoading(true);
      fetch(`https://agronet-server.vercel.app/my-crops?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMyCrops(data);
          setDataLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setDataLoading(false);
        });
    }
  }, [user]);

  if (loading || dataLoading) return <Loader />;

  // Delete crop
  const handleDelete = (cropId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This crop will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://agronet-server.vercel.app/crops/${cropId}`, {
          method: "DELETE",
        })
          .then(() => {
            setMyCrops(myCrops.filter((c) => c._id !== cropId));
            Swal.fire("Deleted!", "Your crop has been deleted.", "success");
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Failed to delete crop.", "error");
          });
      }
    });
  };

  // Edit crop
  const handleEdit = (crop) => setEditingCrop(crop);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);

    const updates = {
      name: e.target.name.value,
      category: e.target.category.value,
      quantity: parseFloat(e.target.quantity.value),
      pricePerUnit: parseFloat(e.target.pricePerUnit.value),
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    try {
      const res = await fetch(
        `https://agronet-server.vercel.app/crops/${editingCrop._id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updates),
        }
      );
      const data = await res.json();
      if (data.modifiedCount) {
        setMyCrops(
          myCrops.map((c) =>
            c._id === editingCrop._id ? { ...c, ...updates } : c
          )
        );
        Swal.fire("Updated!", "Crop info has been updated.", "success");
        setEditingCrop(null);
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to update crop.", "error");
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-8">
          🌾 My Added Crops
        </h2>

        {myCrops.length === 0 ? (
          <div className="text-center text-gray-600 mt-20">
            <p className="text-lg">You haven’t added any crops yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price/unit</th>
                  <th>Quantity</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myCrops.map((crop) => (
                  <tr key={crop._id}>
                    <td>
                      <img
                        src={crop.image}
                        alt={crop.cropName}
                        className="h-16 w-16 object-cover rounded"
                      />
                    </td>
                    <td>{crop.cropName}</td>
                    <td>{crop.category}</td>
                    <td>{crop.pricePerUnit}</td>
                    <td>{crop.quantity}</td>
                    <td>{crop.location}</td>
                    <td>{crop.description.slice(0, 50)}...</td>
                    <td className="flex gap-2">
                      <button
                        onClick={() => handleEdit(crop)}
                        className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(crop._id)}
                        className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Edit Modal */}
        {editingCrop && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-11/12 md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">Edit Crop</h3>
              <form onSubmit={handleEditSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  defaultValue={editingCrop.cropName}
                  placeholder="Crop Name"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  name="category"
                  defaultValue={editingCrop.category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  defaultValue={editingCrop.quantity}
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="number"
                  name="pricePerUnit"
                  defaultValue={editingCrop.pricePerUnit}
                  placeholder="Price/unit"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  name="location"
                  defaultValue={editingCrop.location}
                  placeholder="Location"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  name="image"
                  defaultValue={editingCrop.image}
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                  required
                />
                <textarea
                  name="description"
                  defaultValue={editingCrop.description}
                  placeholder="Description"
                  className="textarea textarea-bordered w-full"
                  rows="3"
                  required
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setEditingCrop(null)}
                    className="btn btn-sm bg-gray-400 hover:bg-gray-500 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={editLoading}
                    className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
                  >
                    {editLoading ? "Updating..." : "Update"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
