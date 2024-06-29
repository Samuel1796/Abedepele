import React from 'react';
import Navbar from "../components/Home/Navbar";
import Hero from '../components/Home/Hero';
import VoteSteps from '../components/Home/VoteSteps';
import What_we_offer from '../components/Home/What_we_offer';
import FAQ from '../components/Home/FAQ';
import Footer from '../components/Home/Footer';

const NormalView = () => {
    return (
        <div className="relative flex flex-col min-h-screen">
            <Navbar />
                <div>
                    <br /><br /><br /><br /><br />
                    <div className="hidden sm:block">
                        <br /><br />
                    </div>
                </div>
            <Hero />
            <VoteSteps/>
            <What_we_offer/>
            <FAQ/>
                <div>
                    <br /><br /><br /><br /><br />
                    <div className="hidden sm:block">
                        <br /><br /><br></br>                         <br /><br /><br></br>

                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default NormalView;
