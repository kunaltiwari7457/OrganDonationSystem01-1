import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
    "https://www.organindia.org/wp-content/uploads/2019/01/organ-new-banner-1.jpg",
  "https://media.licdn.com/dms/image/v2/C4E1BAQGzPzZh5O0B4Q/company-background_1536_768/company-background_1536_768/0/1583891948995?e=2147483647&v=beta&t=lMYF_mxjD6Wnxy9CqQ1Gtj66og7nU5AE_ON-04F_y4Q",
 
  "https://www.organindia.org/wp-content/uploads/2021/03/OrganIndia_MTVBanner-01-2.jpg",
  "https://www.mohanfoundation.org/includes-rwd/images/donor-memorial-banner2016-m.jpg",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // 5 sec
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slider">
      <button className="arrow prev" onClick={handlePrev}>
        ❮
      </button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button className="arrow next" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Slider;
