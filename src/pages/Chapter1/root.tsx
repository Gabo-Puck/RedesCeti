import { RouteObject } from "react-router-dom";

const routerUnidad1: RouteObject = {
    path: "u1",
    children: [
        {
            path: "txt1",
            element: <>dummy text 1</>,
            
        }
    ]
}

export default routerUnidad1;