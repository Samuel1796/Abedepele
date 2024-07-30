import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images for leaflet
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const styles = `
  .leaflet-container {
    z-index: 10;
  }
  .modal-overlay {
    z-index: 1000;
  }
`;
// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const UserPage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    id: "123456",
    points: 1500,
    initials: "JD",
  });

  const [userLocation, setUserLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ type: "", rate: 0 });
  const [pointsToRedeem, setPointsToRedeem] = useState(100);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [history, setHistory] = useState([]);

  // Static agent location
  const agentLocation = { latitude: 4.9472, longitude: -1.7137 }; // Example coordinates for Accra, Ghana

  useEffect(() => {
    // Retrieve user location from localStorage
    const storedLocation = localStorage.getItem("userLocation");
    if (storedLocation) {
      setUserLocation(JSON.parse(storedLocation));
    }
  }, []);

  const openModal = (type, rate) => {
    setModalContent({ type, rate });
    setPointsToRedeem(100);
    setIsModalOpen(true);
    setShowConfirmation(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    const newBalance = user.points - pointsToRedeem;
    setUser((prevUser) => ({
      ...prevUser,
      points: newBalance,
    }));

    const newRedemption = {
      type: modalContent.type,
      points: pointsToRedeem,
      value: (pointsToRedeem * modalContent.rate).toFixed(2),
      date: new Date().toISOString(),
    };

    setHistory((prevHistory) => [...prevHistory, newRedemption]);
    setShowConfirmation(true);
  };

  const RedeemModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center modal-overlay ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        {!showConfirmation ? (
          <>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Convert Points to {modalContent.type}
            </h3>
            <div className="flex justify-between items-center mb-8">
              <div className="w-36 h-36 rounded-full bg-green-100 border-4 border-green-500 flex flex-col items-center justify-center">
                <span className="text-sm text-green-700">Points</span>
                <span className="text-3xl font-bold text-green-700">
                  {pointsToRedeem}
                </span>
              </div>
              <div className="text-4xl font-bold text-blue-600">→</div>
              <div className="w-36 h-36 rounded-full bg-blue-100 border-4 border-blue-500 flex flex-col items-center justify-center">
                <span className="text-sm text-blue-700">
                  {modalContent.type}
                </span>
                <span className="text-3xl font-bold text-blue-700">
                  ₵{(pointsToRedeem * modalContent.rate).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="pointsInput"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Points to redeem (Max: {user.points}):
              </label>
              <input
                type="number"
                id="pointsInput"
                value={pointsToRedeem}
                onChange={(e) => {
                  const value = Math.min(
                    Math.max(parseInt(e.target.value) || 0, 0),
                    user.points
                  );
                  setPointsToRedeem((prev) => value);
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
                max={user.points}
              />
            </div>
            <p className="text-center mb-6 text-gray-600">
              Convert {pointsToRedeem} points to ₵
              {(pointsToRedeem * modalContent.rate).toFixed(2)} in{" "}
              {modalContent.type}
            </p>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className={`px-6 py-2 ${
                  pointsToRedeem > 0
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white rounded-lg transition-colors`}
                disabled={pointsToRedeem === 0}
              >
                Confirm
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-600">
              Redemption Successful!
            </h3>
            <p className="mb-6">
              You have successfully redeemed {pointsToRedeem} points for ₵
              {(pointsToRedeem * modalContent.rate).toFixed(2)} in{" "}
              {modalContent.type}.
            </p>
            <p className="mb-6">Your new balance: {user.points} points</p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const groupHistoryByDate = () => {
    const grouped = {};
    history.forEach((item) => {
      const date = new Date(item.date).toLocaleDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    return grouped;
  };

  const HistoryTimeline = () => {
    const groupedHistory = groupHistoryByDate();
    return (
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {Object.entries(groupedHistory).map(([date, items], dateIndex) => (
            <li key={date}>
              <div className="relative pb-8">
                {dateIndex !== Object.keys(groupedHistory).length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center ring-8 ring-white">
                      <svg
                        className="h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-500">{date}</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="ml-12 space-y-4">
                {items.map((item, itemIndex) => (
                  <li key={`${date}-${itemIndex}`} className="relative pb-4">
                    {itemIndex !== items.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                          <svg
                            className="h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-900">
                            Redeemed {item.points} points for {item.type}
                          </p>
                          <p className="text-sm text-gray-500">
                            Value: ₵{item.value}
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={item.date}>
                            {new Date(item.date).toLocaleTimeString()}
                          </time>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const MapSection = () => {
    if (!userLocation)
      return <p className="text-gray-600">Location not available</p>;

    const center = [userLocation.latitude, userLocation.longitude];

    return (
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>Your Location</Popup>
        </Marker>
        <Marker position={[agentLocation.latitude, agentLocation.longitude]}>
          <Popup>Nearby Agent</Popup>
        </Marker>
      </MapContainer>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <style>{styles}</style>

      <main className="container mx-auto px-4 py-8 mt-20 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Profile Section */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg col-span-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Profile</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
                  {user.initials}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-gray-600">ID: {user.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-600">Points</p>
                <p className="text-4xl font-bold text-green-600">
                  {user.points}
                </p>
              </div>
            </div>
          </section>

          {/* Redeem Points Section */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Redeem Points
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => openModal("Airtime", 0.01)}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Redeem Airtime
              </button>
              <button
                onClick={() => openModal("Voucher", 0.005)}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Redeem Vouchers
              </button>
              <button
                onClick={() => openModal("Bill Card", 0.0075)}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Redeem Bill Cards
              </button>
            </div>
          </section>

          {/* Location Section */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Nearby Agent
            </h2>
            <MapSection />
            <p className="mt-4 text-gray-600">
              Agent Address: 123 Example Street, Essikado, Ghana
            </p>
          </section>

          {/* History Section */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg col-span-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800"> History</h2>
            <HistoryTimeline />
          </section>
        </div>
      </main>
      <RedeemModal />
      <Footer />
    </div>
  );
};

export default UserPage;
