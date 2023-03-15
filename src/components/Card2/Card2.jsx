import React from "react";
import "./Car2.scss";
function Card2(props) {
  if (props.sale == true) {
    return (
      <>
        <div className="container-card2">
          <div className="container-card2-img">
            <div>
              <img src="../../../public/img/background/drug.png" />
            </div>
            <span>ON SALE</span>
          </div>
          <div className="container-content">
            <h4>{props.name}</h4>
            <span className="price">${props.price} USD</span>
            <span className="discount">${props.discouter} USD</span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container-card2">
        <div className="container-card2-img">
          <div>
            <img src="../../../public/img/background/drug.png" />
          </div>
        </div>
        <div className="container-content">
          <h4>{props.name}</h4>
          <span className="price">${props.price} USD</span>
          <span className="discount">${props.discouter} USD</span>
        </div>
      </div>
    );
  }
}

export default Card2;
