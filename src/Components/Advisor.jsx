import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const Advisor = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus advisor">
         <div className="heightcontrol">
            <h2>Meet Our Expert Legal Advisory Team</h2>
          {data.Advisor.map((item, index) => (
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
export default Advisor;
