import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const AboutArrange = () => {
  return (
    <React.Fragment>
    <Fade bottom>
      <div className="section features details">



        {data.Companydetail.map((item, index) => (
          <Fragment>
            <div className="heightcontrol" key={index}>
            
            <h2>{item.title}</h2>

            <h3>Vision</h3>
            <ReadMoreReact text={item.vision} min={100} ideal={150}  max={250}  readMoreText="read more" />

            <h3>Mission</h3>
            <ReadMoreReact text={item.mission} min={100} ideal={150}  max={250}  readMoreText="read more" />

            <h3>Core Values </h3>
            <ReadMoreReact text={item.core} min={100} ideal={150}  max={250}  readMoreText="read more" />
            </div>
            </Fragment>
        ))}

      </div>
    </Fade>
  </React.Fragment>
  );
};

export default AboutArrange;
