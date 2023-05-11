import React, { Fragment } from 'react'
import Fade from "react-reveal/Fade";
import data from "../Data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Typewriter from 'typewriter-effect';


export default function Homepage() {

  return (

    <Fragment>
      <Fade left>

        <div className='container'>
          <div className='row'>

            <div className='col-sm-12 homepagesec'>

              <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                {data.Homep.map((item, index) => (
                  <SwiperSlide>
                    <div className='myheading main1 zoominheader' style={{ backgroundImage: `url(${item.image})` }}>
                      {/* <h2 >{item.title}</h2> */}
                      <div className='zindex'>
                        <Fade left>
                      {<Typewriter options={{ strings: item.title, autoStart: true, loop: true, delay: 75, }} />}
                      </Fade>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>

            </div>
          </div>
        </div>
      </Fade>
    </Fragment>

  )
}
