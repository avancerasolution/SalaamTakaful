import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const Flexible = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus flexible">
         <div className="heightcontrol">
            <h2>Unique Product Features </h2>
          {data.Usp3.map((item, index) => (
            <Fragment>
              <div key={index}>
              <h3>{item.title}</h3>
              <ReadMoreReact text={item.overview} min={250} ideal={350}  max={450}  readMoreText="read more" />
              </div>
            </Fragment>
          ))}
        </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Flexible;
