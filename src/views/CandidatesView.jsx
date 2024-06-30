import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/Background Image/49681450_9307751 1.png'; // Ensure the path to your image is correct
import { useNavigate } from 'react-router-dom';

const candidates = [
  { name: 'Kwame Nkrumah', position: 'President', year: 'Level 200', bio: 'First President of Ghana and a prominent Pan-Africanist.' },
  { name: 'Yaa Asantewaa', position: 'President', year: 'Level 100', bio: 'Queen mother of Ejisu who led the Ashanti rebellion against British colonialism.' },
  { name: 'Kofi Annan', position: 'President', year: 'Level 400', bio: 'Former Secretary-General of the United Nations and Nobel Peace Prize laureate.' },
  { name: 'Efua Sutherland', position: 'Secretary', year: 'Level 200', bio: 'Ghanaian playwright, director, and dramatist.' },
  { name: 'Abedi Pele', position: 'Financial Secretary', year: 'Level 100', bio: 'Ghanaian footballer, considered one of the greatest African players of all time.' },
  { name: 'Ama Ata Aidoo', position: 'Financial Secretary', year: 'Level 400', bio: 'Ghanaian author, poet, playwright, and academic.' },
  { name: 'Samia Nkrumah', position: 'PRO', year: 'Level 300', bio: 'Ghanaian politician and daughter of Kwame Nkrumah.' },
  { name: 'J.E.A. Mills', position: 'President', year: 'Level 200', bio: 'Former President of Ghana, known for his anti-corruption campaign.' },
  { name: 'Asamoah Gyan', position: 'Financial Secretary', year: 'Level 100', bio: 'Ghanaian footballer, who played as a striker for several clubs in Europe and Asia.' },
  { name: 'Kwame Ture', position: 'Secretary', year: 'Level 200', bio: 'Ghanaian-American poet, journalist, and civil rights activist, known professionally as Stokely Carmichael.' },
  { name: 'Highest Yosh', position: 'PRO', year: 'Level 200', bio: 'Ghanaian-American poet, journalist, and civil rights activist, known professionally as Stokely Carmichael.' }
];

const CandidatesView = () => {
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleVote = (candidate) => {
    setSelectedCandidates(prev => {
      if (prev[candidate.position] === candidate.name) {
        const updated = { ...prev };
        delete updated[candidate.position];
        return updated;
      } else {
        return { ...prev, [candidate.position]: candidate.name };
      }
    });
  };

  const handleSubmit = () => {
    console.log('Votes submitted:', selectedCandidates);
    alert('Thanks for voting');
    navigate('/'); // Redirect to the home page
  };

  const handleDismiss = () => {
    setSelectedCandidate(null);
  };

  const renderSkeleton = () => (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2">
      <div className="animate-pulse flex flex-col items-center pb-10 pt-5">
        <div className="w-24 h-24 mb-3 rounded-full bg-gray-300"></div>
        <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-20 mb-4"></div>
        <div className="flex mt-4 md:mt-6 space-x-2">
          <div className="h-8 bg-gray-300 rounded w-20"></div>
          <div className="h-8 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );

  const renderCandidates = (position) => {
    return candidates
      .filter(candidate => candidate.position === position)
      .map(candidate => (
        <div key={candidate.name} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2">
          <div className="flex flex-col items-center pb-10 pt-5">
            <div className="w-24 h-24 mb-3 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-4xl text-gray-600">{candidate.name[0]}</span>
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900">{candidate.name}</h5>
            <span className="text-sm text-gray-500">{candidate.year}</span>
            <div className="flex mt-4 md:mt-6">
              <button
                onClick={() => handleVote(candidate)}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ${selectedCandidates[position] && selectedCandidates[position] !== candidate.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={selectedCandidates[position] && selectedCandidates[position] !== candidate.name}
              >
                {selectedCandidates[position] === candidate.name ? 'Selected' : 'Vote'}
              </button>
              <button
                onClick={() => setSelectedCandidate(candidate)}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <div className="container mx-auto p-4 min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="mb-8">
        <div className="bg-blue-500 text-white text-center py-2 mb-4">
          <h2 className="text-2xl font-bold">President</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {loading ? renderSkeleton() : renderCandidates('President')}
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-blue-500 text-white text-center py-2 mb-4">
          <h2 className="text-2xl font-bold">Secretary</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {loading ? renderSkeleton() : renderCandidates('Secretary')}
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-blue-500 text-white text-center py-2 mb-4">
          <h2 className="text-2xl font-bold">Financial Secretary</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {loading ? renderSkeleton() : renderCandidates('Financial Secretary')}
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-blue-500 text-white text-center py-2 mb-4">
          <h2 className="text-2xl font-bold">PRO</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {loading ? renderSkeleton() : renderCandidates('PRO')}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Submit Votes
        </button>
      </div>

      {selectedCandidate && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                data-modal-hide="popup-modal"
                onClick={handleDismiss}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <div className="w-24 h-24 mb-3 rounded-full bg-gray-300 flex items-center justify-center mx-auto">
                  <span className="text-4xl text-gray-600">{selectedCandidate.name[0]}</span>
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900">{selectedCandidate.name}</h5>
                <span className="text-sm text-gray-500">{selectedCandidate.year}</span>
                <p className="mt-2 text-gray-700">{selectedCandidate.bio}</p>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="mt-4 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={handleDismiss}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidatesView;
