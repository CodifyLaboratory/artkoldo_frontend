import React, { useState, useEffect } from "react";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import ItemCards from "../Products/ItemCards";
const catalogFilters = [
  {
    id: 1,
    categoryName: "Живопись",
    section: [
      {
        id: 1,
        sectionName: "Стиль",
        options: [
          "abstraction",
          "Современное искусство",
          "Абстрактный экспрессионизм",
          "Экспрессионизм",
        ],
      },

      {
        id: 2,
        sectionName: "Темы",
        options: [],
      },
    ],
  },
  {
    id: 2,
    categoryName: "kermika",
    section: [
      {
        id: 1,
        sectionName: "Стиль",
        options: [
          "abstraction",
          "Современное искусство",
          "Абстрактный экспрессионизм",
          "Экспрессионизм",
        ],
      },

      {
        id: 2,
        sectionName: "Темы",
        options: [],
      },
    ],
  },
];

export default function ProductContainer() {
  const [filters, setFilters] = useState({
    categoryId: null,
  });

  const fetchData = () => {
    axios.get("https://artkoldo.herokuapp.com/paintings/", { params: filters });
    axios.get("https://artkoldo.herokuapp.com/handicrafts/", {
      params: filters,
    });
    axios
      .get("/https://artkoldo.herokuapp.com/ceramics/", { params: filters })
      .then();
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters.categoryId]);

  return (
    <>
      <FilterMenu filters={filters} setFilters={setFilters} />
      <ItemCards products={[]} />
    </>
  );
}
