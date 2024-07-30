import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import NotFound from "./views/NotFound";
import HomePage from "./views/HomePage";
import SignUp from "./views/SignUp";
import LoginPage from "./views/LoginPage";
import UserPage from "./views/UserPage"
import AgentPage from "./views/AgentPage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <HomePage/>  }
        />
        <Route path="/signup" element= {<SignUp/>} />
        <Route path="/login" element= {<LoginPage/>} />
        <Route path = "/userpage" element= {<UserPage/>}/>
        <Route path = "/agentpage" element = {<AgentPage/>}/>

       
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
