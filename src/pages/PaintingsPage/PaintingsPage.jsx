import React, { useEffect, useState } from "react";
import PaintingFilters from "../../components/CatalogFilters/PaintingFilters";
import PageWrapper from "../../components/PageWrapper/index";
import { Link } from "react-router-dom";
import { API_URL } from "../../API/api";
import axios from "axios";
import { Pagination } from "antd";
import "./PaintingsPage.css";
import PaginationComponent from "../../components/Pagination/Pagination";
import Logo from "../../images/product-logo.jpeg";
import { useNavigate } from "react-router-dom";
const qs = require("qs");
export default function PaintingsPage(handleCategoryChange) {
  const [data, setData] = useState();
  const [category, setCategory] = useState(1);
  const [searchValue, setSearchValue] = useState("");
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
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState();
  const navigate = useNavigate();
  let ax = axios.create({
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
  });
  useEffect(() => {
    const params = {
      search: searchValue ? searchValue : undefined,
      style: styleChecked.length > 0 ? styleChecked : undefined,
      subject: subjectChecked.length > 0 ? subjectChecked : undefined,
      material: materialChecked.length > 0 ? materialChecked : undefined,
      technique: techniqueChecked.length > 0 ? techniqueChecked : undefined,
      color: colorChecked.length > 0 ? colorChecked : undefined,
      author__region: regionChecked.length > 0 ? regionChecked : undefined,
      min_width: minWidth,
      max_width: maxWidth,
      min_height: minHeight,
      max_height: maxHeight,
      min_price: minPrice,
      max_price: maxPrice,
      page: currentPage,
      ordering: order,
    };
    ax.get(`${API_URL}/paintings/`, { params }).then((r) => setData(r.data));
  }, [
    searchValue,
    currentPage,
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
    order,
  ]);
  console.log("PAINTINGS", data?.results);
  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    if (category === "1") {
      navigate("/paintings");
    } else if (category === "2") {
      navigate("/handicrafts");
    } else if (category === "3") {
      navigate("/ceramics");
    }
  }, [category]);
  console.log("data", data);

  if (!data) return <div>Loading</div>;
  console.log("data", data);
  return (
    <PageWrapper setSearchValue={setSearchValue}>
      <div className="breadcrumbs">
        <p>Главная / Живопись /...</p>
      </div>
      <hr />
      <div className="sort-items-container">
        <p>Живопись</p>
        <div className="sort-items-select">
          <select onChange={(e) => setOrder(e.target.value)}>
            <option selected disabled hidden>
              Сортировка
            </option>
            <option value="-create_at">Сначала новые</option>
            <option value="create_at">Сначала старые</option>
            <option value="price">Цена по возрастанию</option>
            <option value="-price">Цена по убыванию</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="catalog-container">
        <div className="filter-menu-container">
          <p className="filter-menu-header">Категории</p>
          <select
            className="filter-menu-header-dropdown"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option selected value={1}>
              Живопись
            </option>
            <option value={2}>Ремесленные изделия</option>
            <option value={3}>Керамика</option>
          </select>
          <hr />
          <PaintingFilters
            styleChecked={styleChecked}
            setStyleChecked={setStyleChecked}
            colorChecked={colorChecked}
            setColorChecked={setColorChecked}
            materialChecked={materialChecked}
            setMaterialChecked={setMaterialChecked}
            techniqueChecked={techniqueChecked}
            setTechniqueChecked={setTechniqueChecked}
            regionChecked={regionChecked}
            setRegionChecked={setRegionChecked}
            subjectChecked={subjectChecked}
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
          {data?.results.map((product) => (
            <div className="product-item" key={product.id}>
              <Link to={`/paintings/${product.id}`}>
                {product.photo_1 ? (
                  <>
                    <img
                      className="product-item_image"
                      id={product.id}
                      src={product.photo_1}
                      // onClick={() => handleClick(product.id)}
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="product-item_logo"
                      id={product.id}
                      src={`${Logo}`}
                      // onClick={() => handleClick(product.id)}
                      alt=""
                    />
                  </>
                )}
              </Link>
              <div className="product-item_detailes">
                <div className="product-item_detailes_col1">
                  <span className="product-item_title">{product.title}</span>
                  <span className="product-item_location">
                    {product.author.name}
                  </span>
                  {/* <span className="product-item_aithor ">{product.price}</span> */}
                </div>
                <div className="product-item_detailes_col2">
                  <span className="product-item_pice">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        current={data?.current_page}
        pageSize={data?.page_size}
        total={data?.total_count}
        onChange={handlePagination}
      />
    </PageWrapper>
  );
}









