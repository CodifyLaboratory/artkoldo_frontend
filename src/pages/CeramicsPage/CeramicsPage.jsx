import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./CeramicsPage.css";
import { Pagination } from "antd";
import "../../components/Pagination/Pagination.css";
import CeramicFilters from "../../components/CatalogFilters/CeramicFilters";
import { useNavigate } from "react-router-dom";
import ItemCards from "../../components/Products/ItemCards";
import { MainContext } from "../../components/Context/Context.js";
import SpinComponent from "../../components/Spinner/Spin";

export default function CeramicsPage() {
  const [data, setData] = useState();
  const [category, setCategory] = useState(1);
  const [typeChecked, setTypeChecked] = useState([]);
  const [techniqueChecked, setTechniqueChecked] = useState([]);
  const [materialChecked, setMaterialChecked] = useState([]);
  const [colorChecked, setColorChecked] = useState([]);
  const [regionChecked, setRegionChecked] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState();
  const { paintingSearch, handicraftSearch, ceramicSearch } =
    useContext(MainContext);
  const [searchPaintingValue, setSearchPaintingValue] = paintingSearch;
  const [searchHandicraftValue, setSearchHandicraftValue] = handicraftSearch;
  const [searchCeramicValue, setSearchCeramicValue] = ceramicSearch;
  const navigate = useNavigate();
  const qs = require("qs");
  let ax = axios.create({
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
  });
  useEffect(() => {
    const params = {
      search: searchCeramicValue ? searchCeramicValue : undefined,
      type: typeChecked.length > 0 ? typeChecked : undefined,
      material: materialChecked.length > 0 ? materialChecked : undefined,
      technique: techniqueChecked.length > 0 ? techniqueChecked : undefined,
      color: colorChecked.length > 0 ? colorChecked : undefined,
      author__region: regionChecked.length > 0 ? regionChecked : undefined,
      min_price: minPrice,
      max_price: maxPrice,
      page: currentPage,
      ordering: order,
    };
    ax.get(`${API_URL}/api/ceramics/`, { params }).then((r) => setData(r.data));
  }, [
    searchCeramicValue,
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

  useEffect(() => {
    setSearchPaintingValue("");
    setSearchHandicraftValue("");
  }, []);

  if (!data) return <SpinComponent />;
  return (
    <div className="page-content">
      <div className="breadcrumbs">
        <span>
          <a href="/">Главная/</a>
        </span>
        <span>Керамика / ...</span>
      </div>
      <hr className="cerhr"/>
      <div className="sort-items-container">
        <p>Керамика</p>
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
            <option selected value={3}>
              Керамика
            </option>
            <option value={1}>Живопись</option>
            <option value={2}>Ремесленные изделия</option>
          </select>
          <hr />
          <CeramicFilters
            typeChecked={typeChecked}
            setTypeChecked={(values) => {
              setTypeChecked(values);
              setCurrentPage(1);
            }}
            colorChecked={colorChecked}
            setColorChecked={(values) => {
              setColorChecked(values);
              setCurrentPage(1);
            }}
            materialChecked={materialChecked}
            setMaterialChecked={(values) => {
              setMaterialChecked(values);
              setCurrentPage(1);
            }}
            techniqueChecked={techniqueChecked}
            setTechniqueChecked={(values) => {
              setTechniqueChecked(values);
              setCurrentPage(1);
            }}
            regionChecked={regionChecked}
            setRegionChecked={(values) => {
              setRegionChecked(values);
              setCurrentPage(1);
            }}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
        <ItemCards products={data?.results} category="ceramics" />
      </div>
      <Pagination
        current={data?.current_page}
        pageSize={12}
        total={data?.total_count}
        onChange={handlePagination}
      />
    </div>
  );
}
