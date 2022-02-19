import React, { useState } from "react";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import ItemCards from "../Products/ItemCards";
import NavBar from "../components/NavBar/NavBar";

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
    <>

      <FilterMenu filters={filters} setFilters={setFilters} />
      <ItemCards products={[]} />
    </>
  );
}
