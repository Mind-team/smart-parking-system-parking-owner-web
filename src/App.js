import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/login/Login.page";
import { ParkingsPage } from "./pages/parkings/Parkings.page";
import { InfoParkingsPage } from "./pages/parkings/InfoParkings.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/parkings" element={<ParkingsPage />} />
        <Route path="/parkings/:id" element={<InfoParkingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
