import React , {useState} from 'react';
import searchIcon from "../../images/search_icon.svg"
import dropdownIcon from "../../images/arrow_down.svg"
import { Form } from "react-bootstrap";
import './SearchBar.css'
import { products} from '../../mockData/ListofProducts'


function SearchBar() {
    const [value, setValue]=useState('')
    const filteredProducts= products.filter(product=>{
        return product.title.toLowerCase().includes(value.toLowerCase())
    })
    console.log(filteredProducts)
  return <form className="searchBar">
    <Form.Select aria-label="Default select example" className="nb-search-select">
        <option>Open this select menu</option>
        <option value="1">Живопись</option>
        <option value="2">Ремесленные изделия</option>
        <option value="3">Керамика</option>
    </Form.Select>
    <div className="search-fill">
         <input className="search-bar" type="text" placeholder="Поиск" onChange={(event)=>setValue(event.target.value)} />
    </div>
    <div classname="search-right">
        <div classname="search-sumbit">
         <span classname="search-submit-img">
         <img src={searchIcon} className="search-icon"></img>
      </span>
    </div>
  </div>
</form>;
}

export default SearchBar;
