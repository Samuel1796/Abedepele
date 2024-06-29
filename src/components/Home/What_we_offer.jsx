import React from 'react';
import Image1 from "../../assets/Main Home Pge/Group 16.png";
import Image2 from "../../assets/Main Home Pge/Group 17.png";
import Image3 from "../../assets/Main Home Pge/Group 18.png";

const What_we_offer = () => {
  return (
    <>
      <section>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">
            What We Offer
          </h1>

          <p className="text-gray-500 text-center mb-12">
            Our platform ensures your vote is just a click away, whether you're in the library,
            dorm, or on the move. With real-time results and top-notch security, voting has
            never been this easy or reliable. Join us in revolutionizing school elections. Your
            vote, your voice, our commitment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src={Image1} alt="Live Vote Result" className="w-1/3 md:w-full h-auto mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Live Vote result</h3>
              <p className="text-gray-500">
                Cast your vote and watch it count in real-time – where every vote is visible.
              </p>
            </div>

            <div className="text-center">
              <img src={Image2} alt="Secured Platform" className="w-1/3 md:w-full h-auto mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Secured Platform</h3>
              <p className="text-gray-500">
                Vote with confidence on a platform where security meets simplicity.
              </p>
            </div>

            <div className="text-center">
              <img src={Image3} alt="Vote Online" className="w-1/3 md:w-full h-auto mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Vote Online</h3>
              <p className="text-gray-500">
                Quick, secure, and user-friendly – we bring the ballot to you, wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default What_we_offer;
