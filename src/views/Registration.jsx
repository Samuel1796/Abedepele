import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import image1 from "../assets/green-thumbs-up.png";

const Registration = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleDismiss = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="hidden sm:block">
            <br />
            <br />
          </div>
        </div>

        {/* FORMS */}

        <div className="max-w-lg mx-auto p-6 mb-10 sm:mb-0">
          <h1 className="text-4xl font-bold text-[#136eb4] text-center mb-4">Registration</h1>
          <p className="text-lg text-[#136eb4] text-center mb-8">Hello! Register your details to be an eligible voter</p>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="floating_full_name"
                  id="floating_full_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_full_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative z-0 w-full group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative z-0 w-full group">
                  <select
                    name="floating_department"
                    id="floating_department"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  >
                    <option value="" disabled selected>Select Department</option>
                    <option value="acses">ACSES</option>
                    <option value="mesa">MESA</option>
                    <option value="adges">ADGES</option>
                    <option value="eleesa">ELEESA</option>
                    <option value="esesa">GESA</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="floating_index_number"
                    id="floating_index_number"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_index_number"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Index Number
                  </label>
                </div>

                <div className="relative z-0 w-full group">
                  <select
                    name="floating_year"
                    id="floating_year"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  >
                    <option value="" disabled selected>Select Year</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative z-0 w-full group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>

                <div className="relative z-0 w-full group">
                  <input
                    type="password"
                    name="floating_confirm_password"
                    id="floating_confirm_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_confirm_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm password
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        {showModal && (
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
                  <h3 className="mb-5 text-lg font-normal text-gray-500">
                    Registration successful. We will alert you when it's time
                    for voting. Thank You!
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    onClick={handleDismiss}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*  */}
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="block sm:hidden">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="hidden sm:block">
            <br />
            <br />
            <br></br>
            <br />
            <br />
            <br></br>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Registration;
