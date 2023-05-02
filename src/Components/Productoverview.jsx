import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const Supercharge = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus supercharge">
         <div className="heightcontrol">
            <h2>An Overview of Our Takaful Plan </h2>
          {data.Productoverview.map((item, index) => (
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
export default Supercharge;
