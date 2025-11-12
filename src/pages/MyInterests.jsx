import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Loader from "../components/Loader";

const MyInterests = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser?.email) return;

    setLoading(true);
    fetch(`http://localhost:3000/my-interests?email=${currentUser.email}`)
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

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">My Interests</h1>

      {interests.length === 0 ? (
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
              {interests.map((interest) => (
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
