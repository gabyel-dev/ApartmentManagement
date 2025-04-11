import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CheckAuth from "./CheckAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faChevronLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/NavbarHome";
import VantaBackground from "../VantaBG";

//input placeholders
const user = <FontAwesomeIcon icon={faUser} className="text-[#86c232]" />;
const pass = <FontAwesomeIcon icon={faLock} className="text-[#86c232]" />;

const back = (
  <FontAwesomeIcon icon={faChevronLeft} className="text-[#86c232]" />
);

//password show
const show = <FontAwesomeIcon icon={faEye} />;
const hide = <FontAwesomeIcon icon={faEyeSlash} />;

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (loading) return;
      setLoading(true); // prevent double request

      const url = import.meta.env.VITE_URL;
      const res = await axios.post(`${url}/login`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const role = res.data.role;
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      navigate(role === "Admin" ? `/dashboard/${role}` : `/dashboard/${role}`);
    } catch {
      setError("Invalid credentials");
      setTimeout(() => setError(""), 3000);
      setLoginData({
        username: "",
        password: "",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Apt-Ease - Login";
    const checkUser = async () => {
      const isLoggedIn = await CheckAuth();
      const role = localStorage.getItem("role");
      console.log(role);
      if (isLoggedIn) {
        navigate(
          role === "Admin" ? `/dashboard/${role}` : `/dashboard/${role}`
        );
      }
    };
    checkUser();
  }, []);

  return (
    <>
      <Link
        to="/"
        className="absolute top-5 left-5 text-sm flex items-center gap-2 md:hidden text-[var(--gray)] z-10"
      >
        {back}
        <span>Back</span>
      </Link>
      <VantaBackground />
      <Navbar />
      <div className="w-full h-[100vh] flex justify-center items-center font text-[var(--gray)] bg-[var(--bg)]">
        <form
          onSubmit={login}
          className="flex flex-col gap-5 max-w-70 h-fit justify-start items-start z-2 p-5 rounded-lg ]"
        >
          <div className="flex flex-col items-start pb-6 leading-4">
            <h1 className="font-black text-3xl heading">APT-EASE</h1>
            <p className="text-[var(--dark-green)]">resident login</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-gray-200 rounded-md px-3 py-2 focus:outline-1 focus:outline-gray-400 text-[0.8em] md:text-sm w-full flex items-center gap-3">
              {user}
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                placeholder="username"
                required
                className="outline-0 border-l-1 border-gray-400 pl-3 w-full"
              />
            </div>

            <div className="bg-gray-200 rounded-md px-3 py-2 focus:outline-1 focus:outline-gray-400 text-[0.8em] md:text-sm w-full flex items-center gap-3 justify-start">
              {pass}
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="password"
                required
                className="outline-0 border-l-1 border-gray-400 pl-3 w-full"
              />
              <div
                onClick={() => {
                  showPass === true ? setShowPass(false) : setShowPass(true);
                }}
                className="text-[0.8em] text-gray-600"
              >
                {showPass ? hide : show}
              </div>
            </div>
          </div>
          <div
            className={`absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
              error
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0 pointer-events-none"
            } bg-red-500 text-white text-[0.8em] rounded-lg px-5 py-3 z-10`}
          >
            {error}
          </div>

          <div className="flex justify-end w-full">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-[var(--dark-green)]" : "bg-[var(--base-green)]"
              } rounded-md px-5 py-2 text-white cursor-pointer w-full hover:bg-[var(--dark-green)] transition duration-100`}
            >
              {loading ? "logging in..." : "login"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
