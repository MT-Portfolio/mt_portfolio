import AboutTwo from "@/components/homes/about/AboutTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";
// import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import React from "react";
export const metadata = {
  title: "About || Mohammad Taha - Software Engineer",
  description:
    "Creative Web & Mobile App Developer | Building Beautiful & User-Friendly Experiences | Let's discuss your project",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <div className="mt-page-area z-index-3">
          <div className="container">
            <AboutTwo />
          </div>
        </div>
      </div>
    </>
  );
}
