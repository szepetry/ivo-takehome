import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import ServiceAgreement from "../screens/ServiceAgreement";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServiceAgreement />} />
      </Routes>
    </Router>
  );
}
