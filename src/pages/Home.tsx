import { Link } from "react-router-dom";
import CarouselComponent from "../components/CarouselComponent";

export default function Home() {
    return <>
        <CarouselComponent />
        <Link to="/unidades/u1/txt1">Test routing</Link>
    </>
}