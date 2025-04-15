import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Navbar/NavbarHome";
import {
  faDolly,
  faShieldHalved,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { faIntercom } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import Footer from "../Footer/Footer";

const first = (
  <FontAwesomeIcon
    icon={faShieldHalved}
    className="text-[var(--base-green)] text-4xl hover:scale-110 transition-all duration-300"
  />
);
const second = (
  <FontAwesomeIcon
    icon={faDolly}
    className="text-[var(--base-green)] text-4xl hover:scale-110 transition-all duration-300"
  />
);
const third = (
  <FontAwesomeIcon
    icon={faIntercom}
    className="text-[var(--base-green)] text-4xl hover:scale-110 transition-all duration-300"
  />
);
const fourth = (
  <FontAwesomeIcon
    icon={faWarehouse}
    className="text-[var(--base-green)] text-4xl hover:scale-110 transition-all duration-300"
  />
);

export default function About() {
  useEffect(() => {
    document.title = "About Us - AptEase";
  });
  return (
    <>
      <Navbar />
      <div className="w-full h-fit  md:px-[10vw] pt-24 flex justify-center flex-col items-center font">
        <h1 className="text-[var(--base-green)] pb-3 text-xl">ABOUT US</h1>
        <div className="flex-flex-col">
          <div className="w-full h-70 overflow-hidden flex flex-col">
            <img
              src="/sample.webp"
              alt="apartment_image_front"
              className="h-70 w-full object-cover"
            />
          </div>
          <div className="w-full h-fit bg-[var(--light-gray)]/20 p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 justify-center place-items-center">
            <div className="flex flex-col gap-2 items-center h-40 max-w-60  ">
              {first}
              <h1 className="text-md heading text-[var(--gray)] text-center">
                24/7 Administrative Support
              </h1>
              <p className="text-[0.7em] text-center text-[var(--light-gray)]">
                Our team is available around the clock to assist with any
                apartment-related inquiries — in your preferred language.
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center h-40  max-w-60 ">
              {second}
              <h1 className="text-md heading text-[var(--gray)] text-center">
                First Unit Listing Always Free
              </h1>
              <p className="text-[0.7em] text-center text-[var(--light-gray)]">
                Whether you're an owner, manager, or agent, your first apartment
                unit listing is completely free — forever.
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center h-40  max-w-60 ">
              {third}
              <h1 className="text-md heading text-[var(--gray)] text-center">
                Custom Management Plans
              </h1>
              <p className="text-[0.7em] text-center text-[var(--light-gray)]">
                We offer flexible and personalized management plans based on
                your apartment's specific needs.
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center max-w-60  h-40">
              {fourth}
              <h1 className="text-md heading text-[var(--gray)] text-center">
                Attract Local & International Renters
              </h1>
              <p className="text-[0.7em] text-center text-[var(--light-gray)]">
                Our platform is regularly visited by both local and
                international renters looking for quality apartments.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center h-fit text-[var(--gray)] gap-5 py-15 px-[5vw] md:px-0">
            <h1 className="heading text-xl text-[var(--base-green)]">
              ABOUT APTEASE
            </h1>
            <p className="font text-justify text-[var(--light-gray)]">
              <strong>AptEase</strong> is a modern apartment management system
              designed to simplify life for both landlords and tenants. Backed
              by over 35 years of industry experience, AptEase offers a seamless
              way to manage your apartment building, from listing units to
              handling tenant requests—all in one place. With 24/7
              administrative support in your preferred language and your first
              unit listing always free, managing your property has never been
              easier. Experience smarter apartment management with AptEase.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
