import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/users" exact component={UserListPage} />
          <Route path="/trips" exact component={TripListPage} />
          <Route path="/add-user" exact component={AddUserPage} />
          <Route path="/settings" exact component={SettingsPage} />
          {/* Add other routes as needed */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
