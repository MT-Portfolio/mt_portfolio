import BlogsTwo from "@/components/homes/blogs/BlogsTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";

import React from "react";
export const metadata = {
  title: "Blog || Mohammad Taha - Software Engineer",
  description:
    "Creative Web & Mobile App Developer | Building Beautiful & User-Friendly Experiences | Let's discuss your project",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <BlogsTwo />
      </div>
    </>
  );
}
