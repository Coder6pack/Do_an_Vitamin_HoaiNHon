import React from "react";
import "./CardSp.scss";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";

export default function CardSp(props) {
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
      <div className="container-content">
        <h1>GOOD4ME DEAL</h1>
        <p>
          Pick your beauty products today. 50% OFF on the most popular GOOD4ME.
          Order all classy products today!
        </p>
      </div>
      <div className="container-card">
        {count.slice(0, 4).map((val, index) => {
          return (
            <>
              <div className="container-card-basis">
                <div className="container-card-basis-img">
                  <img
                    src={"../../../public/img/background/drug.png"}
                    width={200}
                  />
                </div>
                <div className="container-card-basis-content">
                  <p>{val.name}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
