import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faCircleInfo,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const menu = <FontAwesomeIcon icon={faBars} className="text-xl" />;
const hide = <FontAwesomeIcon icon={faXmark} className="text-white text-xl" />;

const room = <FontAwesomeIcon icon={faBuilding} />;
const about = <FontAwesomeIcon icon={faCircleInfo} />;
const home = <FontAwesomeIcon icon={faHouse} />;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:block hidden font">
        <div className="flex justify-between items-center px-[10vw] py-1 w-full h-[60px] fixed shadow-md text-[var(--gray)] bg-[var(--white)]">
          <div>
            <Link to={"/"}>
              <div className="flex items-center">
                <img
                  src="https://img.freepik.com/premium-vector/house-apartment-logo-icon-design-illustration_775854-2028.jpg"
                  alt="logo"
                  className="w-11 h-11 mr-1 "
                />
                <span className="pl-2 pb-2 leading-0 flex flex-col justify-center items-start border-l-1 border-gray-500 ">
                  <h1 className="text-lg font-semibold ">AptEase</h1>
                  <p className="text-[0.5em]">apartment management</p>
                </span>
              </div>
            </Link>
          </div>
          <div className="flex gap-6 text-sm links">
            <Link to={"/"}>
              <span>Home</span>
            </Link>
            <Link to={"/rooms"}>
              <span>Rooms</span>
            </Link>
            <Link to={"/about"}>
              <span>About us</span>
            </Link>
          </div>
          <div className="flex items-center">
            <button className="bg-[var(--base-green)] px-5 py-2 text-white rounded-md cursor-pointer transition-all duration-100 hover:scale-102 text-sm ml-22">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="sm:block md:hidden relative font">
        {/* Toggle Button */}
        <div
          className=" flex right-0 px-5 py-5 z-50 absolute"
          onClick={showMenu}
        >
          {isOpen ? hide : menu}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "w-50 px-3" : "w-0"
          } h-[100vh] absolute top-0 right-0 transition-all duration-300 bg-[var(--bg)] overflow-hidden flex flex-col justify-start items-start z-40`}
        >
          <div className="flex items-center pt-4">
            <h1 className="text-lg font-semibold text-white">AptEase</h1>
          </div>
          <div className="text-gray-400  flex flex-col w-full h-full gap-1 pt-6 text-md text-nowrap">
            <div className="flex justify-start items-center px-2 w-full gap-2 rounded-xl hover:bg-gray-200 py-3">
              {home}
              <Link to="/" className=" w-full ">
                <span>Home</span>
              </Link>
            </div>
            <div className="flex justify-start items-center px-2 w-full gap-2 rounded-xl hover:bg-gray-200 py-3">
              {room}
              <Link to="/rooms" className=" w-full ">
                <span>Rooms</span>
              </Link>
            </div>
            <div className="flex justify-start items-center px-2 w-full gap-2 rounded-xl hover:bg-gray-200 py-3">
              {about}
              <Link to="/about" className=" w-full ">
                <span>About us</span>
              </Link>
            </div>
            <button className="bg-[var(--base-green)] px-5 py-2 text-white rounded-md cursor-pointer transition-all duration-100 hover:scale-102 text-sm mt-3">
              Login
            </button>
          </div>
          <div className="flex justify-center items-center w-full pb-5 text-gray-300 text-[0.8em] text-nowrap">
            <p>&copy; Apt-Ease {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
