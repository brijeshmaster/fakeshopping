import React from "react";
import Header from "./Containers/Header";
import ProductListing from "./Containers/ProductListing";
import ProductDetails from "./Containers/ProductDetails";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
     
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
