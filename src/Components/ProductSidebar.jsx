import React, { useState } from "react";
import environment from "../assets/Sustainability.png";
import environmentb from "../assets/Sustainabilityb.png";
import policy from "../assets/icons/individual.png";
import policyb from "../assets/icons/individualb.png";
import investment from "../assets/icons/desk management.png";
import investmentb from "../assets/icons/desk-managementb.png";
import charge from "../assets/icons/performance report.png";
import chargeb from "../assets/icons/performance-reportb.png";

import moreb from "../assets/icons/investor complaint.png";
import more from "../assets/icons/investor-complaintb.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";

import Board from "./Board";

import supliment from "../assets/icons/news & update.png";
import suplimentb from "../assets/icons/news-&-updateb.png";
import Productoverview from "./Productoverview";
import ProductUsp from "./Supercharge";
import Additional from "./Additionalfeatures";
import Suplimentary from "./Suplimentary";
import Investment from "./Investment";
import Charge from "./ChargeStructure";

const ProductSidebar = () => {
  const [Tabvalue, setTabvalue] = useState("overview");
  const myfun = (data) => {
    setTabvalue(data);
  };

  return (
    <React.Fragment>
      <div>
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              <Link to="/" className="linkstyle">
                <span className="navimg newabout">
                  <span className="text1">Home</span>
                  <img src={HomeIcon} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item">
            <span className="whitebg">
              <span
                className={
                  Tabvalue === "overview" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("overview")}
              >
                {Tabvalue === "overview" ? (
                  <img src={environment} alt="img" />
                ) : (
                  <img src={environmentb} alt="img" />
                )}
              </span>
            </span>
          </div>

          <div className="item">
            <span className="whitebg">
              <Link to="/usp" className="linkstyle">
                <span className={Tabvalue === "auditor" ? "aboutactive" : "bgColor"}>
                  {Tabvalue === "auditor" ? (
                    <img src={policyb} alt="img" />
                  ) : (
                    <img src={policy} alt="img" />
                  )}
                </span>
              </Link>
            </span>
          </div>




          <div className="item iteminner">
            <span className="whitebg ">
              <span
                className={
                  Tabvalue === "additional" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("additional")}
              >
                {Tabvalue === "additional" ? (
                  <img src={more} alt="img" />
                ) : (
                  <img src={moreb} alt="img" />
                )}
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span
                className={
                  Tabvalue === "suplimentary" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("suplimentary")}
              >
                {Tabvalue === "suplimentary" ? (
                  <img src={suplimentb} alt="img" />
                ) : (
                  <img src={supliment} alt="img" />
                )}
              </span>
            </span>
          </div>

          <div className="item">
            <span className="whitebg">
              <span
                className={
                  Tabvalue === "investment" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("investment")}
              >
                {Tabvalue === "investment" ? (
                  <img src={investmentb} alt="img" />
                ) : (
                  <img src={investment} alt="img" />
                )}
              </span>
            </span>
          </div>

          <div className="item">
            <span className="whitebg">
              <span
                className={
                  Tabvalue === "charge" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("charge")}
              >
                {Tabvalue === "charge" ? (
                  <img src={chargeb} alt="img" />
                ) : (
                  <img src={charge} alt="img" />
                )}
              </span>
            </span>
          </div>

        </div>
      </div>

      <Tab value={Tabvalue} />
    </React.Fragment>
  );
};

function Tab({ value }) {
  if (value === "overview") {
    return <Productoverview />;
  } else if (value === "usp") {
    return <ProductUsp />;
  } else if (value === "additional") {
    return <Additional />;
  } else if (value === "suplimentary") {
    return <Suplimentary />;
  } else if (value === "investment") {
    return <Investment />;
  } else if (value === "charge") {
    return <Charge />;
  } else {
    return <Board />;
  }
}
export default ProductSidebar;
