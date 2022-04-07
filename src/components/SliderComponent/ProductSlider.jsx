import React, { useState } from "react";
import Logo from "../../images/product-logo.jpeg";
import "./ProductSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrowImg from "../../images/icons/slider-left-arrow.svg";
import RightArrowImg from "../../images/icons/slider-right-arrow.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SliderComponent({ products, filter }) {
  const [slideItems, setSlideItems] = useState([]);

  function getProducts(items) {
    let products = [];
    Object.values(items).map((list) => {
      if (list.length > 3) {
        products = products.concat(list);
      } else if (list.length > 0 && list.length < 2) {
        products = products.concat(list).concat([{}, {}]);
      } else if (list.length > 0 && list.length < 3) {
        products = products.concat(list).concat([{}]);
      }
    });
    return products;
  }

  useEffect(() => {
    setSlideItems(getProducts(products));
  }, [products]);

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

  if (!slideItems) return <div>Loading</div>;
  return (
    <>
      {filter === "all" || filter === "" ? (
        <Slider {...settings}>
          {slideItems?.map((product) => (
            <div
              className="slider-item-wrapper"
              key={product?.title}
              style={{ width: 50 }}
            >
              <Link to={`/${product?.category}s/${product?.id}`}>
                {product?.photo_1 ? (
                  <>
                    <img
                      className="slider-item-img"
                      id={product?.id}
                      src={product?.photo_1}
                      alt="photo"
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="slider-item-img"
                      id={product?.id}
                      src={`${Logo}`}
                      alt="photo"
                    />
                  </>
                )}
              </Link>
              <div className="slider-item-text">
                <div className="slider-item-text-one">
                  <div className="slider-text-title">
                    <span>{product?.title}</span>
                  </div>
                  <div className="slider-text-price">
                    <span>{product?.price}</span>
                    <span>&nbsp;c.</span>
                  </div>
                </div>
                <div className="slider-item-text-two">
                  <span>{product?.author?.name}</span>
                </div>
                <div className="slider-item-text-three">
                  <span>
                    {product?.author?.region?.title}&nbsp;
                    {product?.author?.region?.country?.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {slideItems
            ?.filter((item) => item.category == filter)
            .map((product) => (
              <div
                className="slider-item-wrapper"
                key={product?.title}
                style={{ width: 50 }}
              >
                <Link to={`/${product?.category}s/${product?.id}`}>
                  {product?.photo_1 ? (
                    <>
                      <img
                        className="slider-item-img"
                        id={product?.id}
                        src={product?.photo_1}
                        alt="photo"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        className="slider-item-img"
                        id={product?.id}
                        src={`${Logo}`}
                        alt="photo"
                      />
                    </>
                  )}
                </Link>
                <div className="slider-item-text">
                  <div className="slider-item-text-one">
                    <div className="slider-text-title">
                      <span>{product?.title}</span>
                    </div>
                    <div className="slider-text-price">
                      <span>{product?.price}</span>
                      <span>&nbsp;c.</span>
                    </div>
                  </div>
                  <div className="slider-item-text-two">
                    <span>{product?.author?.name}</span>
                  </div>
                  <div className="slider-item-text-three">
                    <span>
                      {product?.author?.region?.title}&nbsp;
                      {product?.author?.region?.country?.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      )}
    </>
  );
}
