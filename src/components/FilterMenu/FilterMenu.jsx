import React from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
} from "react-bootstrap";
import PlusButton from "../PlusButton";
import MaterialOptions from "./MaterialOptions";
import PriceOptions from "./PriceOptions";
import SizeOptions from "./SizeOptions";
import "./style.css";
import StyleOptions from "./StyleOptions";
import TechnicOptions from "./TechnicOptions";
import ThemeOptions from "./ThemeOptions";

const FilterMenu = () => {
  //   return (
  //     <div>
  //       <Form.Select
  //         aria-label="Default select example"
  //         id="filter-menu-header-dropdown"
  //       >
  //         <option value="1">Живопись</option>
  //         <option value="2">Ремесленные изделия</option>
  //         <option value="3">Керамика</option>
  //       </Form.Select>
  //     </div>
  //   );
  // }

  const showStyleOptions = () => {};

  return (
    <Col sm={6} md={4} lg={4} className="filter-menu-container">
      <p className="d-flex justify-content-start align-items-center filter-menu-header">
        Категории
      </p>
      <Form.Select
        aria-label="Default select example"
        id="filter-menu-header-dropdown"
      >
        <option value="1">Живопись</option>
        <option value="2">Ремесленные изделия</option>
        <option value="3">Керамика</option>
      </Form.Select>
      <hr />
      <Row className="filter-menu-section">
        <StyleOptions />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <MaterialOptions />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <ThemeOptions />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <TechnicOptions />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <SizeOptions />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <PriceOptions />
      </Row>
      <hr />
    </Col>
  );
};

export default FilterMenu;
