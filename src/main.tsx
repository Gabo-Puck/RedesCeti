import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //  CSS and icons

import "./index.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "flowbite/dist/flowbite.css";

// // import Index from "./Index.tsx";
// import Root from "./pages/Root.tsx";
// import Home from "./pages/Home.tsx";
// import routerUnidad4 from "./pages/Chapter4/root.tsx";
// import Lesson from "./pages/Lesson.tsx";
// import routerUnidad1 from "./pages/Chapter1/root.tsx";
// import routerUnidad2 from "./pages/Chapter2/root.tsx";
// import routerUnidad3 from "./pages/Chapter3/root.tsx";
// import ElementosDeComunicacionPage from "./Pages/Chapter1/Tema1_1.tsx";
import Index from "./Index.tsx";
import ElementosDeComunicacionPage from "./Pages/Chapter1/Tema1_1.tsx";
import ComponentesRedPage from "./Pages/Chapter1/Tema1_2.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Tema1_1",
    element: <ElementosDeComunicacionPage />,
  },
  {
    path: "/Tema1_2",
    element: <ComponentesRedPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
