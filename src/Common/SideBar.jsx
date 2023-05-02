import React from "react";
import { Link } from "react-router-dom";
import About from "../assets/About.png";
import ESG from "../assets/ESG.png";
import Products from "../assets/Product.png";
import Fund from "../assets/Fund.png";

const SideBar = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              <Link to="/about">
                <span className="text">About</span>
                <span className="navimg">
                  <img src={About} alt="img" />
                </span>
              </Link>
            </span>
          </div>

          <div className="item">
            <span className="whitebg">
              <Link to="/governance">
                {" "}
                <span className="text">ESG</span>
                <span className="navimg">
                  <img src={ESG} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <Link to="/product">
                <span className="text">Products</span>
                <span className="navimg">
                  <img src={Products} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg">
              <span className="text">FUNDS PERFORMANCE</span>
              <span className="navimg">
                <img src={Fund} alt="img" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
