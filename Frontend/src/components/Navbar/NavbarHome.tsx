import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faCircleInfo,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import hovers from "../css/Navbar.module.css";

const menu = (
  <FontAwesomeIcon
    icon={faBars}
    className="text-xl text-[var(--base-green)] "
  />
);
const hide = <FontAwesomeIcon icon={faXmark} className="text-white text-xl" />;

const room = <FontAwesomeIcon icon={faBuilding} />;
const about = <FontAwesomeIcon icon={faCircleInfo} />;
const home = <FontAwesomeIcon icon={faHouse} />;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const scroll = () => {
    setIsScrolling(window.scrollY > 10 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => window.addEventListener("scroll", scroll);
  }, []);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:block hidden font z-40 ">
        <div className="h-6 w-full text-[0.7em] bg-[var(--base-green)] flex justify-end items-center px-[10vw] text-[var(--gray)] py-2 z-40 ">
          <Link to={"/about"}>
            <span className="px-2 border-l-1 border-[var(--gray)] hover:text-white">
              About us
            </span>
          </Link>
          <Link to={"/contact"}>
            <span className="pl-2 border-l-1 border-[var(--gray)] hover:text-white">
              Contact
            </span>
          </Link>
        </div>
        <div
          className={`flex justify-between items-center px-[10vw] py-3 w-full h-[80px]  ${
            isScrolling
              ? "top-0 fixed shadow-lg/5"
              : "top-6 transition-all duration-300 absolute"
          } text-[var(--gray)] bg-[var(--white)]`}
        >
          <div>
            <Link to={"/"}>
              <div className="flex items-center">
                <img
                  src="https://img.freepik.com/premium-vector/house-apartment-logo-icon-design-illustration_775854-2028.jpg"
                  alt="logo"
                  className="w-15 h-15 mr-1 "
                />
                <span className="pl-2 pb-2 leading-1 flex flex-col justify-center items-end border-l-1 border-gray-500 ">
                  <h1 className="text-4xl font-semibold title">AptEase</h1>
                  <p className="text-[0.6em] text-right tracking-widest">
                    PROPERTY
                  </p>
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex text-sm links gap-6">
              <Link to={"/"} className={`${hovers.home}`}>
                <span>Home</span>
              </Link>
              <Link to={"/rooms"} className={`${hovers.rooms}`}>
                <span>Rooms</span>
              </Link>
            </div>
            <Link to={"/login"} className="login-btn">
              <button className="border-2 border-[var(--base-green)] px-4 py-1 text-[var(--base-green)]  cursor-pointer  text-sm ">
                Resident Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:block md:hidden relative font">
        {/* Toggle Button */}
        <div
          className="z-40 flex right-0 px-5 py-3 fixed justify-between w-full bg-[var(--white)]"
          onClick={showMenu}
        >
          <Link to={"/"}>
            <div className="flex items-center">
              <img src="/logo.png" className="w-11 h-11 mr-2" />
              <span className="pl-2 pb-2 leading-0 flex flex-col justify-center items-end border-l-1 border-gray-400 text-gray-700">
                <h1 className="text-3xl font-semibold title">AptEase</h1>
                <p className="text-[0.47em] tracking-widest">PROPERTY</p>
              </span>
            </div>
          </Link>

          {/* Only show hamburger when menu is closed */}
          {!isOpen && <div className="flex items-center z-50">{menu}</div>}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "w-52 px-3" : "w-0"
          } h-[100vh] fixed top-0 right-0 transition-all duration-300 bg-[var(--bg)] overflow-hidden flex flex-col justify-start items-start z-50`}
        >
          {/* Close (X) icon */}
          <div
            className="flex justify-end w-full absolute  pt-6 pr-8 z-60"
            onClick={showMenu}
          >
            {hide}
          </div>

          <div className="flex items-center pt-3">
            <h1 className="text-3xl font-semibold text-white title">AptEase</h1>
          </div>

          <div className="text-gray-400 flex flex-col w-full h-full gap-1 pt-6 text-md text-nowrap">
            <div className="flex justify-start items-center px-2 w-full gap-2 rounded-xl hover:bg-gray-200 py-3">
              {home}
              <Link to="/" className="w-full">
                <span>Home</span>
              </Link>
            </div>
            <div className="flex justify-start items-center px-2 w-full gap-2 rounded-xl hover:bg-gray-200 py-3">
              {room}
              <Link to="/rooms" className="w-full">
                <span>Rooms</span>
              </Link>
            </div>
            <div className="flex justify-start items-center px-2 w-full gap-2 rounded-xl hover:bg-gray-200 py-3">
              {about}
              <Link to="/about" className="w-full">
                <span>About us</span>
              </Link>
            </div>
            <Link to={"/login"} className="w-full">
              <button className="bg-[var(--base-green)] px-5 py-2 text-white rounded-md cursor-pointer transition-all duration-100 hover:scale-102 text-sm mt-3 w-full">
                Resident Login
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center w-full pb-5 text-gray-300 text-[0.8em] text-nowrap">
            <p>&copy; Apt-Ease {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
