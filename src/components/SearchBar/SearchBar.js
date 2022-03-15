import React , {useState, useEffect} from 'react';
import searchIcon from "../../images/search_icon.svg"
import dropdownIcon from "../../images/arrow_down.svg"
import { Form } from "react-bootstrap";
import { API_URL } from "../../API/api";
import axios from "axios";
import './SearchBar.css'



function SearchBar() {
    const [value, setValue]=useState('')

    // const filteredProducts= products.filter(products=>{
    //     return products.title.toLowerCase().includes(value.toLowerCase())
    // })
    // console.log(filteredProducts)

    const [products, setProducts] = useState([]);
    const [category, setCategory]  = useState('paintings');

    useEffect(() => {
      axios
        .get(`${API_URL}/${category}`)
        .then((response) => setProducts(response.data.results));
        
    }, [category]);

    function getSelectedCategory(){
      return setCategory(document.getElementById("categoryId").value)
    }
     
    console.log("выбранная категория: ", category)

  return (
    <div className="searchBar">
        <Form.Select aria-label="Default select example" className="nb-search-select" id = "categoryId" onChange={getSelectedCategory}>
         <option value ="" disabled selected>Поиск</option>
         <option value="paintings">Живопись</option>
          <option value="handicrafts">Ремесленные изделия</option>
          <option value="ceramics">Керамика</option>
        </Form.Select>
         <input className="search-bar" type="text" onChange={(event)=>console.log(event.target.value)} />
         {/* <div className="title">
           <ul>
             {
               products.map(product=>(
                 <li key = {product.title}></li>
               ))
             }
           </ul>
         </div> */}
    </div>
  );
}

export default SearchBar;
