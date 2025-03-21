import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import MatchAnalytics from "./pages/MatchAnalytics";
import MatchScoring from "./pages/MatchScoring";
import TeamManagement from "./pages/TeamManagement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-grow pt-20 pb-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/match-analytics" element={<MatchAnalytics />} />
          <Route path="/match-scoring" element={<MatchScoring />} />
          <Route path="/team-management" element={<TeamManagement />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </div>
  );
}

export default App;