import React from "react";
import Logo from "../../images/product-logo.png";
import "./AuthorSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrowImg from "../../images/icons/slider-left-arrow.svg";
import RightArrowImg from "../../images/icons/slider-right-arrow.svg";

export default function AuthorSlider({ slides }) {
  function RightArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "18px",
          height: "30px",
          display: "block",
          backgroundImage: `url(${RightArrowImg}`,
        }}
        onClick={onClick}
      />
    );
  }

  function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "18px",
          height: "30px",
          display: "block",
          backgroundImage: `url(${LeftArrowImg}`,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  if (!slides) return <div>Loading</div>;
  return (
    <>
      <p className="authors-slider-title">Мастера</p>
      <Slider {...settings}>
        {slides?.map((author) => (
          <div className="slider-item-wrapper" key={author?.name}>
            <div className="author-about-photo">
              {author?.photo ? (
                <img className="author-photo" src={author?.photo} alt="photo" />
              ) : (
                <img className="author-photo" src={`${Logo}`} alt="photo" />
              )}
            </div>
            <div className="author-about-text">
              <div className="author-about-name">{author?.name}</div>
              <div className="author-about-bio">{author?.about}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
