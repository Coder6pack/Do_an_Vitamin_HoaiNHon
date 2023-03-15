import React from "react";
import "./ProductCard.scss";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";

function ProductCard() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      setCount(productList.data);
    };

    fetchProduct();
  }, []);
  return (
    <>
      <div className="container-product">
        {count.slice(0, 4).map((val, ind) => {
          if (val.sale == true) {
            return (
              <>
                <div key={ind} className="container-product-basis">
                  <div className="product-title">
                    <div className="product-title-img">
                      <img src={"../../../public/img/background/drug.png"} />
                    </div>
                    <span className="product-title-sale">ON SALE</span>
                  </div>
                  <div className="product-content">
                    <h4>{val.name}</h4>
                    <span className="product-content-price">
                      ${val.price} USD
                    </span>
                    <span className="product-content-discouter">
                      ${val.discouter} USD
                    </span>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div key={ind} className="container-product-basis">
                  <div className="product-title">
                    <div className="product-title-img">
                      <img src={"../../../public/img/background/drug.png"} />
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>{val.name}</h4>
                    <span className="product-content-price">
                      ${val.price} USD
                    </span>
                    <span className="product-content-discouter">
                      ${val.discouter} USD
                    </span>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
      <div className="btn-viewall">
        <button>VIEW ALL PRODUCTS</button>
      </div>
    </>
  );
}

export default ProductCard;
