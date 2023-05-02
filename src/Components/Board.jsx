import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const Board = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus board">
         <div className="heightcontrol">
            <h2>Leading with Integrity: Meet the Board of Directors</h2>
          {data.Board.map((item, index) => (
            <Fragment>
              <div key={index}>
              <h3>{item.title}</h3>
              <ReadMoreReact text={item.boarddesc} min={100} ideal={150}  max={250}  readMoreText="read more" />
              </div>
            </Fragment>
          ))}
        </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Board;
