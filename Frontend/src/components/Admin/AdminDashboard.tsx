import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    // Force reload to reset app state
    navigate("/login"); // or use navigate("/login") if not reloading
  };

  return (
    <div>
      <button onClick={logout}>ALIS</button>
    </div>
  );
};

export default AdminDashboard;
