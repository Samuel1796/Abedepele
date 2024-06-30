import React from "react";
import SVGBackground from "./SVGBackground";
import umat from "../../assets/Main Home Pge/UMaTL 1.png";
import Ig from "../../assets/Main Home Pge/IG.png";
import fb from "../../assets/Main Home Pge/FB1.png";
import Twitter from "../../assets/Main Home Pge/Twitter.png";
import bgSVG from "../../assets/svg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="relative border-black rotate-180 mt-8">
      <div className="hidden sm:block">
        <SVGBackground />
      </div>
      <footer className="absolute  w-full bg-transparent -top-32 z-10  rotate-180">
        {/* MAIN FOOTER */}
        <img src={bgSVG} alt="" className="rotate-180 block sm:hidden" />
        <div className="bg-[#0b95e4] p-4 sm:bg-transparent sm:p-0">
          <div className="flex flex-wrap md:flex-nowrap items-end justify-center p-">
            <div id="umat-handles" className="footer-content mb-4 md:mr-8 ">
              <div className="logo flex flex-col items-center mb-3">
                <img
                  src={umat}
                  alt="University of Mines and Technology logo"
                  className="mb-2"
                />
                <p className="text-center">
                  UNIVERSITY OF MINES AND TECHNOLOGY
                </p>
                <p className="text-center">
                  School of Railways and Infrastructure Development
                </p>
              </div>
              <div className="mb-5 text-center">
                <p className="text-sm">&copy; Copyright 2024</p>
              </div>
              <div className="flex justify-center">
                <img src={fb} className="size-10 mr-3" alt="facebook" />
                <img src={Twitter} className="size-10 mr-3" alt="twitter" />
                <img src={Ig} className="size-10" alt="instagram" />
              </div>
            </div>
            <div
              id="contact"
              className="footer-content text-center md:text-left md:mr-8"
            >
              <p className="text-2xl mb-2 font-bold">Contact Us</p>
              <ul>
                <li className="py-3">P.O Box 237, Tarkwa.</li>
                <li className="py-3">Ghana, West Africa</li>
                <li className="py-3">Tel: +233 3121 97734</li>
                <li className="py-3">Email: registrar@umat.edu.gh</li>
              </ul>
            </div>
            <div id="links" className="footer-content mb-4 md:mb-0">
              <h5 className="text-2xl mb-2 font-bold text-center md:text-left">
                Quick Links
              </h5>
              <ul className="py-3 text-center md:text-left">
                <Link to="/about">
                  {" "}
                  <li className="py-3">About</li>
                </Link>
                <li className="py-3">FAQ</li>
                <li className="py-3">Vote</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
