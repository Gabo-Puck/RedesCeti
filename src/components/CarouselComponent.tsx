import React from "react";
// import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
// import { Image } from "primereact/image";
// import ImagesJSON from "../mocks/imagesUrl.json";
import ReactPlayer from "react-player";

function CarouselComponent() {
  // interface Image {
  //   name: string;
  // }

  // const [images, setImages] = useState<Image[]>([]);

  // useEffect(() => {
  //   setImages(ImagesJSON);
  // }, []);

  // const responsiveOptions: CarouselResponsiveOption[] = [
  //   {
  //     breakpoint: "1199px",
  //     numVisible: 1,
  //     numScroll: 1,
  //   },
  //   {
  //     breakpoint: "1199px",
  //     numVisible: 2,
  //     numScroll: 1,
  //   },
  //   {
  //     breakpoint: "1199px",
  //     numVisible: 1,
  //     numScroll: 1,
  //   },
  // ];

  // const productTemplate = (image: Image) => {
  //   return (
  //     <div className="mb-3">
  //       <Image
  //         src={image.name}
  //         preview
  //         width="95vw"
  //         height="80vh"
  //         alt="Image"
  //       />
  //       {/* <img src={image.name} alt={image.name} /> */}
  //     </div>
  //   );
  // };

  return (
    <div className="card">
      <ReactPlayer
        url={"https://www.youtube.com/embed/NvdvxTB9p9E"}
        controls
        width="100%"
        height="80vh"
        muted
        loop
        playing={true}
      />
      {/* <h1>Aprende de Redes</h1>
      <Carousel
        value={images}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        // circular
        // autoplayInterval={3000}
      /> */}
    </div>
  );
}

export default CarouselComponent;
