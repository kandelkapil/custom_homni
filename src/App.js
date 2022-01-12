import React from "react";
import NavBar from "./components/header/NavBar";
import Pricing from "./components/Pricing/Pricing";
import ProductDetails from "./components/ProductDetails/ProductDetails";
const App = () => {
  return (
    <>
      <NavBar />
      <ProductDetails />
      <Pricing />
    </>
  );
};

export default App;
