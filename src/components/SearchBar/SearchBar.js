import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
// import { API_URL } from "../../API/api";
// import axios from "axios";
import "./SearchBar.css";

function SearchBar({ setSearchValue }) {
  //   const [searchValue, setSearchValue] = useState("");
  //   const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("paintings");


  //   useEffect(() => {
  //     axios
  //       .get("${API_URL}/${category}?search=${searchValue}")
  //       .then((response) => setProducts(response.data.results));
  //   }, [category, searchValue]);
  function getSelectedCategory() {
    return setCategory(document.getElementById("categoryId").value);
  }
  console.log("выбранная категория: ", category);


  return (
    <div className="searchBar">
      <Form.Select
        aria-label="Default select example"
        id="categoryId"
        onChange={getSelectedCategory}
      >
        <option value="" disabled selected>
          Поиск
        </option>
        <option value="paintings">Живопись</option>
        <option value="handicrafts">Ремесленные изделия</option>
        <option value="ceramics">Керамика</option>
      </Form.Select>
    <form className="d-flex w-75">
    <input
        className="search-bar"
        type="text"
        id="searchbar"

        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="searchSubmit" ></div>
    </form>
    </div>
  );
}
export default SearchBar;
