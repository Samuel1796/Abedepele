import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      {/* <Header/> */}
      <section className="bg-green-50">
      <Hero />
      <Banner />
      <FeatureSection />
      <iframe className="bg-green-50">
        src="https://www.chatbase.co/chatbot-iframe/ZlRQtud44rsO44b-zvUNt"
        width="100%" style="height: 100%; min-height: 700px" frameborder="0" 
      </iframe>
      <Footer/>
      </section>
    </>
  );
};

export default HomePage;
