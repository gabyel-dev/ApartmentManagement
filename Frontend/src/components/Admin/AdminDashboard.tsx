import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/NavbarHome";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    // Force reload to reset app state
    navigate("/login"); // or use navigate("/login") if not reloading
  };

  return (
    <>
      <Navbar />
      <div>
        <button onClick={logout}>ALIS</button>
      </div>
    </>
  );
};

export default AdminDashboard;
