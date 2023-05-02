import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";

const Suplimentary = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus suplimentary">
         <div className="heightcontrol">
            <h2>Supplementary Riders   </h2>
          {data.Supplimentry.map((item, index) => (
            <Fragment>
              <div key={index}>
              <h3>{item.title}</h3>
              <ul>
              { item.point1 ? <li>{item.point1}</li> : <></> }
              { item.point2 ? <li>{item.point2}</li> : <></> }
              { item.point3 ? <li>{item.point3}</li> : <></> }
              { item.point4 ? <li>{item.point4}</li> : <></> }
              { item.point5 ? <li>{item.point5}</li> : <></> }
              { item.point6 ? <li>{item.point6}</li> : <></> }
              { item.point7 ? <li>{item.point7}</li> : <></> }
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
export default Suplimentary;
