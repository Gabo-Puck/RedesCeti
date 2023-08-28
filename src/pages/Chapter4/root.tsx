import { RouteObject } from "react-router-dom";
import ComunicacionLanEthernet from "./ComunicacionLanEthernet";

const routerUnidad4: RouteObject = {
    path: "u4",
    children: [
        {
            path: "comunicacion-lan-ethernet",
            element: <ComunicacionLanEthernet/>
        },

    ]
}

export default routerUnidad4;