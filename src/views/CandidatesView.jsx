import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/Background Image/49681450_9307751 1.png';
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

const positions = ['President', 'Secretary', 'Financial Secretary', 'PRO'];

const CandidatesView = () => {
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let countdown;
    if (showSuccessMessage) {
      countdown = setInterval(() => {
        setRedirectTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [showSuccessMessage]);

  useEffect(() => {
    if (redirectTimer === 0) {
      navigate('/');
    }
  }, [redirectTimer, navigate]);

  const handleVote = (candidate) => {
    setSelectedCandidates(prev => {
      if (prev[candidate.position] === candidate.name) {
        const updated = { ...prev };
        delete updated[candidate.position];
        return updated;
      } else {
        const updated = { ...prev, [candidate.position]: candidate.name };
        setErrorMessage(''); // Clear error message when selecting a candidate
        return updated;
      }
    });
  };
  

  const handleSubmit = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = () => {
    if (Object.keys(selectedCandidates).length === positions.length) {
      console.log('Votes submitted:', selectedCandidates);
      setShowSuccessMessage(true);
      setShowConfirmModal(false);
    } else {
      setErrorMessage('Please select a candidate for each position.');
    }
  };

  const handleDismiss = () => {
    setSelectedCandidate(null);
    setErrorMessage('');
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
      {showSuccessMessage ? (
        <div className="text-center p-6 bg-green-100 text-green-700 rounded-lg">
          <h2 className="text-2xl font-bold">Thank you for voting!</h2>
          <p>Your votes have been successfully submitted.</p>
          <br/><br/>
          <p>Redirecting to home page in {redirectTimer} seconds...</p>
        </div>
      ) : (
        <>
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
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <button
              onClick={handleSubmit}
              className={`inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ${showConfirmModal ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={showConfirmModal}
            >
              Submit Votes
            </button>
          </div>
        </>
      )}

      {selectedCandidate && (
        <div
          id="candidate-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={handleDismiss}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500">Candidate Profile</h3>
                <p className="mb-2 text-xl font-bold text-gray-900">{selectedCandidate.name}</p>
                <p className="mb-2 text-sm text-gray-500">{selectedCandidate.position}</p>
                <p className="mb-2 text-sm text-gray-500">{selectedCandidate.year}</p>
                <p className="mb-4 text-sm text-gray-500">{selectedCandidate.bio}</p>
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={handleDismiss}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => setShowConfirmModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500">Confirm Your Votes</h3>
                {positions.map((position) => (
                  <div key={position} className='text-black'>
                    <strong>{position}:</strong> {selectedCandidates[position] || 'No selection made'}
                  </div>
                ))}
                {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                <button
                  type="button"
                  className="mt-4 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={handleConfirmSubmit}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="mt-4 ml-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => setShowConfirmModal(false)}
                >
                  Cancel
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
