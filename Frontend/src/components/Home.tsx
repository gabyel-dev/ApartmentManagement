import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/NavbarHome";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div></div>
    </div>
  );
};

export default Home;
