import Hero from "@/components/preview/Hero";
import Buy from "@/components/preview/Buy";
import CopyRight from "@/components/preview/CopyRight";
import Demo from "@/components/preview/Demo";
import Features from "@/components/preview/Features";

import "../public/assets/css/style.css";
import Home1 from "./(homes)/home-1/page";
import Home2 from "./(homes)/home-2/page";
import Home3 from "./(homes)/home-3/page";

export const metadata = {
  title: "Preview || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function page() {
  return (
    <>
      {/* <Hero />
      <Demo />
      <Features />
      <Buy />
      <CopyRight /> */}
      <Home2 />
      <Home1 />
      {/* <Home3 /> */}
    </>
  );
}
