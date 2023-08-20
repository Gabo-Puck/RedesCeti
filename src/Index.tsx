import CarouselComponent from "./components/CarouselComponent";
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";

function Index() {
  return (
    <div className="p-4">
      <NavBar />
      <CarouselComponent />
      <FooterBar />
    </div>
  );
}

export default Index;
