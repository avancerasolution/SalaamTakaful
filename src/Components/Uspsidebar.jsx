import React, { useState } from "react";
import environment from "../assets/Sustainability.png";
import policy from "../assets/Policy .png";
import policyb from "../assets/Policyb.png";
import social from "../assets/social.png";
import socialb from "../assets/socialb.png";
import advisor from "../assets/Sustainability.png";
import advisorb from "../assets/Sustainabilityb.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import environmentb from "../assets/Sustainabilityb.png";
import Board from "./Board";
import Managment from "./Managment";
import Auditor from "./Auditor";
import Advisor from "./Advisor";
import Shareholding from "./Shareholding";
import share from "../assets/about3.png";
import shareb from "../assets/img3b.png";
import Supercharge from "./Supercharge";
import Bonus from "./Bonus";
import Flexible from "./Flexible";
import Unlimited from "./Unlimited";
import Zero from "./Zero";
import Wakala from "./Wakala";
import Inclusive from "./Inclusive";

const Uspsidebar = () => {
  const [Tabvalue, setTabvalue] = useState("super");
  const myfun = (data) => {
    setTabvalue(data);
  };

  return (
    <React.Fragment>
      <div>
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              <Link to="/product" className="linkstyle">
                <span className="navimg newabout">
                  <span className="text1">Product</span>
                  <img src={HomeIcon} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item">
            <span className="whitebg">
              <span
                className={
                  Tabvalue === "super" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("super")}
              >
                {Tabvalue === "super" ? (
                  <img src={environment} alt="img" />
                ) : (
                  <img src={environmentb} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span
                className={Tabvalue === "bonus" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("bonus")}
              >
                {Tabvalue === "bonus" ? (
                  <img src={social} alt="img" />
                ) : (
                  <img src={socialb} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg ">
              <span
                className={
                  Tabvalue === "flexible" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("flexible")}
              >
                {Tabvalue === "flexible" ? (
                  <img src={policyb} alt="img" />
                ) : (
                  <img src={policy} alt="img" />
                )}
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span
                className={
                  Tabvalue === "unlimited" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("unlimited")}
              >
                {Tabvalue === "unlimited" ? (
                  <img src={advisor} alt="img" />
                ) : (
                  <img src={advisorb} alt="img" />
                )}
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span
                className={
                  Tabvalue === "zero" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("zero")}
              >
                {Tabvalue === "zero" ? (
                  <img src={shareb} alt="img" />
                ) : (
                  <img src={share} alt="img" />
                )}
              </span>
            </span>
          </div>

          <div className="item iteminner">
            <span className="whitebg ">
              <span
                className={
                  Tabvalue === "wakala" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("wakala")}
              >
                {Tabvalue === "wakala" ? (
                  <img src={policyb} alt="img" />
                ) : (
                  <img src={policy} alt="img" />
                )}
              </span>
            </span>
          </div>

          <div className="item ">
            <span className="whitebg">
              <span
                className={Tabvalue === "inclusive" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("inclusive")}
              >
                {Tabvalue === "inclusive" ? (
                  <img src={social} alt="img" />
                ) : (
                  <img src={socialb} alt="img" />
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
  if (value === "super") {
    return <Supercharge />;
  } else if (value === "bonus") {
    return <Bonus />;
  } else if (value === "flexible") {
    return <Flexible />;
  }  else if (value === "unlimited") {
    return <Unlimited />;
  }  else if (value === "zero") {
    return <Zero />;
  }   else if (value === "wakala") {
    return <Wakala />;
  }   else if (value === "inclusive") {
    return <Inclusive />;
  } else {
    return <Supercharge />;
  }
}
export default Uspsidebar;
