import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import VoteSteps from '../components/VoteSteps';
import What_we_offer from '../components/What_we_offer';
import FAQ from '../components/FAQ';

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
        </div>
    );
};

export default NormalView;
