import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectedProduct,
  RemoveselectedProduct,
} from "../Redux/Action/ProductActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );

      const mydata = await response.json();

      dispatch(selectedProduct(mydata));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();

    return () => {
      dispatch(RemoveselectedProduct());
    };
  }, [productId]);

  return (
    <>

      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img
                    className="ui fluid image"
                    src={product.image}
                    alt="items"
                  />
                </div>
                <div className="column rp">
                  <h1>{product.title}</h1>
                  <h2>
                    <a href="#" className="ui teal tag label">
                      ${product.price}
                    </a>
                  </h2>
                  <h3 className="ui brown block header">{product.category}</h3>
                  <p>{product.description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
