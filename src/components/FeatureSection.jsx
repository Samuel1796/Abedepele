import React from "react";
import featureImage from "../assets/4.jpg";
import CouponImage from "../assets/7.jpg";
import { useState } from "react";

const FeatureSection = () => {


  const [activeStep, setActiveStep] = useState();

  const steps = [
    {
      title: "Regulation and Policy (SDG 12: Responsible Consumption and Production): ",
      description: " Governments and businesses can establish targets, laws, and mandates to limit plastic usage, encourage proper disposal, and phase out harmful plastics. This can include data reporting requirements to track progress.",
    },
    {
      title: "Measurement and Data (SDG 9: Industry, Innovation, and Infrastructure):",
      description:
        "Collecting data on plastic waste helps organizations identify areas for improvement and optimize strategies for reduction, recycling, and composting.",
    },
    {
      title: "Behavior Change and Education (SDG 4: Quality Education):",
      description:
        "Educational campaigns and behavior change initiatives can reduce plastic consumption, contamination, and waste by raising awareness about the impacts of plastic pollution.",
    },
  ];
  return (
    <>
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
            Transform Your Recycling Rewards
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            EcoSave transforms recycling rewards. Manage your waste, contribute
            to a cleaner environment, and take control of converting your
            recycling points into valuable coupons - all in one platform.
          </p>

          {/* Add Image */}
          <div className="flex justify-center">
            <img
              src={featureImage}
              alt="EcoSave features"
              className="rounded-lg shadow-lg w-full lg:w-5/6 xl:w-full"
            />
          </div>
        </div>
      </div>

      {/* gold */}

      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 text-transparent bg-clip-text">
            Revolutionize Your Recycling
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            EcoSave goes beyond just recycling. Manage your waste, contribute to
            a cleaner environment, and take control of your recycling habits -
            all in one platform.
          </p>

          {/* Add Image */}
          <div className="flex justify-center">
            <img
              src={CouponImage}
              alt="EcoSave features"
              className="rounded-lg shadow-lg w-full lg:w-5/6 xl:w-full"
            />
          </div>
        </div>
      </div>

      <center class="mb-4 mt-10 text-4xl font-extrabold tracking-tight leading-none text-green-600">
            Best Practices
          </center>
      <div className="grid gap-0 sm:grid-cols-1 lg:grid-cols-3">
        
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 sm:p-12 shadow-2xl shadow-gray-600/10 relative transition-all duration-500 cursor-pointer ${
                activeStep === index
                  ? "bg-green-400  sm:rounded-tl-3xl rounded-tr-3xl sm:h-[15rem] sm:top-[-5rem] top-0"
                  : index === 1
                  ? "bg-green-400"
                  : "bg-green-400"
              }`}
              // onClick={() => }
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
                  <br></br>{" "}
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




      <section class="bg-green-50 text-green-600 py-8 px-4 sm:px-6 lg:px-8 relative z-0">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <a
            href="#"
            class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span class="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">
              New
            </span>
            <span class="text-sm font-medium">
              EcoSave web app launched! Discover what's new
            </span>
            <svg
              class="w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none">
            Revolutionize Your Recycling with EcoSave
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            EcoSave goes beyond just recycling. Manage your waste, contribute to
            a cleaner environment, and take control of your recycling habits -
            all in one platform.
          </p>
          <form class="w-full max-w-md mx-auto">
            <label
              for="default-email"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email sign-up
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="default-email"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email here..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
      <section>
        <section id="testimonies" class="py-20 bg-green-50">
          <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
            <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
              <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                <div class="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-black bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                  <p className="text-green-400">Words from Others</p>
                </div>
                <p class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-400 ">
                  Success Stories
                </p>
                
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <ul class="space-y-8">
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-green-600 to-green-50 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/tim_cook"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-green-600 ring-1">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Tim Cook"
                          ></img>
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Tim Cook
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Diam quis enim lobortis scelerisque fermentum dui
                          faucibus in ornare. Donec pretium vulputate sapien nec
                          sagittis aliquam malesuada bibendum.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>

                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-green-600 to-green-50 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/tim_cook"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-green-600 ring-1">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Tim Cook"
                          ></img>
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Tim Cook
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Diam quis enim lobortis scelerisque fermentum dui
                          faucibus in ornare. Donec pretium vulputate sapien nec
                          sagittis aliquam malesuada bibendum.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>

              <ul class="hidden space-y-8 sm:block">
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-green-600 to-green-50 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a href="https://twitter.com/paraga" class="cursor-pointer">
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-green-600 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Parag Agrawal"
                          ></img>
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Parag Agrawal
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Enim neque volutpat ac tincidunt vitae semper. Mattis
                          aliquam faucibus purus in massa tempor. Neque vitae
                          tempus quam pellentesque nec. Turpis cursus in hac
                          habitasse platea dictumst.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>

                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-green-600 to-green-50 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a href="https://twitter.com/paraga" class="cursor-pointer">
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-green-600 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Parag Agrawal"
                          ></img>
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Parag Agrawal
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Enim neque volutpat ac tincidunt vitae semper. Mattis
                          aliquam faucibus purus in massa tempor. Neque vitae
                          tempus quam pellentesque nec. Turpis cursus in hac
                          habitasse platea dictumst.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>

              <ul class="hidden space-y-8 lg:block">
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-green-600 to-green-50 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/dan_schulman"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-green-600 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Dan Schulman"
                          ></img>
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Dan Schulman
                            </h3>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Quam pellentesque nec nam aliquam sem et tortor
                          consequat id. Enim sit amet venenatis urna cursus.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="text-sm leading-6">
                  <div class="relative group">
                    <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-green-600 to-green-50 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="https://twitter.com/satyanadella"
                      class="cursor-pointer"
                    >
                      <div class="relative p-6 space-y-6 leading-none rounded-lg bg-green-600 ring-1 ring-gray-900/5">
                        <div class="flex items-center space-x-4">
                          <img
                            src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                            class="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Satya Nadella"
                          ></img>
                          <div>
                            <h3 class="text-lg font-semibold text-white">
                              Satya Nadella
                            </h3>
                            <p class="text-gray-500 text-md">
                              CEO of Microsoft
                            </p>
                          </div>
                        </div>
                        <p class="leading-normal text-gray-300 text-md">
                          Tortor dignissim convallis aenean et tortor at. At
                          ultrices mi tempus imperdiet nulla malesuada. Id
                          cursus metus aliquam eleifend mi. Quis ipsum
                          suspendisse ultrices gravida dictum fusce ut.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FeatureSection;
