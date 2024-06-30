import React from 'react'
import Navbar from '../components/Home/Navbar'
import FAQ from '../components/Home/FAQ'
import Footer from '../components/Home/Footer'
import Main2 from '../components/Home2/Main2'

const VotingH_Page = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
    <Navbar />
        <div>
            <br /><br /><br /><br /><br />
            <div className="hidden sm:block">
                <br /><br />
            </div>
        </div>
        <Main2/>
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

  )
}

export default VotingH_Page