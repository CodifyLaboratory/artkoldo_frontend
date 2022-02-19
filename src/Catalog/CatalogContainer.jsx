import React, { useState, useEffect } from "react";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import ItemCards from "../containers/Products/ItemCards";
import axios from "axios";

export default function CatalogContainer() {
  // const [itemsData, setItemData] = useState(catalogFilters);
  const [filters, setFilters] = useState({
    categoryId: 1,
  });

  const fetchData = () => {
    axios.get("/paintings/", { params: filters });
    // console.log("filters", filters);
    // .then((response) => {
    // setItemData(catalogFilters);
    // });
    // console.log(itemsData);

    // axios.get("https://artkoldo.herokuapp.com/handicrafts/", {
    //   params: filters,
    // });
    // axios
    //   .get("/https://artkoldo.herokuapp.com/ceramics/", { params: filters })
    //   .then();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(filters);
  }, [filters.categoryId]);

  // console.log("filterOptions", filterOptions);

  return (
    <>
      <FilterMenu filters={filters} setFilters={setFilters} />
      {/* <ItemCards products={[]} /> */}
    </>
  );
}
