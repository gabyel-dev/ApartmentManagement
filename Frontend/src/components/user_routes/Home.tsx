import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/NavbarHome";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div></div>
    </div>
  );
}
