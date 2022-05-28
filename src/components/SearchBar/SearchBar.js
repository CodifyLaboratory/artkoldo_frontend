import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../Context/Context";
import "./SearchBar.css";

function SearchBar() {
  const { paintingSearch, handicraftSearch, ceramicSearch } =
    useContext(MainContext);
  const [searchPaintingValue, setSearchPaintingValue] = paintingSearch;
  const [searchHandicraftValue, setSearchHandicraftValue] = handicraftSearch;
  const [searchCeramicValue, setSearchCeramicValue] = ceramicSearch;
  const [search, setSearch] = useState(false);
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function getCategory() {
    setCategory(document.getElementById("categoryId").value);
  }

  useEffect(() => {
    return () => {
      setInput("");
    };
  }, []);

  const handleSearch = () => {
    if (category === "" || input === "") {
      return;
    } else if (category === "paintings" && input !== undefined) {
      setSearchPaintingValue(input);
      navigate("/paintings");
    } else if (category === "handicrafts" && input !== undefined) {
      setSearchHandicraftValue(input);
      navigate("/handicrafts");
    } else if (category === "ceramics" && input !== undefined) {
      setSearchCeramicValue(input);
      navigate("/ceramics");
    }
  };

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="searchBar">
      <select id="categoryId" onChange={getCategory} required={true}>
        <option value="" disabled selected className="select-category">
          Выбрать
        </option>
        <option value="paintings">Живопись</option>
        <option value="handicrafts">Ремесленные изделия</option>
        <option value="ceramics">Керамика</option>
      </select>
      <div className="search-input">
        <input
          className="search-bar"
          type="text"
          id="search-bar"
          onChange={(event) => handleInput(event)}
          onKeyDown={handleSearch}
          required={true}
          placeholder="Поиск..."
        />
        <button className="searchSubmit" onClick={handleSearch} />
      </div>
    </div>
  );
}
export default SearchBar;
