import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

// Import your image paths
import image1 from "../resources/L1.jpg";
import image2 from "../resources/L2.jpg";
import image3 from "../resources/L3.jpg";
import image4 from "../resources/M3.jpeg";
import image5 from "../resources/M2.jpg";
import image6 from "../resources/M1.jpeg";
import image7 from "../resources/SM1.jpg";
import image8 from "../resources/SM2.jpeg";
import image9 from "../resources/SM3.jpeg";
import image10 from "../resources/HL1.jpeg";
import image11 from "../resources/HL2.jpeg";
import image12 from "../resources/HL3.jpeg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="carousel-contain mt-6">
        <Slider {...settings}>
          <div>
            <img src={image1} className="car-pic" alt="Car 1" />
          </div>
          <div>
            <img src={image2} className="car-pic" alt="Car 2" />
          </div>
          <div>
            <img src={image3} className="car-pic" alt="Car 3" />
          </div>
          <div>
            <img src={image4} className="car-pic" alt="Car 4" />
          </div>
          <div>
            <img src={image5} className="car-pic" alt="Car 5" />
          </div>
          <div>
            <img src={image6} className="car-pic" alt="Car 6" />
          </div>
          <div>
            <img src={image7} className="car-pic" alt="Car 7" />
          </div>
          <div>
            <img src={image8} className="car-pic" alt="Car 8" />
          </div>
          <div>
            <img src={image9} className="car-pic" alt="Car 9" />
          </div>
          <div>
            <img src={image10} className="car-pic" alt="Car 10" />
          </div>
          <div>
            <img src={image11} className="car-pic" alt="Car 11" />
          </div>
          <div>
            <img src={image12} className="car-pic" alt="Car 12" />
          </div>
        </Slider>
      </div>
    );
  }
}
