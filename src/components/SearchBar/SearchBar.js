// import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { API_URL } from "../../API/api";
// import axios from "axios";
import "./SearchBar.css";

function SearchBar({ setSearchValue }) {
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  function getSelectedCategory() {
    return setCategory(document.getElementById("categoryId").value);
  }
  console.log("выбранная категория: ", category);

  function handleSearchClick() {
    if (category === "paintings") {
      navigate("/paintings");
    } else if (category === "handicrafts") {
      navigate("/handicrafts");
    } else if (category === "ceramics") {
      navigate("/ceramics");
    }
  }

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
        <button
          type="submit"
          className="searchSubmit"
          onClick={handleSearchClick}
        />
      </form>
    </div>
  );
}
export default SearchBar;
