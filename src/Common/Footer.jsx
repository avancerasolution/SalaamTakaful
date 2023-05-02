import React from "react";
import { Link } from "react-router-dom";
import BuyNow from "../assets/Buy.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid text-center footerbottom">
        <div className="row">
          <div className="col call_btn">
            <Link to="/buynow">
              <button>
                <img src={BuyNow} alt="call" />
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
