import React from "react";
import "./index.css";
import DashboardEmployees from './Components/DashboardEmployees/DashboardEmployees.js'
import DashboardFinance from "./Components/DashboardFinance/DashboardFinance.js";
import SideBar from "./Components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { DashboardContextProvider } from "./Context/DashboardContext";


export default function App() {
  return (
    
  <DashboardContextProvider>
    <Router>
      <SideBar />

        <Switch>
          <Route path="/" exact component={DashboardFinance} />
          <Route path="/dashboardEmployees" exact component={DashboardEmployees} />
        </Switch>

    </Router>
  </DashboardContextProvider>
    
  );
}
