import React, { Fragment } from 'react'
import Typewriter from 'typewriter-effect';
import Logo from "../assets/PdYUvU.png";

export default function Loader() {
  return (
    <Fragment>
        <div className='container-fluid'>
            <div className='row preloader'>
            <div className='imagepre col-sm-12 ' ><img src={Logo}  data-aos="fade-down" data-aos-duration="2000" />
            <div data-aos="fade-down" data-aos-duration="2000">
            {<Typewriter options={{ strings: ['Welcome to Takaful World'], autoStart: true, loop: true,delay: 75, }} />}
            </div>
            </div>
            </div>
        </div>
    </Fragment>
  )
}