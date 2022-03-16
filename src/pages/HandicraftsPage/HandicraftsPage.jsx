import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/index";
import { Link } from "react-router-dom";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./HandicraftsPage.css";
import PaginationComponent from "../../components/Pagination/Pagination";
import HandicraftFilters from "../../components/CatalogFilters/HandicraftFilters";
import { useNavigate } from "react-router-dom";

export default function HandicraftsPage(handleCategoryChange) {
  const [data, setData] = useState();
  const [category, setCategory] = useState(1);
  const navigate = useNavigate();
  const [typeChecked, setTypeChecked] = useState([]);
  const [techniqueChecked, setTechniqueChecked] = useState([]);
  const [materialChecked, setMaterialChecked] = useState([]);
  const [colorChecked, setColorChecked] = useState([]);
  const [regionChecked, setRegionChecked] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState();

  const qs = require("qs");
  let ax = axios.create({
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
  });

  useEffect(() => {
    const params = {
      type: typeChecked.length > 0 ? typeChecked : undefined,
      material: materialChecked.length > 0 ? materialChecked : undefined,
      technique: techniqueChecked.length > 0 ? techniqueChecked : undefined,
      color: colorChecked.length > 0 ? colorChecked : undefined,
      region: regionChecked.length > 0 ? regionChecked : undefined,
      min_price: minPrice,
      max_price: maxPrice,
      page: currentPage,
      ordering: order,
    };
    ax.get(`${API_URL}/handicrafts/`, { params }).then((r) => setData(r.data));
  }, [
    currentPage,
    materialChecked,
    techniqueChecked,
    colorChecked,
    regionChecked,
    typeChecked,
    minPrice,
    maxPrice,
    order,
  ]);

  console.log("HANDICRAFTS", data?.results);

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

  return (
    <PageWrapper>
      <div className="breadcrumbs">
        <p>Главная/Ремесленные изделия/...</p>
      </div>
      <hr />
      <div className="sort-items-container">
        <p>Ремесленные изделия</p>
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
            <option selected value={2}>
              Ремесленные изделия
            </option>
            <option value={1}>Живопись</option>
            <option value={3}>Керамика</option>
          </select>
          <hr />
          <HandicraftFilters
            typeChecked={typeChecked}
            setTypeChecked={setTypeChecked}
            colorChecked={colorChecked}
            setColorChecked={setColorChecked}
            materialChecked={materialChecked}
            setMaterialChecked={setMaterialChecked}
            techniqueChecked={techniqueChecked}
            setTechniqueChecked={setTechniqueChecked}
            regionChecked={regionChecked}
            setRegionChecked={setRegionChecked}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
        <div className="Item-Cards">
          {data?.results.map((product) => (
            <div className="product-item" key={product.id}>
              <Link to={`/handicrafts/${product.id}`}>
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
      {/* <PaginationComponent
        currentPage={currentPage}
        defaultCurrentPage={1}
        defaultPageSize={data?.page_size}
        total={data?.total_count}
        onChange={handlePagination}
      /> */}
    </PageWrapper>
  );
}