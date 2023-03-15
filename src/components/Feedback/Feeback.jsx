import React from "react";
import "./Feedback.scss";
function Feeback() {
  return (
    <>
      <div className="feedback-img img-top">
        <img src="../../../public/img/background/pink-bg.png" />
      </div>
      <div className="container-feedback">
        <div className="container-feedback-basis basis-content">
          <h5>REAL REVIEWS</h5>
          <h3>REAL RESULTS</h3>
          <p className="comment">
            “We have perfected our formulas over time, based on your feedback.
            Check out hundreds of reviews on our website.We can't wait until you
            are a part of our Good4Me Family.”
          </p>
          <p className="sign">_Chloe H.</p>
          <button className="left-arrow">
            <img src="../../../public/img/icons/remove.svg" />
          </button>
          <button className="right-arrow">
            <img src="../../../public/img/icons/next.svg" />
          </button>
        </div>
        <div className="container-feedback-basis">
          <img src="../../../public/img/background/feedback.png" />
        </div>
      </div>
      <div className="feedback-img">
        <img src="../../../public/img/background/resultsDown.png" />
      </div>
      <div className="shop-all">
        <h2>SHOP ALL</h2>
      </div>
    </>
  );
}

export default Feeback;
