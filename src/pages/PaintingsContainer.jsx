import React, { useEffect, useState } from "react";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import { Container, Col } from "react-bootstrap";
import ItemCards from "../components/Products/ItemCards";
import { useNavigate } from "react-router";

export default function PaintingsContainer(categoryFilter) {
  const [filters, setFilters] = useState({
    categoryId: 1,
  });

  return (
    <Container fluid className="catalog-container">
      <Col sm={12} md={3} lg={3}>
        <div>
          <FilterMenu filters={filters} setFilters={setFilters} />
        </div>
      </Col>
      <Col sm={12} md={9} lg={9}>
        <ItemCards products={[]} />
      </Col>
    </Container>
  );
}
