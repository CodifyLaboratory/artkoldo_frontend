import React, { useEffect, useState } from "react";
import PaintingFilters from "../../components/CatalogFilters/PaintingFilters";
import PageWrapper from "../../components/PageWrapper/index";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./PaintingsPage.css";

export default function PaintingsPage(handleCategoryChange) {
  const [paintings, setPaintings] = useState([]);
  const [navigate, setNavigate] = useState(false);
  const [styleChecked, setStyleChecked] = useState([]);
  const [techniqueChecked, setTechniqueChecked] = useState([]);
  const [materialChecked, setMaterialChecked] = useState([]);
  const [subjectChecked, setSubjectChecked] = useState([]);
  const [colorChecked, setColorChecked] = useState([]);
  const [regionChecked, setRegionChecked] = useState([]);
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minWidth, setMinWidth] = useState("");
  const [maxWidth, setMaxWidth] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  console.log("checked", subjectChecked);

  // const [priceOrder, setPriceOrder] = useState('')
  // const [dateOrder, setDateOrder] = useState()

  useEffect(() => {
    axios
      .get(`${API_URL}/paintings`)
      .then((response) => setPaintings(response.data));
  }, []);

  useEffect(() => {
    const params = {
      style: styleChecked.length > 0 ? styleChecked.join(", ") : undefined,
      subject:
        subjectChecked.length > 0 ? subjectChecked.join(", ") : undefined,
      material:
        materialChecked.length > 0 ? materialChecked.join(", ") : undefined,
      technique:
        techniqueChecked.length > 0 ? techniqueChecked.join(", ") : undefined,
      color: colorChecked.length > 0 ? colorChecked.join(", ") : undefined,
      region: regionChecked.length > 0 ? regionChecked.join(", ") : undefined,
      min_width: "",
      max_width: "",
      min_height: "",
      max_height: "",
      min_price: "",
      max_price: "",
      // ordering: togglePriceOrder
    };
    axios
      .get(`${API_URL}/paintings/`, { params })
      .then((r) => setPaintings(r.data.results));
  }, [
    styleChecked,
    materialChecked,
    techniqueChecked,
    colorChecked,
    regionChecked,
    subjectChecked,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    minPrice,
    maxPrice,
  ]);

  console.log("PAINTINGS", paintings);

  // function handleClick(id) {
  //   navigate(`/paintings/${id}`);
  // }

  // useEffect(() => {
  //   switch (categoryFilters.categoryId) {
  //     case "1":
  //       navigate("/paintings");
  //     case "2":
  //       navigate("/handicrafts");
  //     case "3":
  //       navigate("/ceramics");
  //     default:
  //       navigate("/paintings");
  //   }
  // }, [categoryFilters.categoryId]);

  const { id } = useParams();

  return (
    <PageWrapper>
      <div className="breadcrumbs">
        <p>Главная/Живопись/...</p>
      </div>
      <hr />
      <div className="sort-items-container">
        <p>Живопись</p>
        <div className="sort-items-select">
          <select>
            <option selected disabled hidden>
              Сортировка
            </option>
            <option value={1}>Новые</option>
            <option value={2}>Цена по возрастанию</option>
            <option value={3}>Цена по убыванию</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="catalog-container">
        <div className="filter-menu-container">
          <p className="filter-menu-header">Категории</p>
          <select
            className="filter-menu-header-dropdown"
            // onChange={handleCategoryChange}
          >
            <option value={1}>Живопись</option>
            <option value={2}>Ремесленные изделия</option>
            <option value={3}>Керамика</option>
          </select>
          <hr />
          <PaintingFilters
            setStyleChecked={setStyleChecked}
            setColorChecked={setColorChecked}
            setMaterialChecked={setMaterialChecked}
            setTechniqueChecked={setTechniqueChecked}
            setRegionChecked={setRegionChecked}
            setSubjectChecked={setSubjectChecked}
            setMinHeight={setMinHeight}
            setMaxHeight={setMaxHeight}
            setMinWidth={setMinWidth}
            setMaxWidth={setMaxWidth}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
        <div className="Item-Cards">
          {paintings.map((product) => (
            <div className="product-item" key={product.id}>
              <Link to={`/paintings/${product.id}`}>
                <img
                  className="product-item_image"
                  id={product.id}
                  src={product.image}
                  // onClick={() => handleClick(product.id)}
                  alt=""
                />
              </Link>
              <div className="product-item_detailes">
                <div className="product-item_detailes_col1">
                  <span className="product-item_title">{product.title}</span>
                  {/* <span className="product-item_aithor ">{product.author}</span>
                  <span className="product-item_location">
                    {product.location}
                  </span> */}
                </div>
                <div className="product-item_detailes_col2">
                  <span className="product-item_pice">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
