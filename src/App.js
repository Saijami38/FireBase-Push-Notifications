import React from "react";
import Notification from "./Notification";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Notification />} />
        <Route path="/firebase" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;
