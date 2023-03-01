import React, { useEffect, useState } from "react";
import { getSlider } from "../services/ApiService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MenuSlider = () => {
  const [sliders, setSliders] = useState([]);
  const [selectedSlider, setSelectedSlider] = useState({});
  useEffect(() => {
    const setSliderData = async () => {
      const data = await getSlider();
      setSliders(data);
      setSelectedSlider(data[0]);
    };
    setSliderData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="w-1/2 mx-auto slider-wrapper mt-10">
        <div className="grid grid-cols-2 mx-auto">
          <div className="slider-info-wrapper">
            <div className="slider-title">{selectedSlider.title}</div>
            <div className="slider-description">
              {selectedSlider.description}
            </div>
          </div>
          <div className="slider-image">
            <img src={selectedSlider.image?.image_path}></img>
          </div>
        </div>
      </div>
      <div className="carousel-dot-wrapper">
        {sliders.map((item) => (
          <div key={item.id} onClick={() => setSelectedSlider(item)} className={item.id === selectedSlider.id ? 'dot-item active' : 'dot-item'}></div>
        ))}
      </div>
    </div>
  );
};
export default MenuSlider;
