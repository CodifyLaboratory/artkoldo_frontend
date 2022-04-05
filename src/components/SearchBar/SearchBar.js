import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../Context/Context";
import "./SearchBar.css";

function SearchBar() {
  const { valueSearch } = useContext(MainContext);
  const [searchValue, setSearchValue] = valueSearch;
  const [search, setSearch] = useState(false);
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function getCategory() {
    setCategory(document.getElementById("categoryId").value);
  }

  useEffect(() => {
    if (category === "" || input === "") {
      return;
    } else if (category === "paintings" && input !== undefined) {
      setSearchValue(input);
      navigate("/paintings");
    } else if (category === "handicrafts" && input !== undefined) {
      setSearchValue(input);
      navigate("/handicrafts");
    } else if (category === "ceramics" && input !== undefined) {
      setSearchValue(input);
      navigate("/ceramics");
    }
  }, [search === true]);

  return (
    <div className="searchBar">
      <Form.Select
        aria-label="Default select example"
        id="categoryId"
        onChange={getCategory}
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
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="searchSubmit" onClick={() => setSearch(true)} />
      </form>
    </div>
  );
}
export default SearchBar;
