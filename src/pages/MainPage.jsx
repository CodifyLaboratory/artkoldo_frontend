import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper/index";
import PaintingsContainer from "./PaintingsContainer";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../API/api";
import axios from "axios";

export default function MainPage() {
  const [categoryFilters, setCategoryFilters] = useState({
    categoryId: 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/`);
  }, []);

  // const { id } = useParams();
  // console.log(id);

  const handleCategoryChange = (e, id) => {
    const catId = +e.target.id;
    setCategoryFilters((prev) => ({
      ...prev,
      categoryId: catId,
      categorySections: [],
    }));
  };

  useEffect(() => {
    switch (categoryFilters.categoryId) {
      case "1":
        navigate("/paintings");
      case "2":
        navigate("/handicrafts");
      case "3":
        navigate("/ceramics");
      default:
        navigate("/paintings");
    }
  }, [categoryFilters.categoryId]);

  return (
    <PageWrapper>
      {/* <PaintingsContainer
        filters={categoryFilters}
        setCategoryFilters={setCategoryFilters}
        handleCategoryChange={handleCategoryChange}
      /> */}
      {/* <HandicraftsContainer handleCategoryChange={handleCategoryChange} />
        <CeramicsContainer handleCategoryChange={handleCategoryChange} /> */}
    </PageWrapper>
  );
}
