import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../Redux/Action/ProductActions";

import axios from "axios";
import { useDispatch } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      dispatch(setProducts(response.data));
      // return response.data;
    } catch (error) {
      console.log(`error is : ${error}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="ui grid container">
        {/* <h1>ProductListing  </h1> */}

        <ProductComponent />
      </div>
    </>
  );
};

export default ProductListing;
