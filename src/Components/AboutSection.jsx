import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';
import Aboutbg from "../assets/aboutbg.jpeg"

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

        <div>
          <div className="section features aboutus zoominheaderabt zoom-in-zoom-out" data-aos="fade-left" data-aos-duration="2000" style={{ backgroundImage: `url(${Aboutbg})` }}>

            {data.About.map((item, index) => (
              <Fragment>
                <div className="col-sm-12 homepagesec" key={index}>
                  <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer}>

                    <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)} data-aos="fade-left" data-aos-duration="3000">
                      <div className="designtitle" data-aos="fade-left" data-aos-duration="3000">
                        <h3 >{item.title}</h3>
                        
                      </div>
                    </div>

                    <Fade left>
                      <div className='myheading' style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div className="designtitle">
                        <ReadMoreReact text={item.description} min={300} ideal={380} max={450} readMoreText="read more" />
                        </div>
                      </div>
                    </Fade>


                  </SwipeableViews>
                </div>
              </Fragment>

            ))}

            <p className="learn"></p>
          </div>
        </div>

    </React.Fragment>
  );
};
export default AboutSection;



