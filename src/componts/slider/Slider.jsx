import { useState, useEffect } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../../data";
import "./slider.css";



const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderItems.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
  
    return (
      <div className="slider">
        <ArrowLeftOutlined className="arrow prev" onClick={prevSlide} />
        <ArrowRightOutlined className="arrow next" onClick={nextSlide} />
        {sliderItems.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.img} alt="slide" className="image" />
                  <div className="content">
                    <h2>{slide.title}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button className="btno">view product</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Slider;