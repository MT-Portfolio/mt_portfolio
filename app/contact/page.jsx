import ContactTwo from "@/components/homes/contact/ContactTwo";

import HeaderTwo from "@/components/homes/headers/HeaderTwo";

import React from "react";
export const metadata = {
  title: "Contact || Mohammad Taha - Software Engineer",
  description:
    "Creative Web & Mobile App Developer | Building Beautiful & User-Friendly Experiences | Let's discuss your project",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <ContactTwo />
      </div>
    </>
  );
}
