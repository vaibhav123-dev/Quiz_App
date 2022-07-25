import React from "react";
import { Dashboard } from "./Dashboard";
import { Admin } from "../Admin/Admin";
import { Navbar } from "../../components/Navbar/Navbar";
import { Quizes } from "../../components/Quiz/Quizes";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../Auth/Login";
import { Register } from "../../Auth/Register";
import { QuizResult } from "../../components/Quiz/QuizResult";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/quiz/result" element={<QuizResult />} />
      </Routes>
    </div>
  );
};
