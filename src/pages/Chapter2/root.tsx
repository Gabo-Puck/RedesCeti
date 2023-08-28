import { RouteObject } from "react-router-dom";
import CapadeAplicacion from "./Tema2.1";
import ModeloClienteServidor from "./Tema.2.1.1";
import Protocolos from "./Tema.2.1.2";
import CapadeTransporte from "./Tema2.2";
import TCP from "./Tema2.2.1";


const routerUnidad2: RouteObject = {
    path: "u2",
    children: [
        {
            path: "CapadeAplicacion",
            element: <CapadeAplicacion/>,
        },
        {
            path: "ModeloClienteServidor",
            element: <ModeloClienteServidor/>,
        },
        {
            path: "Protocolos",
            element: <Protocolos/>,
        },
        {
            path: "CapadeTransporte",
            element: <CapadeTransporte/>,
        },
        {
            path: "TCP",
            element: <TCP/>,
        },


    ]
}

export default routerUnidad2;