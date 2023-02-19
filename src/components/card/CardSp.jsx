import React from "react";
import "./CardSp.scss";

export default function CardSp(props) {
  return (
    <div className="container-card">
      <div className="container-basis">
        <div className="container-card-basis-img">
          <img src="{props.img}" />
        </div>
        <div className="container-card-basis-content">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
}
