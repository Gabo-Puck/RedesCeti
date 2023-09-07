import { RouteObject } from "react-router-dom";
import ComunicacionLanEthernet from "./ComunicacionLanEthernet";
import ControlAccesoMedio from "./ControlAccesoMedio";
import HubsSwitches from "./HubsSwitches";
import ProtocoloResolucionDirecciones from "./ProtocoloResolucionDirecciones";

const routerUnidad4: RouteObject = {
    path: "u4",
    children: [
        {
            path: "Tema4_1",
            element: <ComunicacionLanEthernet/>
        },
        {
            path: "Tema4_2",
            element: <ControlAccesoMedio/>
        },
        {
            path: "Tema4_3",
            element: <HubsSwitches/>
        },
        {
            path: "Tema4_4",
            element: <ProtocoloResolucionDirecciones/>
        },

    ]
}

export default routerUnidad4;