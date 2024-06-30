import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    navigate("/vote-now"); // Redirect to the desired page after login
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

        <div className="max-w-lg mx-auto p-6 mb-10 sm:mb-0">
          <h1 className="text-4xl font-bold text-[#136eb4] text-center mb-4">Sign In</h1>
          <p className="text-lg text-[#136eb4] text-center mb-8">Welcome Back! Log in to cast your vote.</p>
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-4 px-4 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-4 px-4 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 text-center"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

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

export default SignIn;
