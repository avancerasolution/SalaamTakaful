import React from "react";
import { Link } from "react-router-dom";
import ESG from "../assets/ESG.png";
import Products from "../assets/Product.png";
import Fund from "../assets/Fund.png";

import office from "../assets/office-building.png";
import protection from "../assets/protection.png";
import premiumq from "../assets/premium-quality.png";
import premium from "../assets/premium-quality (1).png";

const SideBar = () => {
  return (

    <React.Fragment>

      <div className="container-fluid">
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              <Link to="/about">
                <span className="navimg">
                  <img src={office} alt="img" />
                </span>
              </Link>
            </span>
          </div>

          <div className="item">
            <span className="whitebg">
              <Link to="/product">
                <span className="navimg">
                  <img src={protection} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <Link to="/governance">
                <span className="navimg">
                  <img src={premiumq} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg">
              <span className="navimg">
                <img src={premium} alt="img" />
              </span>
            </span>
          </div>
        </div>
      </div>

    </React.Fragment>

  );
};

export default SideBar;
