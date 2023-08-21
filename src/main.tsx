import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //  CSS and icons

import "./index.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "flowbite/dist/flowbite.css";

// import Index from "./Index.tsx";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import ComunicacionLanEthernet from "./pages/ComunicacionLanEthernet.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { element: <Home />, index: true },
      {
        element: <ComunicacionLanEthernet />, index: true,
        path: "lol"
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
