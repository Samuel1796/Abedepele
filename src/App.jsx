import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NormalView from "./views/NormalView";
import About from "./views/AboutView";
import RegH_Page from "./views/Reg_H_Page";
import Registration from "./views/Registration";
import VotingH_Page from "./views/Voting_H_Page";
import CandidatesView from "./views/CandidatesView";
import SignIn from "./components/Voting/SignIn";
import LiveVotesCount from "./views/LiveVotesCount";
import NotFound from "./views/NotFound";

function App() {
  const [isVoting, setIsVoting] = useState(true); // Example state to control voting phase
  const [isRegistration, setIsRegistration] = useState(false); // Example state to control registration phase

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isVoting ? (
              <VotingH_Page />
            ) : isRegistration ? (
              <RegH_Page />
            ) : (
              <NormalView />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={isRegistration ? <Registration /> : <NotFound />} />
        <Route path="/sign-in" element={isVoting ? <SignIn /> : <NotFound />} />
        <Route path="/vote-now" element={isVoting ? <CandidatesView /> : <NotFound />} />
        <Route path="/live-vote-count" element={isVoting ? <LiveVotesCount /> : <NotFound />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
