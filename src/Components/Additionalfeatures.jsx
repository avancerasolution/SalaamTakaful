import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";

const Additional = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus additoinal">
         <div className="heightcontrol">
            <h2>Additional Features  </h2>
          {data.Additionafeature.map((item, index) => (
            <Fragment>
              <div key={index}>
              <h3>{item.title}</h3>
              <ul>
              { item.point1 ? <li>{item.point1}</li> : <></> }
              { item.point2 ? <li>{item.point2}</li> : <></> }
              { item.point3 ? <li>{item.point3}</li> : <></> }
              </ul>
              </div>
            </Fragment>
          ))}
        </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Additional;
