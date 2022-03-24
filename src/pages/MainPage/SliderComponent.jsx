import { Component } from "react";
import "./SliderComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PIC from "../../images/1.png";
import Slider from "react-slick";
import LeftArrowImg from "../../images/icons/slider-left-arrow.svg";
import RightArrowImg from "../../images/icons/slider-right-arrow.svg";

export default function SliderComponent() {
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
    className: "slider variable-width",
    dots: false,
    infinite: true,
    fade: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <Slider {...settings}>
      <div className="slider-item-wrapper" key="" style={{ width: 100 }}>
        <img className="slider-item-img" src={PIC} alt="" />
        <div className="slider-item-text">
          <div className="slider-item-text-one">
            <div className="slider-text-title">
              <span>Настроение</span>
            </div>
            <div className="slider-text-price">
              <span>400</span>
              <span>&nbsp;c.</span>
            </div>
          </div>
          <div className="slider-item-text-two">
            <span>Алиева А.А.</span>
          </div>
          <div className="slider-item-text-three">
            <span>Бишкек, Кыргызстан</span>
          </div>
        </div>
      </div>
      <div className="slider-item-wrapper" key="" style={{ width: 100 }}>
        <img className="slider-item-img" src={PIC} alt="" />
        <div className="slider-item-text">
          <div className="slider-item-text-one">
            <div className="slider-text-title">
              <span>Настроение</span>
            </div>
            <div className="slider-text-price">
              <span>400</span>
              <span>&nbsp;c.</span>
            </div>
          </div>
          <div className="slider-item-text-two">
            <span>Алиева А.А.</span>
          </div>
          <div className="slider-item-text-three">
            <span>Бишкек, Кыргызстан</span>
          </div>
        </div>
      </div>
      <div className="slider-item-wrapper" key="" style={{ width: 50 }}>
        <img className="slider-item-img" src={PIC} alt="" />
        <div className="slider-item-text">
          <div className="slider-item-text-one">
            <div className="slider-text-title">
              <span>Настроение</span>
            </div>
            <div className="slider-text-price">
              <span>400</span>
              <span>&nbsp;c.</span>
            </div>
          </div>
          <div className="slider-item-text-two">
            <span>Алиева А.А.</span>
          </div>
          <div className="slider-item-text-three">
            <span>Бишкек, Кыргызстан</span>
          </div>
        </div>
      </div>
    </Slider>
  );
}
