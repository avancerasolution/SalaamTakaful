import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const Auditor = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus auditor">
         <div className="heightcontrol">
            <h2>Keeping Finances in Check: Get to Know Our Meticulous Auditing Team</h2>
          {data.Auditor.map((item, index) => (
            <Fragment>
              <div key={index}>
              <h3>{item.title}</h3>
              <ReadMoreReact text={item.mangdesc} min={100} ideal={150}  max={250}  readMoreText="read more" />
              </div>
            </Fragment>
          ))}
        </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Auditor;
