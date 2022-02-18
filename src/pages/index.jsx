import React from "react";
import { Container, Col } from "react-bootstrap";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import ItemCards from "../containers/Products/ItemCards";

const TemplatePage = () => {
  return (
    <Container fluid className="d-flex">
      <Col sm={12} md={3} lg={3}>
        <FilterMenu />
      </Col>
      <Col sm={12} md={9} lg={9}>
        <ItemCards />
      </Col>
    </Container>
  );
};

export default TemplatePage;
