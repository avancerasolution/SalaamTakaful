import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";

import Homebg from "../assets/homebg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Typewriter from "typewriter-effect";
import Header from "./AboutHeader";

export default function Homepage({ setshow }) {
  return (
    <Fragment>
      <Fade left>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 homepagesec">
              <div
                className="myheading main1 zoominheader"
                style={{ backgroundImage: `url(${Homebg})` }}
              >
                <Header setshow={setshow} />
                <div className="zindex">
                  <Fade left>
                    <h2>WELCOME TO SALAAM LIFE & SAVING</h2>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}
