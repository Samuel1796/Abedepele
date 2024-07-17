import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="bg-green-50 py-12 px-4 sm:px-6 lg:px-8 border-green-200 relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto mt-20">
          <h1 className="text-green-800 text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6">
            Recycling That Fits Your Life
          </h1>
          <p className="text-lg sm:text-xl text-center text-green-700 mb-8 max-w-3xl mx-auto">
            Effortlessly manage your waste, contribute to a cleaner environment, and take control of your recycling habits - all with EcoSafe
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link to="/signup">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 w-full sm:w-auto">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg text-lg font-semibold border-2 border-green-600 hover:bg-green-100 transition duration-300 w-full sm:w-auto">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
