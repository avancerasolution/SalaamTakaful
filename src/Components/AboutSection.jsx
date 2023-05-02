import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const AboutSection = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus">



          {data.About.map((item, index) => (
            <Fragment>
              <div className="heightcontrol" key={index}>
                <div>
              <h3>{item.title}</h3>
              <ReadMoreReact text={item.description} min={100} ideal={150}  max={250}  readMoreText="read more" /></div>

              <h3>Retakaful Arrangements & Partners</h3>
              <ReadMoreReact text={item.ratakfuldesc} min={100} ideal={150}  max={250}  readMoreText="read more" />

              <h3>CEO Message</h3>
              <ReadMoreReact text={item.ceomessage} min={100} ideal={150}  max={250}  readMoreText="read more" />

              <h3>NTN Number and Registration Certificate </h3>
              <ReadMoreReact text={item.ntn} min={100} ideal={150}  max={250}  readMoreText="read more" />
              </div>
              </Fragment>
          ))}

        </div>
      </Fade>
    </React.Fragment>
  );
};
export default AboutSection;
