import React from "react";

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";

import Homepage from "./pages/Home";
import SingleItem from "./pages/Single_Item";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={<Homepage />} />
        <Route path="/Checklist-item/:itemId" element={<SingleItem />} />
      </Routes>
    </Router>
  );
}

export default App;
