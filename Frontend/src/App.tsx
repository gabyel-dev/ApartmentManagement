import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/user_routes/Home";
import Login from "./components/Auth/Login";
import ResidentDashboard from "./components/Client/ResidentDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Protected from "./components/Auth/Protected";
import Rooms from "./components/user_routes/Rooms";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* route for non loggedin users */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard/:role"
            element={<Protected component={AdminDashboard} />}
          />
          <Route
            path="/dashboard/:role"
            element={<Protected component={ResidentDashboard} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
