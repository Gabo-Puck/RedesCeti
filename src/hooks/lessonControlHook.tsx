import { RouteObject, To, useLocation, useNavigate, useNavigation } from "react-router-dom";
import routerUnidad1 from "../pages/Chapter1/root";
import routerUnidad2 from "../pages/Chapter2/root";
import routerUnidad3 from "../pages/Chapter3/root";
import routerUnidad4 from "../pages/Chapter4/root";
import { useEffect, useState } from "react";

interface NavigationHook {
    next: () => void,
    prev: () => void,
    currentIndex: number,
    isFirst: boolean,
    isLast: boolean
}
//function to get the route from a lesson
function createRouteArray(router: RouteObject) {
    if (!router.children) return [];
    return router.children.map(({ path }) => `/unidades/${router.path}/${path}`)
}
//create array with all lessons
let routes: To[] = [];
if (routerUnidad1.children)
    routes = routes.concat(createRouteArray(routerUnidad1))
if (routerUnidad2.children)
    routes = routes.concat(createRouteArray(routerUnidad2))
if (routerUnidad3.children)
    routes = routes.concat(createRouteArray(routerUnidad3))
if (routerUnidad4.children)
    routes = routes.concat(createRouteArray(routerUnidad4))

//hook to manipulate the current lesson
function useLessonControls(): NavigationHook {
    const location = useLocation();
    //save the current index
    const [currentIndex, setCurrentIndex] = useState<number>(NaN);
    //check if is the first lesson
    const [isFirst, setIsFirst] = useState<boolean>(false);
    //check if is the last lesson
    const [isLast, setIsLast] = useState<boolean>(false);
    const navigate = useNavigate();
    //first render check if current route is defined in route array
    useEffect(() => {
        const currentPath = location.pathname;
        let ci = routes.findIndex((path) => currentPath === path);
        //if is not, then set to first lesson
        if (ci === -1) ci = 0;
        setCurrentIndex(ci);
    }, [])
    //every change in currentIndex, navigate to the requested route
    useEffect(() => {
        if (Number.isNaN(currentIndex)) return;
        navigate(routes[currentIndex]);
        //if currentIndex is 0 enable first flag
        if (currentIndex === 0) {
            setIsFirst(true);
            return;
        }
        setIsFirst(false);
        //if currentIndex is equal to last index enable last flag
        if (currentIndex === routes.length - 1) {
            setIsLast(true)
            return;
        }
        setIsLast(false);
    }, [currentIndex])
    //every call on this function allow to move one lesson forward 
    function next() {
        if (isLast) return
        setCurrentIndex((c) => c + 1);
    }
    //every call on this function allow to move one lesson backward 
    function prev() {
        if (isFirst) return
        setCurrentIndex((c) => c - 1);
    }
    return {
        currentIndex,
        next,
        prev,
        isFirst,
        isLast
    }
}
//export hook to manipulate next/prev
export default useLessonControls;
