import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper/index";
import ItemCards from "../components/Products/ItemCards";
import { useNavigate } from "react-router";
import PaintingFilters from "../components/FilterMenu/PaintingFiltersContainer";
import { API_URL } from "../API/api";
import axios from "axios";
import "./PaintingsContainer.css";

export default function PaintingsContainer(handleCategoryChange) {
  // const [paintingFilters, setPaintingFilters] = useState({
  //   categoryId: 1,
  //   sections: [],
  // });

  const [paintingFilters, setPaintingFilters] = useState([]);
  const [paintings, setPaintings] = useState([]);

  const [styleCheckedOptions, setStyleCheckedOptions] = useState(
    new Array(paintingFilters.Style.length).fill(false)
  );
  const [techniqueCheckedOptions, setTechniqueCheckedOptions] = useState(
    new Array(paintingFilters.PaintTechnique.length).fill(false)
  );
  const [materialCheckedOptions, setMaterialCheckedOptions] = useState(
    new Array(paintingFilters.PaintMaterial.length).fill(false)
  );
  const [subjectCheckedOptions, setSubjectCheckedOptions] = useState(
    new Array(paintingFilters.Subject.length).fill(false)
  );
  const [sizeCheckedOptions, setSizeCheckedOptions] = useState(
    new Array(paintingFilters.Size.length).fill(false)
  );
  const [colorCheckedOptions, setColorCheckedOptions] = useState(
    new Array(paintingFilters.Color.length).fill(false)
  );
  const [regionCheckedOptions, setRegionCheckedOptions] = useState(
    new Array(paintingFilters.Region.length).fill(false)
  );

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/painting_filter/`)
      .then((response) => setPaintingFilters(response.data));
  }, []);

  useEffect(() => {
    const payload = {
      cat: paintingFilters.value,
    };
    axios
      .get(`${API_URL}/paintings/`, { params: payload })
      .then((response) => setPaintings(response.data));
  }, [paintingFilters.cat, paintingFilters.theme]);

  console.log("FILTERS", paintingFilters);
  console.log("OPTIONS", paintingFilters.Style);
  console.log("PAINTINGS", paintings);

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

  return (
    <PageWrapper>
      <div className="breadcrumbs d-flex justify-content-start">
        <p>Главная/Живопись/...</p>
      </div>
      <hr style={{ width: "1590px" }} />
      <div className="sort-items-container d-flex justify-content-between">
        <p>Живопись</p>
        {/* <div className="sort-items-select">
          <select />
        </div> */}
      </div>
      <hr style={{ width: "1590px" }} />
      <Row className="catalog-container">
        <Col sm={12} md={3} lg={3} className="">
          <PaintingFilters
            filters={paintingFilters}
            setFilters={setPaintingFilters}
            handleCategoryChange
          />
        </Col>
        <Col sm={12} md={9} lg={9} className="items-container-column">
          <ItemCards items={paintings} setPaintings={setPaintings} />
        </Col>
      </Row>
    </PageWrapper>
  );
}
