import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import ValueProvider from "./context/ValueProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <AuthProvider>
      <ValueProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
        </ValueProvider>
      </AuthProvider>
  </BrowserRouter>
);
