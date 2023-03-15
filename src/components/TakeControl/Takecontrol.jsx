import React from "react";
import "./Takecontrol.scss";
function Takecontrol() {
  return (
    <>
      <div className="container-control">
        <div className="container-control-content">
          <div className="container-control-content-title">
            <h1>TAKE CONTROL OF YOUR HEALTH</h1>
            <p>
              The Good4Me range has been formulated based on scientific &
              traditional evidence.
            </p>
            <p>
              Our vitamins are here and ready to boost your mood, immunity and
              overall well-being!
            </p>
            <p>Made in New Zealand from local and imported ingredients.</p>
            <button>BROWSE OUR RANGE</button>
          </div>
        </div>
        <div className="container-control-content">
          <div className="container-control-content-img">
            <div className="img-basis">
              <div className="img-basis-y">
                <img src="../../../public/img/background/control1.png" />
              </div>
              <div>
                <img src="../../../public/img/background/control1.png" />
              </div>
            </div>
            <div className="img-basis">
              <div className="img-tall">
                <img src="../../../public/img/background/control2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outproduct">
        <h1>OUR PRODUCTS ARE</h1>
      </div>
    </>
  );
}

export default Takecontrol;
