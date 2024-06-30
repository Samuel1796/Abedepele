import React from "react";
import V_Navbar from "../components/Voting/V_Navbar";
import FAQ from "../components/Home/FAQ";
import Footer from "../components/Home/Footer";
import Main3 from "../components/Voting/Main3";

const Voting_H_Page = () => {
  return (
    <>
<div className="relative flex flex-col min-h-screen">
            <V_Navbar />
                <div>
                    <br /><br /><br /><br /><br />
                    <div className="hidden sm:block">
                        <br /><br />
                    </div>
                </div>
                <Main3/>
            {/* <Hero />
            <VoteSteps/>
            <What_we_offer/> */}
            <FAQ/>
                <div>
                    <br /><br /><br /><br /><br />
                    <div className="block sm:hidden">
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                    <div className="hidden sm:block">
                        <br /><br /><br></br><br /><br /><br></br>

                    </div>
                </div>
            <Footer />
        </div>
            </>
  );
};

export default Voting_H_Page;
