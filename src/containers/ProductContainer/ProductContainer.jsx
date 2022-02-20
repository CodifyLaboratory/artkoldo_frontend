import React, { useState } from "react";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import ItemCards from "../Products/ItemCards";
import { Container, Col } from "react-bootstrap";
import { ProductItem } from "../Products/product-items/ProductItem";

export default function ProductContainer() {
  const [filters, setFilters] = useState({
    categoryId: 1,
  });

  // const fetchData = () => {
  //     //fetch reauest to API
  //     axios.get("/piatings", { params: filters });
  //   };

  //   useEffect(() => {
  //     fetchData(filters);
  //   }, [filters.categoryId]);

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
