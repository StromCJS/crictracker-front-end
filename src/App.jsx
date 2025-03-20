import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import MatchAnalytics from "./pages/MatchAnalytics";
import MatchScoring from "./pages/MatchScoring";
import TeamManagement from "./pages/TeamManagement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/match-analytics" element={<MatchAnalytics />} />
        <Route path="/match-scoring" element={<MatchScoring />} />
        <Route path="/team-management" element={<TeamManagement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
