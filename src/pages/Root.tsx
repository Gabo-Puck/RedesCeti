import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

export default function Root() {
    return <>
        <NavBar />
        <Outlet />
        <FooterBar />
    </>
}