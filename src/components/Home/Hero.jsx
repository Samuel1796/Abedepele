import React from "react";
import Image1 from "../../assets/Main Home Pge/object.png";
import Image2 from "../../assets/Main Home Pge/Frame.png";

const Hero = () => {
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
                Be The Change You Want To See!
              </h2>
              <p className="text-lg font-normal text-gray-500 mb-8">
              In a world where technology bridges gaps and connects us all,
                your vote is more <br></br>powerful than ever. With online voting, you
                have the freedom to cast your ballot from <br></br> the comfort of your
                homes, hostels, or while on the go. It's secure, it's
                convenient,<br></br> and it's your right. Don't miss the chance to be
                part of the change you wish to see. <br></br>Every vote counts, every
                voice matters. Together, we can shape a brighter future for our<br></br>
                community and beyond. Participate, empower, and inspire. <br></br>Vote
                online — for democracy, for progress, for us.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center"
              >
                <button type="button" className="text-white bg-gradient-to-r from-[#0f5991] via-[#1474bc] to-[#167fce] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-4 text-center me-2 mb-2">Read About</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
