import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AgentPage = () => {
  const [agent, setAgent] = useState({
    name: 'Jane Smith',
    id: 'AG789012',
    pointsDelivered: 0,
    initials: 'JS'
  });

  const [nearbyUsers, setNearbyUsers] = useState([]);
  const [isConvertModalOpen, setIsConvertModalOpen] = useState(false);
  const [plasticType, setPlasticType] = useState('PET');
  const [weight, setWeight] = useState(0);
  const [userId, setUserId] = useState('');
  const [clientName, setClientName] = useState('');
  const [history, setHistory] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchNearbyUsers = async () => {
      try {
        const response = await axios.get('https://api.example.com/nearby-users');
        setNearbyUsers(response.data);
      } catch (error) {
        console.error('Error fetching nearby users:', error);
      }
    };

    fetchNearbyUsers();
  }, []);

  const openConvertModal = () => {
    setIsConvertModalOpen(true);
  };

  const closeConvertModal = () => {
    setIsConvertModalOpen(false);
    setPlasticType('PET');
    setWeight(0);
    setUserId('');
    setClientName('');
    setShowConfirmation(false);
  };

  const calculatePoints = (type, weight) => {
    const rates = {
      PET: 10,
      HDPE: 8,
      LDPE: 6
    };
    return Math.round(weight * rates[type]);
  };

  const handleConvert = async () => {
    const points = calculatePoints(plasticType, weight);
    try {
      // In a real application, you would make an API call here
      // await axios.post('https://api.example.com/add-points', { userId, clientName, points });
      
      const newConversion = {
        type: plasticType,
        weight,
        points,
        userId,
        clientName,
        date: new Date().toISOString(),
      };
      
      setHistory(prevHistory => [...prevHistory, newConversion]);
      setAgent(prevAgent => ({
        ...prevAgent,
        pointsDelivered: prevAgent.pointsDelivered + points
      }));
      closeConvertModal();
    } catch (error) {
      console.error('Error adding points:', error);
    }
  };

  const plasticTypes = [
    { value: 'PET', label: 'PET (e.g., water bottles, soda bottles)', points: 10 },
    { value: 'HDPE', label: 'HDPE (e.g., milk jugs, shampoo bottles)', points: 8 },
    { value: 'LDPE', label: 'LDPE (e.g., plastic bags, squeezable bottles)', points: 6 },
  ];

  const ConvertModal = () => {
    const handleConvertClick = () => {
      setShowConfirmation(true);
    };

    const handleConfirm = () => {
      handleConvert();
      setShowConfirmation(false);
    };

    return (
      <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isConvertModalOpen ? '' : 'hidden'}`}>
        <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Convert Plastic to Points</h3>
          {!showConfirmation ? (
            <>
              <div className="mb-4">
                <label htmlFor="plasticType" className="block text-sm font-medium text-gray-700 mb-2">
                  Plastic Type:
                </label>
                <select
                  id="plasticType"
                  value={plasticType}
                  onChange={(e) => setPlasticType(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
                >
                  {plasticTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label} - {type.points} points/kg
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg):
                </label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
                  Client ID:
                </label>
                <input
                  type="text"
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
                  Client Name:
                </label>
                <input
                  type="text"
                  id="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
                />
              </div>
              <p className="text-center mb-6 text-gray-600">
                Points to be added: {calculatePoints(plasticType, weight)}
              </p>
              <div className="flex justify-between">
                <button onClick={closeConvertModal} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Cancel</button>
                <button 
                  onClick={handleConvertClick} 
                  className="px-6 py-2 bg-green-600 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Convert
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4">Confirm Conversion</h4>
              <p className="mb-4 text-black">
                Are you sure you want to convert {weight}kg of {plasticType} plastic for {clientName} (ID: {userId})?
              </p>
              <p className="mb-6 font-bold">
                Points to be added: {calculatePoints(plasticType, weight)}
              </p>
              <div className="flex justify-between">
                <button onClick={() => setShowConfirmation(false)} className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                  Back
                </button>
                <button 
                  onClick={handleConfirm}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const groupHistoryByDate = () => {
    const grouped = {};
    history.forEach(item => {
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
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center ring-8 ring-white">
                      <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
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
                      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-900">Converted {item.weight}kg of {item.type} plastic for {item.clientName} (ID: {item.userId})</p>
                          <p className="text-sm text-gray-500">Points added: {item.points}</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={item.date}>{new Date(item.date).toLocaleTimeString()}</time>
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-20 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Profile Section */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg col-span-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Agent Profile</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-xl font-bold">
                  {agent.initials}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{agent.name}</h3>
                  <p className="text-gray-600">ID: {agent.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-600">Total Points Delivered</p>
                <p className="text-4xl font-bold text-blue-600">{agent.pointsDelivered}</p>
              </div>
            </div>
          </section>

          {/* Convert Plastic Section */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Convert Plastic</h2>
            <button onClick={openConvertModal} className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Convert Plastic to Points
            </button>
          </section>

          {/* Nearby Users Section */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Nearby Users</h2>
            {nearbyUsers.length > 0 ? (
              <ul className="space-y-2">
                {nearbyUsers.map((user, index) => (
                  <li key={index} className="text-gray-600">
                    {user.name} - {user.distance}km away
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No nearby users found</p>
            )}
          </section>

          {/* History Section */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg col-span-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Conversion History</h2>
            <HistoryTimeline />
          </section>
        </div>
      </main>
      <ConvertModal />
      <Footer/>
    </div>
  );
};

export default AgentPage;