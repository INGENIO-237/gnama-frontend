import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import CustomAuth0Provider from "./auth/CustomAuth0Provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <CustomAuth0Provider>
        <AppRoutes />
      </CustomAuth0Provider>
    </Router>
  </React.StrictMode>
);
