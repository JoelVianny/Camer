import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import Value from "./pages/Value";
import Article from "./pages/Article";
import ProductDetails from "./pages/ProductDetails";


const App = () => {
  return(
<>
<BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}>
     <Route  element={<Jobs/>}/>
     <Route path="/value" element={<Value/>}/>
     <Route index element={<Article/>}/>
     <Route path="/product" element={<ProductDetails/>}/>

     </Route>
    </Routes>
    </BrowserRouter>
</>
  

    )
};

export default App;

