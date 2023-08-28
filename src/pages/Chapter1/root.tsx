import { RouteObject } from "react-router-dom";
import ElementosDeComunicacionPage from "./Tema1_1";
import ComponentesRedPage from "./Tema1_2/Tema1_2";

const routerUnidad1: RouteObject = {
  path: "u1",
  children: [
    {
      path: "Tema1_1",
      element: <ElementosDeComunicacionPage />,
    },
    {
      path: "Tema1_2",
      element: <ComponentesRedPage />,
    },
  ],
};

export default routerUnidad1;
