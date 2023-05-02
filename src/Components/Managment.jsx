import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const Managment = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus managment">
         <div className="heightcontrol">
            <h2>Meet the Minds at the Helm: Introducing Our Management Committee</h2>
          {data.Managment.map((item, index) => (
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
export default Managment;
