import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

export default function AboutEsgs() {
  return (
    <React.Fragment>
    <Fade bottom>
      <div className="section features coc">

        {data.Coc.map((item, index) => (
          <Fragment>
            <div className="heightcontrol" key={index}>
            
            <h2>{item.title}</h2>
            <ReadMoreReact text={item.cocdesc} min={290} ideal={300}  max={400}  readMoreText="read more" />

            </div>
            </Fragment>
        ))}

      </div>
    </Fade>
  </React.Fragment>
  )
}
