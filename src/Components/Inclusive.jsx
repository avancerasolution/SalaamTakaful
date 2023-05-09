import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const Inclusive = () => {
  const styles = {
    slideContainer: {
      height: 600,
    },
    slide1: {
      minHeight: 600,
    },
    slide2: {
      minHeight: 600,
    },
  };
  return (
    <React.Fragment>
      <Fade bottom>
        <div>
          <div className="section features aboutus inclusive zoominheaderabt">
            <div className="col-sm-12 homepagesec" >
              <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>
                <div className="myheightmin" data-aos="fade-left" data-aos-duration="3000">
                  <h2>Unique Product Features</h2>
                </div>
                {data.Usp7.map((item, index) => (
                  <Fragment>
                    <Fade left>
                      <div key={index} className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h3>{item.title}</h3>
                          <ReadMoreReact text={item.overview} min={150} ideal={280} max={350} readMoreText="read more" />
                        </div>
                      </div>
                    </Fade>
                  </Fragment>
                ))}
              </SwipeableViews>
            </div>

            <button className="btn-scroll"> <i class="fa fa-chevron-circle-up" aria-hidden="true"></i><br />Learn More </button>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Inclusive;
