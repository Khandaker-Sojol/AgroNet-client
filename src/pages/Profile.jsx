import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateProfileUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfileUser({ displayName: name, photoURL: photo })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your profile has been successfully updated!",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: err.message,
        });
        setLoading(false);
      });
  };

  return (
    <div className="min-h-[60vh] flex justify-center items-start py-10 bg-base-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

        <div className="flex justify-center mb-6">
          <img
            src={photo || "/images/default-avatar.png"}
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover border-2 border-green-500"
          />
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter image URL"
              className="input w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition cursor-pointer"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
