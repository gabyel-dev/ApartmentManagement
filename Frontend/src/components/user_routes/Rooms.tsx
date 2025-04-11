import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/NavbarHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shadow from "../css/Rooms.module.css";
import RoomList from "./RoomList";
import { Link } from "react-router-dom";

const right = <FontAwesomeIcon icon={faArrowRight} className="text-sm" />;

export default function Rooms() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <div className="w-[100vw] h-[50vh] md:h-[60vh] lg:h-[70vh]">
          {/* Background Image with Inner Shadow */}
          <div
            className={`w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden absolute z-[-1] ${shadow.leftShadow}`}
          >
            <img
              src="/sample.webp"
              alt="sample_logo"
              className="w-full h-full object-cover bg-no-repeat opacity-[1]"
            />
          </div>

          {/* Hero Content */}
          <div className="overflow-hidden px-[5vw] md:px-[10vw] pt-[100px] md:pt-[16vw] lg:pt-[170px]">
            <div className="text-[var(--white)] flex flex-col gap-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold heading">
                WELCOME TO APT-EASE
              </h1>
              <p className="w-full sm:w-[80vw] md:w-[70vw] lg:w-[45vw] text-[0.6em] md:text-[0.9em] font">
                Easily view and manage all rooms in the apartment. Each card
                displays the room’s image, size, occupancy status, rent details,
                and more. Quickly check availability, assign tenants, and track
                rental updates in one place.
              </p>
              <Link to={"/about"}>
                <button
                  className="bg-[var(--base-green)] font text-white cursor-pointer mt-4 flex gap-3 items-center justify-between 
                px-6 py-3 text-sm rounded-full w-fit"
                >
                  Get Started! {right}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Room Cards */}
        <RoomList />
      </div>
    </>
  );
}
