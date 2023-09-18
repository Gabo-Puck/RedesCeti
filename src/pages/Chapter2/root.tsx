import { RouteObject } from "react-router-dom";
import CapadeAplicacion from "./Tema2.1";
import ModeloClienteServidor from "./Tema.2.1.1";
import Protocolos from "./Tema.2.1.2";
import CapadeTransporte from "./Tema2.2";
import TCP from "./Tema2.2.1";
import Administracion from "./Tema.2.2.2";
import CapadeRed from "./Tema.2.3";
import Enrutamiento from "./Tema2.3.1";
import Direccionamiento from "./Tema2.3.2";
import Calculos from "./Tema2.3.3";


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
        {
            path: "Administracion",
            element: <Administracion/>,
        },
        {
            path: "CapadeRed",
            element: <CapadeRed/>,
        },
        {
            path: "Enrutamiento",
            element: <Enrutamiento/>,
        },
        {
            path: "Direccionamiento",
            element: <Direccionamiento/>,
        },
        {
            path: "Calculos",
            element: <Calculos/>,
        },





    ]
}

export default routerUnidad2;