import React from "react";
import plane from "../../../public/img/icons/plane.svg";
import money from "../../../public/img/icons/money.svg";
import lock from "../../../public/img/icons/lock.svg";
import "./Information.scss";

function Information() {
  const inFor = [
    {
      img: "../../../public/img/icons/plane.svg",
      title: "WORLDWIDE SHIPPING",
    },
    {
      img: "../../../public/img/icons/money.svg",
      title: "30 DAYS GUARANTEE",
    },
    {
      img: "../../../public/img/icons/lock.svg",
      title: "SECURED PAYMENTS",
    },
  ];
  console.log(plane);
  return (
    <>
      <div className="container-infor">
        {inFor.map((val) => {
          return (
            <div className="container-infor-basis">
              <div>
                <img className="img-1" src={val.img} />
                <img
                  className="img-2"
                  src="../../../public/img/icons/Ellipse.svg"
                />
              </div>
              <h1>{val.title}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Information;
