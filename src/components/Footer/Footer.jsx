import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <>
      <div className="img-footer">
        <img src="../../../public/img/background/footer.png" />
      </div>
      <div className="container-box">
        <div className="container-footer">
          <div className="container-footer-basis good4me">
            <h3>GOOD4ME</h3>
            <p>
              Good health is important, so all of our products have been
              carefully designed to bring out the best in you.
            </p>
          </div>
          <div className="container-footer-basis">
            <h3>Keep In Touch</h3>
            <p>
              Subscribe to receive new product updates, be the first to know
              about sales, and more.
            </p>
            <div className="submit-form">
              <form>
                <input placeholder="Enter your email address" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="container-footer-basis more-infor">
            <h3>MORE INFO</h3>
            <ul>
              <li>Shipping & Delivery</li>
              <li>Refund Policy</li>
              <li>Partner Program</li>
              <li>Wholesale Portal</li>
              <li>You Buy, We Donate</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="container-footer-icons">
          <div className="container-footer-icons-basis">
            <ul className="icons-list">
              <li>
                <img src="../../../public/img/icons/facebook.svg" />
              </li>
              <li>
                <img src="../../../public/img/icons/ins.svg" />
              </li>
              <li>
                <img src="../../../public/img/icons/tweet.svg" />
              </li>
              <li>
                <img src="../../../public/img/icons/print.svg" />
              </li>
              <li>
                <img src="../../../public/img/icons/youtube.svg" />
              </li>
            </ul>
          </div>
          <div className="container-footer-icons-basis">
            <p>
              © 2021,{" "}
              <a className="footer-icons-link" href="#">
                GOOD4ME
              </a>
              . Powered by Shopify
            </p>
          </div>
          <div className="container-footer-icons-basis">
            <img src="../../../public/img/background/paypal.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
