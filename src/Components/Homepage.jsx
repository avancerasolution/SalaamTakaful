import React, { Fragment } from 'react'
import Fade from "react-reveal/Fade";
import data from "../Data";
import ReadMoreReact from "read-more-react";


export default function Homepage() {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
   
    <Fragment>
        <Fade left>
        
        <div className='container'>
            <div className='row'>
            {data.Homep.map((item, index) => (
                <div className='col-sm-12 homepagesec'>
                  <div className='hassandiv'>
                    <div>
                    <h2>{item.title}</h2>
                    <button className="btn-scroll" onClick={handleClickScroll}> Read More </button>
                  </div> 
                </div> 

                  <div className='hassanhome'>
                    <div id="section-1" ><ReadMoreReact text={item.desc} min={220} ideal={250}  max={320}  readMoreText="read more" /> 1</div>
                  </div>

                </div>
              ))}
            </div>
        </div>
        
        </Fade>
    </Fragment>
   
  )
}
