import React from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const AboutView = () => {
  return (
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

      {/*  */}
      <div class="bg-white p-8 max-w-4xl mx-auto mb-10">
        <h1 class="text-3xl font-bold text-[#074a7d] text-center mb-6">
          ABOUT US
        </h1>

        <div class="text-center mb-8">
          <p class="text-xl mb-4 text-[#074a7d]">
            Our Online Voting System is committed to providing a
            <span class="font-semibold text-[#074a7d]"> secure, accessible, and reliable</span>{" "}
            voting experience for
            <span class="font-semibold text-[#074a7d]">our school community</span>.
          </p>
          <p class="text-lg text-[#074a7d]">
            We aim to make the voting and elections easy, seamless and fair.
          </p>
        </div>

        <div class="space-y-6 mb-8">
          <div>
            <h2 class="text-2xl font-bold text-[#074a7d] mb-3">Our Mission:</h2>
            <p class="text-gray-800">
              Our mission is to champion the democratic spirit of our school by
              providing a cutting-edge, secure, and user-friendly online voting
              system. We are dedicated to fostering a culture of active
              participation, where every student's voice is not only heard but
              celebrated. Through our platform, we strive to facilitate a
              transparent and fair election process, inspiring trust and
              engagement within our school community. Together, we are shaping
              an inclusive future where every vote is a powerful catalyst for
              change and progress.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-[#074a7d] mb-3">Our Vision:</h2>
            <p class="text-[#074a7d]">
              Our vision is to revolutionize the student electoral experience by
              setting the standard for online voting systems. We aspire to
              create a digital democracy where every student can easily and
              securely participate in shaping the future of their education.
              We're pioneering a future where technology empowers student
              voices, ensuring that every vote counts in the most efficient,
              transparent, and engaging way possible.
            </p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-[#074a7d] mb-4">Our Strengths:</h2>
          <ul class="space-y-4">
            <li>
              <h3 class="text-xl font-semibold text-[#074a7d]">
                1. Reliability:
              </h3>
              <p class="text-[#074a7d]">
                Our system is built on robust and reliable technology ensuring
                uninterrupted service during critical voting periods.
              </p>
            </li>
            <li>
              <h3 class="text-xl font-semibold text-[#074a7d]">2. Security:</h3>
              <p class="text-[#074a7d]">
                We prioritize the security of our voting system with end-to-end
                encryption to safeguard every vote.
              </p>
            </li>
            <li>
              <h3 class="text-xl font-semibold text-[#074a7d]">
                3. User Experience:
              </h3>
              <p class="text-[#074a7d]">
                Designed with the user in mind, our platform offers a seamless
                and straightforward voting process.
              </p>
            </li>
            <li>
              <h3 class="text-xl font-semibold text-[#074a7d]">
                4. Accessibility:
              </h3>
              <p class="text-[#074a7d]">
                Our system is accessible from any device, anywhere, making it
                convenient for all students to participate.
              </p>
            </li>
            <li>
              <h3 class="text-xl font-semibold text-[#074a7d]">5. Support:</h3>
              <p class="text-[#074a7d]">
                We provide dedicated support to address any issues promptly,
                ensuring a smooth voting experience for everyone.
              </p>
            </li>
          </ul>
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
  );
};

export default AboutView;
