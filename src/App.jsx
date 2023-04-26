import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import Value from "./pages/Value";


const App = () => {
  return(
<>
<BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}>
     <Route index element={<Jobs/>}/>
     <Route path="/value" element={<Value/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
</>
  

    )
};

export default App;

