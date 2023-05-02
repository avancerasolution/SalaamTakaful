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

const Governancesidebar = () => {
  const [Tabvalue, setTabvalue] = useState("board");
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
                  Tabvalue === "board" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("board")}
              >
                {Tabvalue === "board" ? (
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
                className={Tabvalue === "managment" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("managment")}
              >
                {Tabvalue === "managment" ? (
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
                  Tabvalue === "auditor" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("auditor")}
              >
                {Tabvalue === "auditor" ? (
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
                  Tabvalue === "advisor" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("advisor")}
              >
                {Tabvalue === "advisor" ? (
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
                  Tabvalue === "share" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("share")}
              >
                {Tabvalue === "share" ? (
                  <img src={shareb} alt="img" />
                ) : (
                  <img src={share} alt="img" />
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
  if (value === "board") {
    return <Board />;
  } else if (value === "managment") {
    return <Managment />;
  } else if (value === "auditor") {
    return <Auditor />;
  }  else if (value === "advisor") {
    return <Advisor />;
  }  else if (value === "share") {
    return <Shareholding />;
  } else {
    return <Board />;
  }
}
export default Governancesidebar;
