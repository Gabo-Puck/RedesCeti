import { RouteObject } from "react-router-dom";
import CapadeAplicacion from "./Tema2.1";


const routerUnidad2: RouteObject = {
    path: "u2",
    children: [
        {
            path: "Tema",
            element: <CapadeAplicacion/>,
        }
    ]
}

export default routerUnidad2;