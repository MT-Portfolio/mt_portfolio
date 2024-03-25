import HeaderTwo from "@/components/homes/headers/HeaderTwo";
import PortfolioTwo from "@/components/homes/portfolio/PortfolioTwo";

// import ResumeTwo from "@/components/homes/resume/ResumeTwo";
import React from "react";
export const metadata = {
  title: "Portfolio || Mohammad Taha - Software Engineer",
  description:
    "Creative Web & Mobile App Developer | Building Beautiful & User-Friendly Experiences | Let's discuss your project",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <PortfolioTwo />
      </div>
    </>
  );
}
