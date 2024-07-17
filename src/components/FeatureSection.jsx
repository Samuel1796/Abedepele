import React from "react";
import featureImage from "../assets/4.jpg";
import CouponImage from "../assets/7.jpg";

const FeatureSection = () => {
  return (
    <>
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
            Transform Your Recycling Rewards
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            EcoSafe transforms recycling rewards. Manage your waste, contribute
            to a cleaner environment, and take control of converting your
            recycling points into valuable coupons - all in one platform.
          </p>

          {/* Add Image */}
          <div className="flex justify-center">
            <img
              src={featureImage}
              alt="EcoSafe features"
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
            EcoSafe goes beyond just recycling. Manage your waste, contribute to
            a cleaner environment, and take control of your recycling habits -
            all in one platform.
          </p>

          {/* Add Image */}
          <div className="flex justify-center">
            <img
              src={CouponImage}
              alt="EcoSafe features"
              className="rounded-lg shadow-lg w-full lg:w-5/6 xl:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
