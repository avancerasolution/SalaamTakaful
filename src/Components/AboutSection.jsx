import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';

const AboutSection = () => {
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
          <div className="section features aboutus zoominheaderabt" data-aos="fade-left" data-aos-duration="3000">



            {data.About.map((item, index) => (
              <Fragment>
                <div className="col-sm-12 homepagesec" key={index}>
                  <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>

                    <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)} data-aos="fade-left" data-aos-duration="3000">
                      <div className="designtitle" data-aos="fade-left" data-aos-duration="3000">
                        <h3 >{item.title}</h3>
                        <ReadMoreReact text={item.description} min={150} ideal={280} max={350} readMoreText="read more" />
                      </div>
                    </div>

                    <Fade right>
                      <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h3>Retakaful Arrangements & Partners</h3>
                          <ReadMoreReact text={item.ratakfuldesc} min={250} ideal={380} max={450} readMoreText="read more" />
                        </div>
                      </div>
                    </Fade>

                    <Fade left>
                      <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)} >
                        <div className="designtitle">
                          <h3>CEO Message</h3>
                          <ReadMoreReact text={item.ceomessage} min={250} ideal={380} max={450} readMoreText="read more" />
                        </div>
                      </div>
                    </Fade>

                    <Fade right>
                      <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                          <h3>NTN Number and Registration Certificate </h3>
                          <ReadMoreReact text={item.ntn} min={250} ideal={380} max={450} readMoreText="read more" />
                        </div>
                      </div>
                    </Fade>

                  </SwipeableViews>
                </div>
              </Fragment>

            ))}

            <button className="btn-scroll"> <i class="fa fa-chevron-circle-up" aria-hidden="true"></i><br />Learn More </button>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default AboutSection;



