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

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - AptEase";
  });

  return (
    <>
      <Navbar />
      <div className="w-full h-fit  pt-30 flex justify-center flex-col items-center font">
        <div className="pb-20 sm:flex sm:flex-col md:flex md:flex-row w-full justify-center">
          <div className="flex flex-col gap-5 sm:w-full md:w-120  shadow-md rounded-lg p-4 font">
            <h1 className="text-center heading font-semibold text-[var(--base-green)]">
              CONTACT US
            </h1>
            <div className="text-[0.8em] flex flex-col gap-4">
              <input
                type="text"
                className="w-full bg-gray-50 border-1 border-[var(--light-gray)]/30 px-3 py-2 outline-0"
                placeholder="Your Name"
              />

              <input
                type="text"
                className="w-full bg-gray-50 border-1 border-[var(--light-gray)]/30 px-3 py-2 outline-0"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="w-full bg-gray-50 border-1 border-[var(--light-gray)]/30 px-3 py-2 outline-0"
                placeholder="City"
              />

              <textarea
                className="w-full bg-gray-50 border-1 border-[var(--light-gray)]/30 px-3 py-2 h-25 outline-0 resize-none"
                placeholder="Your Question"
              ></textarea>
            </div>
            <button className="bg-[var(--base-green)] w-full md:w-25 cursor-pointer text-sm px-2 py-2 text-white">
              Submit
            </button>
          </div>
          <div className="w-full pt-9 md:pt-0 md:w-[40vw] text-[var(--gray)] flex flex-col gap-4 px-6 items-center justify-center md:items-start">
            <p className="text-sm text-center md:text-start">
              At aptEase, we are committed to giving you the best experience.
              For any questions, suggestions, comments, or issues, kindly
              contact us.
            </p>

            <h1 className="text-lg text-[var(--base-green)]">PER EMAIL</h1>

            <p className="text-sm text-center md:text-start">
              Our customer care team is available via email at
              <span className="font-semibold"> support@aptease.com </span> and
              replies within 24 hours.
            </p>

            <h1 className="text-lg text-[var(--base-green)]">OFFICE</h1>
            <div>
              <p className="text-sm text-center md:text-start">
                <span className="font-semibold">Makati, Metro Manila:</span> 1F
                & 2F, Keyland Valero Building, 114 Valero St., Salcedo Village,
                Bgy. Bel-Air Makati City, 1209, PH
              </p>

              <p className="text-sm text-center md:text-start">
                <span className="font-semibold md:text-start">Cavite:</span>
                Sabella Village – Panungyanan, General Trias, Cavite,
                Philippines
              </p>
            </div>

            <div className="w-full md:pt-0  pt-6 text-center md:text-start">
              <p className="text-sm">
                <span className="font-semibold">Monday to Friday:</span> 9:00 AM
                to 7:00 PM
              </p>
              <p className="text-sm">
                <span className="font-semibold">Saturday:</span> 9:00 AM to 5:00
                PM
              </p>
              <p className="text-sm">
                <span className="font-semibold">Sunday:</span> 9:00 AM to 5:00
                PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex-flex-col w-full">
          <div className="w-full h-55 overflow-hidden flex flex-col ">
            <img
              src="/sample.webp"
              alt="apartment_image_front"
              className="h-55 w-full object-cover "
            />
          </div>
          <div className="w-full h-fit bg-[var(--light-gray)]/20 p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 justify-center place-items-center">
            <div className="flex flex-col gap-2 items-center h-40 max-w-60 min-w-40 ">
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
        </div>
      </div>
    </>
  );
}
