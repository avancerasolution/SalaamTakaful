import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const AboutEsg = () => {
  return (
    <React.Fragment>
    <Fade bottom>
      <div className="section features shariah">



        {data.Shariah.map((item, index) => (
          <Fragment>
            <div className="heightcontrol" key={index}>
            
            <h2>{item.title}</h2>

            <h3>{item.mufti}</h3>
            <ReadMoreReact text={item.advice} min={290} ideal={300}  max={400}  readMoreText="read more" />

            </div>
            </Fragment>
        ))}

      </div>
    </Fade>
  </React.Fragment>
  );
};

export default AboutEsg;
