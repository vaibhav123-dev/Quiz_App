import React from "react";
import { QuizForm } from "./QuizForm";
import { Thumbnail } from "./Thumbnail";

export const Admin = () => {
  return (
    <div className="flex justify-evenly mt-24">
      <QuizForm />
      <Thumbnail />
    </div>
  );
};
