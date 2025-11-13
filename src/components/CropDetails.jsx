import React, { use, useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Loader from "../components/Loader";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const CropDetails = () => {
  const { user: currentUser } = use(AuthContext);
  const { id } = useParams();
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);

  // Interest form state
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [alreadyInterested, setAlreadyInterested] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    setLoading(true);
    fetch(`https://agronet-server.vercel.app/crops/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCrop(data);
        setLoading(false);

        // check if current user already sent interest
        if (currentUser && data.interests) {
          const existing = data.interests.find(
            (i) => i.userEmail === currentUser.email
          );
          setAlreadyInterested(Boolean(existing));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id, currentUser]);

  useEffect(() => {
    if (crop) setTotalPrice(quantity * crop.pricePerUnit);
  }, [quantity, crop]);

  const handleSubmitInterest = async () => {
    if (quantity < 1) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Quantity",
        text: "Quantity must be at least 1",
      });
      return;
    }

    //Swal confirmation modal
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to send interest for ${quantity} ${crop.unit}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, send it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    const interestData = {
      cropId: crop._id,
      userEmail: currentUser.email,
      userName: currentUser.displayName,
      quantity,
      message,
      status: "pending",
    };

    setSubmitting(true);
    try {
      const res = await fetch(
        `https://agronet-server.vercel.app/crops/${crop._id}/interests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${currentUser.accessToken}`,
          },
          body: JSON.stringify(interestData),
        }
      );

      const updatedCrop = await res.json();
      setCrop(updatedCrop);
      setAlreadyInterested(true);
      setQuantity(1);
      setMessage("");
      Swal.fire({
        icon: "success",
        title: "Interest submitted!",
        text: "Your interest has been sent successfully.",
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Failed to submit interest. Please try again.",
      });
    }
    setSubmitting(false);
  };

  const handleInterestAction = async (interestId, action) => {
    try {
      const res = await fetch(
        `https://agronet-server.vercel.app/crops/${crop._id}/interests/${interestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${currentUser.accessToken}`,
          },
          body: JSON.stringify({ action }),
        }
      );
      const updatedCrop = await res.json();
      setCrop(updatedCrop);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading || !currentUser) return <Loader />;

  if (!crop) return <p className="text-center text-gray-500">Crop not found</p>;
  const isOwner = currentUser?.email === crop.owner.ownerEmail;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Crop Information Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <img
          src={crop.image || "https://via.placeholder.com/400"}
          alt={crop.name}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{crop.cropName}</h1>
          <p className="text-gray-600 mb-1">Type: {crop.category}</p>
          <p className="text-gray-600 mb-1">
            Price per unit: {crop.pricePerUnit} tk / kg
          </p>
          <p className="text-gray-600 mb-1">
            Available Quantity: {crop.quantity}
          </p>
          <p className="text-gray-600 mb-1">Location: {crop.location}</p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold underline">Description :</span>{" "}
            {crop.description}
          </p>
        </div>
      </div>

      {/* Interest Form for non-owner */}
      {!isOwner && !alreadyInterested && currentUser && (
        <div className="border p-4 rounded mb-8 shadow">
          <h2 className="text-xl font-semibold mb-2">Send Interest</h2>
          <div className="flex flex-col gap-3">
            <label>
              Quantity ({crop.unit}):
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border p-2 rounded w-full mt-1"
              />
            </label>
            <label>
              Message:
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border p-2 rounded w-full mt-1"
              />
            </label>
            <p>Total Price: {totalPrice}</p>
            <button
              onClick={handleSubmitInterest}
              disabled={submitting}
              className="bg-green-500 hover:bg-green-600 cursor-pointer text-white py-2 px-4 rounded mt-2"
            >
              {submitting ? "Submitting..." : "Submit Interest"}
            </button>
          </div>
        </div>
      )}

      {/* Already sent message */}
      {!isOwner && alreadyInterested && (
        <p className="text-green-600 font-semibold mb-8">
          You've already sent an interest for this crop.
        </p>
      )}

      {/* Received Interests Section for owner */}
      {isOwner && (
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Received Interests</h2>
          {crop.interests && crop.interests.length > 0 ? (
            <table className="w-full text-left border">
              <thead>
                <tr>
                  <th className="border px-2 py-1">Buyer Name</th>
                  <th className="border px-2 py-1">Quantity</th>
                  <th className="border px-2 py-1">Message</th>
                  <th className="border px-2 py-1">Status</th>
                  <th className="border px-2 py-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {crop.interests.map((interest) => (
                  <tr key={interest._id}>
                    <td className="border px-2 py-1">{interest.userName}</td>
                    <td className="border px-2 py-1">{interest.quantity}</td>
                    <td className="border px-2 py-1">{interest.message}</td>
                    <td className="border px-2 py-1">{interest.status}</td>
                    <td className="border px-2 py-1 flex gap-2">
                      {interest.status === "pending" && (
                        <>
                          <button
                            onClick={() =>
                              handleInterestAction(interest._id, "accepted")
                            }
                            className="bg-green-500 text-white px-2 rounded cursor-pointer"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() =>
                              handleInterestAction(interest._id, "rejected")
                            }
                            className="bg-red-500 text-white px-2 rounded cursor-pointer"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No interests received yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CropDetails;
