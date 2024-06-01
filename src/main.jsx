import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Authproviders/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <div className="max-w-6xl mx-auto">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
