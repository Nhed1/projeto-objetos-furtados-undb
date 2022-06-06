import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import UserSearchItem from "./pages/UserSearchItem/UserSearchItem";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/user" element={<UserSearchItem />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
