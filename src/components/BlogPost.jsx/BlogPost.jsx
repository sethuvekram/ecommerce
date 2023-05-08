import React, { useEffect, useState } from "react";
import "./BlogPost.scss";
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";

import slide3 from "../../assets/slide-3.jpg";

import AOS from "aos";
import { Carousel } from "antd";
function BlogPost() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const onChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const slides = [
    {
      content: (
        <img
          src={slide1}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            display: "block",
            margin: "auto",
          }}
          alt="Slide 1"
        />
      ),
    },
    {
      content: (
        <img
          src={slide2}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            display: "block",
            margin: "auto",
          }}
          alt="Slide 2"
        />
      ),
    },
    {
      content: (
        <img
          src={slide3}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            display: "block",
            margin: "auto",
          }}
          alt="Slide 3"
        />
      ),
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <main className="blogSpot">
      <h1>Featured Products</h1>
      <div className="carousal">
        <Carousel afterChange={onChange} autoplay autoplaySpeed={3000}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                style={{
                  height: "80vh",
                  width: "100vw",
                  overflow: "hidden",
                }}
              >
                {slide.content}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </main>
  );
}

export default BlogPost;
