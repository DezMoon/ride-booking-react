import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/Dashboard";
import UserListPage from "./pages/UserList";
import TripListPage from "./pages/TripList";
import AddUserPage from "./pages/AddUser";
import SettingsPage from "./pages/Settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/trips" element={<TripListPage />} />
          <Route path="/add-user" element={<AddUserPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
