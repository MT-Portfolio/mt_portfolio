import "../public/assets/css/style.css";
import Home1 from "./(homes)/home-1/page";
import Home2 from "./(homes)/home-2/page";
import Home3 from "./(homes)/home-3/page";

export const metadata = {
  title: "Preview || Mohammad Taha - Software Engineer Portfolio",
  description:
    "Creative Web & Mobile App Developer | Building Beautiful & User-Friendly Experiences | Let's discuss your project",
};
export default function page() {
  return (
    <>
      <Home2 />
      {/* <Home1 />
      <Home3 /> */}
    </>
  );
}
