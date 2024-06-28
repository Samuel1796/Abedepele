// import React from "react";
// import bgSVG from "../assets/svg.png";

// const SVGBackground = ({ menuState }) => {
//   return (
//     // <div className="absolute left-0 h-[100vh] w-full sm:translate-y-[-110px]">
//     //   <img src={bgSVG} alt="SVG" />
//     // </div>
//     <svg
//       width="10SS0%"
//       height="auto"
//       id="svg"
//       viewBox={menuState ? "0 0 260 200" : "0 0 1440 390"}
//       xmlns="http://www.w3.org/2000/svg"
//       class="transition duration-300 ease-in-out delay-150 translate-y-[0px] sm:translate-y-[-300px]"
//     >
//       <defs>
//         <linearGradient id="gradient" x1="80%" y1="90%" x2="20%" y2="10%">
//           <stop offset="5%" stop-color="#0693e3"></stop>
//           <stop offset="95%" stop-color="#8ed1fc"></stop>
//         </linearGradient>
//       </defs>
//       <path
//         d="M 0,400 L 0,150 C 182,128.26666666666665 364,106.53333333333333 540,119 C 716,131.46666666666667 886,178.13333333333333 1035,189 C 1184,199.86666666666667 1312,174.93333333333334 1440,150 L 1440,400 L 0,400 Z"
//         stroke="none"
//         stroke-width="0"
//         fill="url(#gradient)"
//         fill-opacity="1"
//         class="transition-all duration-300 ease-in-out delay-150 path-0"
//         transform="rotate(-180 720 200)"
//       ></path>
//     </svg>
//   );
// };

// export default SVGBackground;
import React from "react";
import bgSVG from "../assets/svg.png";

const SVGBackground = ({ menuState }) => {
  return (
    <div className="absolute left-0 w-full translate-y-[0px] sm:translate-y-[-130px] z-10">
      <img src={bgSVG} alt="SVG" width={"100%"} />
      <img src={bgSVG} alt="SVG" width={"100%"} className="translate-y-[-65px] opacity-80 sm:hidden" />
    </div>
    // <svg
    //   width="100%"
    //   height="100%"
    //   id="svg"
    //   viewBox={menuState ? "0 0 260 200" : "0 0 700 490"}
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="transition duration-300 ease-in-out delay-150 transform md:translate-y-[-35%]"
    // >
    //   <defs>
    //     <linearGradient id="gradient" x1="80%" y1="90%" x2="20%" y2="10%">
    //       <stop offset="5%" stop-color="#0693e3"></stop>
    //       <stop offset="95%" stop-color="#8ed1fc"></stop>
    //     </linearGradient>
    //   </defs>
    //   <path
    //     d="M 0,400 L 0,150 C 182,128.26666666666665 364,106.53333333333333 540,119 C 716,131.46666666666667 886,178.13333333333333 1035,189 C 1184,199.86666666666667 1312,174.93333333333334 1440,150 L 1440,400 L 0,400 Z"
    //     stroke="none"
    //     strokeWidth="0"
    //     fill="url(#gradient)"
    //     fillOpacity="1"
    //     className="transition-all duration-300 ease-in-out delay-150 path-0"
    //     transform="rotate(-180 720 200)"
    //   ></path>
    // </svg>
  );
};



export default SVGBackground;
