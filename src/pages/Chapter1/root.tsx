import { RouteObject } from "react-router-dom";
import ElementosDeComunicacionPage from "./Tema1_1";
import ComponentesRedPage from "./Tema1_2/Tema1_2";
import Tema1_3 from "./Tema1_3/Tema1_3";

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
    {
      path: "Tema1_3",
      element: <Tema1_3 />,
    },
  ],
};

export default routerUnidad1;
