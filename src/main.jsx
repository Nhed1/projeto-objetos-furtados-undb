import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import UserSearchItem from "./pages/UserSearchItem/[id]";

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/user/:id" element={<UserSearchItem />} />
      </Routes>
    </Router>
    </ChakraProvider>
  </React.StrictMode>
);
