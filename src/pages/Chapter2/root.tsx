import { RouteObject } from "react-router-dom";

const routerUnidad2: RouteObject = {
    path: "u2",
    children: [
        {
            path: "txt2",
            element: <>dummy text 2</>
        }
    ]
}

export default routerUnidad2;