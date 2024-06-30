import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NormalView from './views/NormalView';
import About from './views/AboutView';
import RegH_Page from './views/Reg_H_Page';
import Registration from './views/Registration';
import VotingH_Page from './views/Voting_H_Page'; // Import VotingH_Page component
import CandidatesView from './views/CandidatesView';
import SignIn from './components/Voting/SignIn';

function App() {
  const [isVoting, setIsVoting] = useState(true); // Example state to control voting phase
  const [isRegistration, setIsRegistration] = useState(false); // Example state to control registration phase

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            isVoting ? <VotingH_Page /> : 
            isRegistration ? <RegH_Page /> : 
            <NormalView />
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/vote-now" element={<CandidatesView />} />

      </Routes>
    </Router>
  );
}

export default App;
