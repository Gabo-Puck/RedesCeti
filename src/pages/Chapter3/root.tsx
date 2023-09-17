import { RouteObject } from "react-router-dom";
import Tema3_1 from "./Tema3_1/Tema3_1";
import Tema3_2 from "./Tema3_2/Tema3_2";

const routerUnidad3: RouteObject = {
  path: "u3",
  children: [
    {
      path: "Tema3_1",
      element: <Tema3_1 />,
    },
    {
      path: "Tema3_2",
      element: <Tema3_2 />,
    },
  ],
};

export default routerUnidad3;
