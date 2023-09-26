import { RouteObject } from "react-router-dom";
import Tema3_1 from "./Tema3_1/Tema3_1";
import Tema3_2 from "./Tema3_2/Tema3_2";
import RepetidorHub from "./Tema3_5/Tema3_5_1";
import Tema3_6_1 from "./Tema3_6/Tema3_6_1";
import Tema3_6_2 from "./Tema3_6/Tema3_6_2";
import Tema3_7_2 from "./Tema3_7/Tema3_7_2";
import Tema3_7_1 from "./Tema3_7/Tema3_7_1";
import SwitchRouter from "./Tema3_5/Tema3_5_2";
import Estandares from "./Tema3_3/Tema3.3";
import EstandaresEIA from "./Tema3_4/Tema3.4.1";
import EstandaresEIA569 from "./Tema3_4/Tema3.4.2";
import EstandaresEIA598 from "./Tema3_4/Tema3.4.3";
import EstandaresEIA606 from "./Tema3_4/Tema3.4.4";

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
      path: "Tema3_3",
      element: <Estandares />,
    },
    {
      path: "Tema3_4_1",
      element: <EstandaresEIA />,
    },

    {
      path: "Tema3_4_2",
      element: <EstandaresEIA569 />,
    },

    {
      path: "Tema3_4_3",
      element: <EstandaresEIA598 />,
    },

    {
      path: "Tema3_4_4",
      element: <EstandaresEIA606 />,
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
