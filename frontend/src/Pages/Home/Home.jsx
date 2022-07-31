import React from "react";
import { Dashboard } from "./Dashboard";
import { Admin } from "../Admin/Admin";
import { Quizes } from "../../components/Quiz/Quizes";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../Auth/Login";
import { Register } from "../../Auth/Register";
import { QuizResult } from "../../components/Quiz/QuizResult";
import { Footer } from "../../components/Footer/Footer";
import { Nav } from "../../components/Navbar/Nav";
export const Home = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Nav />
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/quiz/:id" element={<Quizes />} />
        <Route path="/quiz/:id/result" element={<QuizResult />} />
      </Routes>
      <Footer />
    </div>
  );
};
