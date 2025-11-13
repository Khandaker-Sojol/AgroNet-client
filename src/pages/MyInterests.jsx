import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Loader from "../components/Loader";

const MyInterests = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sorting state
  const [sortBy, setSortBy] = useState(""); // cropName, status, quantity
  const [order, setOrder] = useState("asc"); // asc or desc

  useEffect(() => {
    if (!currentUser?.email) return;

    setLoading(true);
    fetch(
      `https://agronet-server.vercel.app/my-interests?email=${currentUser.email}`,
      {
        headers: {
          authorization: `Bearer ${currentUser.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setInterests(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [currentUser]);

  if (loading) return <Loader />;

  // Sorting logic
  const sortedInterests = [...interests].sort((a, b) => {
    if (sortBy === "cropName") {
      return a.cropName.localeCompare(b.cropName) * (order === "asc" ? 1 : -1);
    }
    if (sortBy === "status") {
      const statusOrder = { pending: 0, accepted: 1, rejected: 2 };
      return (
        (statusOrder[a.status] - statusOrder[b.status]) *
        (order === "asc" ? 1 : -1)
      );
    }
    if (sortBy === "quantity") {
      return (a.quantity - b.quantity) * (order === "asc" ? 1 : -1);
    }
    return 0;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">My Interests</h1>

      {/* Sorting controls */}
      <div className="flex gap-3 mb-4 justify-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="cropName">Crop Name</option>
          <option value="status">Status</option>
          <option value="quantity">Quantity</option>
        </select>

        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {sortedInterests.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t shown interest in any crops yet.
        </p>
      ) : (
        <div className="overflow-x-auto shadow border rounded-lg">
          <table className="w-full border-collapse text-left">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2 border">Crop Name</th>
                <th className="px-4 py-2 border">Owner</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Message</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedInterests.map((interest) => (
                <tr key={interest._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{interest.cropName}</td>
                  <td className="px-4 py-2 border">{interest.ownerName}</td>
                  <td className="px-4 py-2 border">{interest.quantity}</td>
                  <td className="px-4 py-2 border">{interest.message}</td>
                  <td
                    className={`px-4 py-2 border font-semibold ${
                      interest.status === "accepted"
                        ? "text-green-600"
                        : interest.status === "rejected"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {interest.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyInterests;
