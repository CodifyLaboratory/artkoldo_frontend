
import { Routes } from "react-router-dom";
import { Route} from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/ProductPage/ProductPage";
import Basket from '../pages/Basket/Basket'





export default function Routing() {
    return (
     <Routes>
          <Route path="/" element={<App />}/>
          <Route path='/productPage' element={<ProductPage />}/>
          <Route path='/basket' element={<Basket />}/>
        
    

  
          <Route path="*" element={<div>NOT FOUND</div>} /> 
      
      </Routes>
  );
}
