import { Carousel } from "@material-tailwind/react";

export function ImageCarousel() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      {[
        require('../resources/L1.jpg'),
        require('../resources/L2.jpg'),
        require('../resources/L3.jpg'),
        require('../resources/M3.jpeg'),
        require('../resources/M2.jpg'),
        require('../resources/M1.jpeg'),
        require('../resources/SM1.jpg'),
        require('../resources/SM2.jpeg'),
        require('../resources/SM3.jpeg'),
        require('../resources/HL1.jpeg'),
        require('../resources/HL2.jpeg'),
        require('../resources/HL3.jpeg'),
      ].map((image, index) => (
        <img
          key={index}
          src={image.default} // Use .default to access the actual image URL from the require statement
          alt={`image ${index + 1}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
