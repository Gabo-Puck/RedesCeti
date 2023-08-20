import React, { useState, useEffect } from "react";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import ImagesJSON from "../mocks/imagesUrl.json";

function CarouselComponent() {
  interface Image {
    name: string;
  }

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    setImages(ImagesJSON);
  }, []);

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (image: Image) => {
    return (
      <div className="mb-3">
        <img src={image.name} alt={image.name} />
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={images}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}

export default CarouselComponent;
