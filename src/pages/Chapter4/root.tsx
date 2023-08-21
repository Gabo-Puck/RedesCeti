import { RouteObject } from "react-router-dom";
import ComunicacionLanEthernet from "./ComunicacionLanEthernet";

const routerUnidad4: RouteObject = {
    path: "u4",
    children: [
        {
            path: "comunicacion_lan_ethernet1",
            element: <ComunicacionLanEthernet/>
        },
        {
            path: "comunicacion_lan_ethernet2",
            element: <ComunicacionLanEthernet/>
        },
        {
            path: "comunicacion_lan_ethernet3",
            element: <ComunicacionLanEthernet/>
        },
    ]
}

export default routerUnidad4;