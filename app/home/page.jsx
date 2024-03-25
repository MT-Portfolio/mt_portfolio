import HeaderFive from "@/components/homes/headers/HeaderFive";
import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import React from "react";

export const metadata = {
  title: "Home || Mohammad Taha - Software Engineer",
  description:
    "Creative Web & Mobile App Developer | Building Beautiful & User-Friendly Experiences | Let's discuss your project",
};
export default function Home2() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="mt-page-area z-index-3">
          <div className="container">
            <PersonalInfoTwo />
          </div>
        </div>
      </div>
    </>
  );
}
