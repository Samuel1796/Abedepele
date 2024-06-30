import React, { useState } from "react";
import Image1 from "../../assets/Main Home Pge/object.png";
import Image2 from "../../assets/Ongoing Voter's Page/58597075_9436273 1.png";
import { Link } from "react-router-dom";

import Image3 from "../../assets/Main Home Pge/Group 16.png";
import Image4 from "../../assets/Main Home Pge/Group 17.png";
import Image5 from "../../assets/Main Home Pge/Group 18.png";

const Main3 = () => {
  const [activeStep, setActiveStep] = useState();

  const steps = [
    {
      title: "START",
      description: "Click on the Vote Now above to go to the voting page.",
    },
    {
      title: "LOCATE",
      description:
        "Locate the delegate position and vote for your preferred Candidate.",
    },
    {
      title: "CAST VOTE",
      description:
        "Click on the Vote button to vote for your carefully chosen candidate.!",
    },
  ];

  return (
    <>
      <section className="bg-white relative pt-16 md:pt-0">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-lg p-8 md:p-6"
              style={{
                backgroundImage: `url(${Image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
              }}
            ></div>

            <div className="bg-[#dcf3f8] hidden md:flex justify-center items-center border-gray-200 rounded-lg p-8 md:p-12">
              <img src={Image2} alt="Image 2" className="max-w-full h-auto" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center md:justify-start mt-28 px-4 md:0 md:mt-0">
            <div className="text-left">
              <a
                href="#"
                className="bg-[#dcf3f8] text-[#136eb4] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Vote
              </a>
              <h2 className="text-[#074a7d] text-5xl font-extrabold mb-4">
                Be heard: Vote for a change!!{" "}
              </h2>
              <p className="text-lg font-normal text-gray-500 mb-8">
                Your vote is more than just a mark on a ballot; it's a beacon Of
                hope, a apple <br></br>
                of change that reverberates through generations. As you step
                into the voting<br></br> booth, remember that you're not onw
                expressing your preference for a<br></br>candidate or an
                issue—you're contributing to the collective tapestry of{" "}
                <br></br>democracy. So, embrace your role as a voter with pride.
                <br></br>
                Together, we weave the fabric of democracy—one vote at a time.
                Cast yours <br></br>today and be a thread in this intricate
                tapestry of change.
              </p>

              <Link
                to="/sign-in"
                className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              >
                {" "}
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-[#0f5991] via-[#1474bc] to-[#167fce] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-4 text-center me-2 mb-2"
                >
                  Vote Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border mt-[17em]  sm:mt-[3em] bg-[#09426c] h-auto">
        <div className="grid gap-0 sm:grid-cols-1 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 sm:p-12 shadow-2xl shadow-gray-600/10 relative transition-all duration-500 cursor-pointer ${
                activeStep === index
                  ? "bg-[#d5ecf8] sm:bg-gradient-to-b sm:from-[#d5ecf8] sm:via-[#dcf3f8] sm:to-[#09426c] border-[#0862a5] sm:rounded-tl-3xl rounded-tr-3xl sm:h-[15rem] sm:top-[-5rem] top-0"
                  : index === 1
                  ? "bg-[#1165a4]"
                  : "bg-[#1c76ba]"
              }`}
              onClick={() => setActiveStep(index)}
              // style={{
              //   height: activeStep === index ? "15rem" : "15rem",
              //   top: activeStep === index ? "-5rem" : "0",
              // }}
            >
              <div className="space-y-4">
                <h3
                  className={`text-xl font-bold ${
                    activeStep === index ? "text-[#0862a5]" : "text-gray-100"
                  }`}
                >
                  Step {index + 1}: <br></br>{" "}
                  <span className="text-2xl">{step.title}</span>
                </h3>
                <p
                  className={`font-semibold ${
                    activeStep === index ? "text-gray-800" : "text-white"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div class="bg-sky-100 p-6 md:p-10 text-center">
          <h2 class="text-green-500 text-2xl md:text-3xl font-bold mb-4">
            Voting in Progress{" "}
          </h2>
          <p class="text-blue-800 text-sm md:text-base max-w-2xl mx-auto">
            The Platform is open and voting is already in session. Please follow
            the above process to vote for your preferred candidate.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">
            What We Offer
          </h1>

          <p className="text-gray-500 text-center mb-12">
            Our platform ensures your vote is just a click away, whether you're
            in the library, dorm, or on the move. With real-time results and
            top-notch security, voting has never been this easy or reliable.
            Join us in revolutionizing school elections. Your vote, your voice,
            our commitment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={Image3}
                alt="Live Vote Result"
                className="w-1/3 md:w-full h-auto mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Live Vote result
              </h3>
              <p className="text-gray-500">
                Cast your vote and watch it count in real-time – where every
                vote is visible.
              </p>
            </div>

            <div className="text-center">
              <img
                src={Image4}
                alt="Secured Platform"
                className="w-1/3 md:w-full h-auto mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Secured Platform
              </h3>
              <p className="text-gray-500">
                Vote with confidence on a platform where security meets
                simplicity.
              </p>
            </div>

            <div className="text-center">
              <img
                src={Image5}
                alt="Vote Online"
                className="w-1/3 md:w-full h-auto mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Vote Online
              </h3>
              <p className="text-gray-500">
                Quick, secure, and user-friendly – we bring the ballot to you,
                wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main3;
