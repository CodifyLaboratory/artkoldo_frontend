
import { Routes } from "react-router-dom";

import { Route} from "react-router-dom";
import App from "../App";
// import clickButton from '../components/clickme/clickButton';
import ProductPage from "../pages/ProductPage/ProductPage";




export default function Routing() {
    return (
     <Routes>
          <Route path="/" element={<App />}/>
          <Route path='/productPage' element={<ProductPage />}/>
    

  
          <Route path="*" element={<div>NOT FOUND</div>} />
      
      </Routes>
  );
}
