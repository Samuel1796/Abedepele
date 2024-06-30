import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NormalView from './views/NormalView';
import About from './views/AboutView';
import VotingH_Page from './views/VotingH_Page';
import Registration from './views/Registration';

function App() {
  const [isVoting, setIsVoting] = useState(true); // Example variable to control the view

  return (
    <Router>
      <Routes>
        <Route path="/" element={isVoting ? <VotingH_Page /> : <NormalView />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Registration />} />

      </Routes>
    </Router>
  );
}

export default App;
