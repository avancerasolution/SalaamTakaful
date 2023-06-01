import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import ReadMoreReact from "read-more-react";
import Homebg from "../assets/homebg.jpg";

import SwipeableViews from "react-swipeable-views";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";


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
export default function Homepage({ setshow }) {

  return (
    <Fragment>
      <Fade left>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 homepagesec">
              <div
                className="myheading main1 zoominheader "
               
              >



<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                  
                  {data.Homepage.map((item, index) => (
                    <SwiperSlide className="zoom-in-zoom-out">
                      <div style={{ backgroundImage: `url(${Homebg})` }} className="mainslider "> 

                      <SwipeableViews enableMouseEvents axis="y" containerStyle={styles.slideContainer} >
                        <div style={Object.assign({}, styles.slide, styles.slide1)} key={index} className="hometext" >
                          <Fade left>
                            <h2>{item.title}</h2>
                          </Fade>
                        </div>
                        <div style={Object.assign({}, styles.slide, styles.slide1)} className="hometext" >
                          <Fade left>
                            <div className="designtitle">
                              <ReadMoreReact text={item.description} min={350} ideal={400} max={550} readMoreText="read more" />
                            </div>
                          </Fade>
                        </div>
                      </SwipeableViews>


                      </div>

                      </SwiperSlide>

                  ))}
                  
              </Swiper>



              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Fragment>


  );
}
