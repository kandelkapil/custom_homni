import React from "react";
import NavBar from "./components/header/NavBar";
import Pricing from "./components/Pricing/Pricing";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Relatedrecepie from "./components/Related_Recepie/Related-recepie";
import Review from "./components/Reviews/Review";
import SuggestedProduct from "./components/SuggestedProduct/SuggestedProduct";
const App = () => {
  return (
    <>
      <NavBar />
      <ProductDetails />
      <Pricing />
      <Relatedrecepie />
      <Review />
      <SuggestedProduct />
    </>
  );
};

export default App;
