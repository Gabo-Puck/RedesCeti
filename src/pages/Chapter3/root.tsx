import { RouteObject } from "react-router-dom";
import Tema3_1 from "./Tema3_1/Tema3_1";
import Tema3_2 from "./Tema3_2/Tema3_2";
import RepetidorHub from "./Tema3_5/Tema3_5_1";
import Tema3_6_1 from "./Tema3_6/Tema3_6_1";
import Tema3_6_2 from "./Tema3_6/Tema3_6_2";
import Tema3_7_2 from "./Tema3_7/Tema3_7_2";
import Tema3_7_1 from "./Tema3_7/Tema3_7_1";
import SwitchRouter from "./Tema3_5/Tema3_5_2";

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
    {
      path: "Tema3_5_1",
      element: <RepetidorHub />,
    },
    {
      path: "Tema3_5_2",
      element: <SwitchRouter />,
    },
    {
      path: "Tema3_6_1",
      element: <Tema3_6_1 />,
    },
    {
      path: "Tema3_6_2",
      element: <Tema3_6_2 />,
    },
    {
      path: "Tema3_7_1",
      element: <Tema3_7_1 />,
    },
    {
      path: "Tema3_7_2",
      element: <Tema3_7_2 />,
    },
  ],
};

export default routerUnidad3;
