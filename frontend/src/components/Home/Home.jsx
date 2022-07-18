import React from "react";
import { Admin } from "../Admin/Admin";
import { Navbar } from "../Navbar/Navbar";
import { Quizes } from "../Quiz/Quizes";
import { Dashboard } from "./Dashboard";
import { Route, Routes } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/quizes" element={<Quizes />} />
      </Routes>
    </div>
  );
};
