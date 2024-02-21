import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import DashboardPage from "./pages/Dashboard";
import UserListPage from "./pages/UserList";
import TripListPage from "./pages/TripList";
import AddUserPage from "./pages/AddUser";
import SettingsPage from "./pages/Settings";
import { isAuthenticated } from "./services/authService";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={isAuthenticated() ? <PrivateRoutes /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

const PrivateRoutes = () => (
  <Layout>
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/users" element={<UserListPage />} />
    <Route path="/trips" element={<TripListPage />} />
    <Route path="/add-user" element={<AddUserPage />} />
    <Route path="/settings" element={<SettingsPage />} />
    {/* Add other private routes as needed */}
  </Layout>
);

export default App;
