import React from "react";
import Footer from "./Compoments/FooterDiv/Footer";
import Jobs from "./Compoments/JobDiv/Jobs";
import NavBar from "./Compoments/NavBar/NavBar";
import Search from "./Compoments/SearchDiv/Search";
import Value from "./Compoments/ValueDiv/Value";

const App = () => {
  return(
    <div className="w-[85%] m-auto bg-white">
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
    )
};

export default App;

