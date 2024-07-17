import React from 'react';
import mainimage from '../assets/1.jpg';

const Banner = () => {
  return (
    <section className="bg-green-50 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white text-black rounded-3xl p-6 mx-auto shadow-lg flex flex-col lg:flex-row items-center">
          {/* Left side text content */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 px-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-green-800">
              Make financial<br />service accessible
            </h1>
            <p className="text-lg sm:text-xl text-green-700">
              We've designed an app that complements<br />
              your unique lifestyle, simplifying cashless<br />
              payments and unlocking accessible<br />
              financial services for all.
            </p>
          </div>

          {/* Right side image and UI elements */}
          <div className="lg:w-1/2 relative">
            <div className="bg-transparent rounded-3xl p-6 relative overflow-hidden">
              <img 
                src={mainimage} 
                alt="Smiling man using app" 
                className="rounded-3xl"
              />

              {/* Balance card */}
              <div className="absolute top-4 right-4 bg-white text-black p-4 rounded-xl shadow-lg w-64 hidden md:block">
                <div className="text-green-500 text-xs mb-1">Security Guaranteed ✓</div>
                <div className="text-sm mb-1">Available Balance</div>
                <div className="text-2xl font-bold mb-2">500 Points</div>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 text-black px-4 py-1 rounded-full text-sm">Redeem</button>
                  <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Top Up</button>
                </div>
              </div>

              {/* Airtime top-up card */}
              <div className="absolute top-40 right-4 bg-white text-black p-4 rounded-xl shadow-lg w-48 hidden md:block">
                <div className="text-orange-500 text-sm font-bold mb-2">Redeem as Airtime</div>
                <div className="flex justify-between text-sm mb-1">
                  <span><span>&#8373;</span>100</span>
                  <span className="text-purple-600">Claim</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span><span>&#8373;</span>500</span>
                  <span>5000 Points</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span><span>&#8373;</span>1,000</span>
                  <span>9000 Points</span>
                </div>
              </div>

              {/* Transfer card */}
              <div className="absolute bottom-4 left-4 bg-white text-black p-4 rounded-xl shadow-lg w-64 hidden md:block">
                <div className="text-sm mb-2">Recipient Account</div>
                <div className="text-lg font-bold mb-1">023 238 2020</div>
                <div className="flex items-center text-sm mb-4">
                  <span className="w-6 h-6 bg-blue-500 rounded-full mr-2"></span>
                  FIRST BANK
                </div>
                <button className="bg-purple-600 text-white w-full py-2 rounded-full text-sm">Next</button>
              </div>

              {/* Pay with transfer card */}
              <div className="absolute bottom-4 right-4 bg-purple-700 text-white p-4 rounded-xl shadow-lg w-48 hidden md:block">
                <div className="text-sm mb-2">PAY BILLS</div>
                <div className="text-xs mb-1">All Banks Accepted</div>
                <div className="bg-white text-purple-700 p-2 rounded-lg text-center text-sm font-bold mb-1">
                  ECG
                </div>
                <div className="text-center text-sm">890-0000-106</div>
                <div className="text-center text-xs">Account Name</div>
                <div className="text-center text-sm font-bold">Adewole Dayo Owoloa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
