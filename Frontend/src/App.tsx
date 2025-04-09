import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import ResidentDashboard from "./components/Client/ResidentDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Protected from "./components/Auth/Protected";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
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
