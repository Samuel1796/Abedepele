import React, { useState } from "react";

const VoteSteps = () => {
  const [activeStep, setActiveStep] = useState();

  const steps = [
    {
      title: "REGISTER",
      description: "Seamlessly register your details into our database.",
    },
    {
      title: "VOTE",
      description: "Vote for your preferred Candidate.",
    },
    {
      title: "LIVE VOTE COUNTS",
      description: "View live results of your various candidates.",
    },
  ];

  return (
    <>
      <section className="border mt-[17em]  sm:mt-[3em] bg-[#09426c] h-auto">
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3  sm:mx-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 sm:p-12 shadow-2xl shadow-gray-600/10 relative transition-all duration-500 ${
                activeStep === index
                  ? "bg-[#d5ecf8]  border-[#0862a5] rounded-tl-3xl rounded-tr-3xl"
                  : index === 1
                  ? "bg-[#1165a4]"
                  : "bg-[#1c76ba]"
              }`}
              onClick={() => setActiveStep(index)}
              style={{
                height: activeStep === index ? "20rem" : "15rem",
                top: activeStep === index ? "-5rem" : "0",
              }}
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
          <h2 class="text-blue-900 text-2xl md:text-3xl font-bold mb-4">
            Registration portal NOT opened yet!
          </h2>
          <p class="text-blue-800 text-sm md:text-base max-w-2xl mx-auto">
            Our platform is only available during elections for students to
            register and vote. We'll let you know when it's time to vote.
          </p>
        </div>

        
      </section>
    </>
  );
};

export default VoteSteps;
