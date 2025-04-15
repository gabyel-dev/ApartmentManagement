import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/user_routes/Home";
import Login from "./components/Auth/Login";
import ResidentDashboard from "./components/Client/ResidentDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Protected from "./components/Auth/Protected";
import Rooms from "./components/user_routes/Rooms";
import About from "./components/user_routes/About";
import Contact from "./components/user_routes/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* route for non loggedin users */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

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
