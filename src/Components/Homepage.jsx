import React, { Fragment } from 'react'
import Fade from "react-reveal/Fade";
import data from "../Data";
import ReadMoreReact from "read-more-react";

export default function Homepage() {
  return (
   
    <Fragment>
        <Fade left>
        
        <div className='container'>
            <div className='row'>
            {data.Homep.map((item, index) => (
                <div className='col-sm-12 homepagesec'>
                    <h2>{item.title}</h2>
                    {/* <p></p> */}
                    <ReadMoreReact text={item.desc} min={180} ideal={200}  max={270}  readMoreText="read more" />
                </div>
              ))}
            </div>
        </div>
        
        </Fade>
    </Fragment>
   
  )
}
