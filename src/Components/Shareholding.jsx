import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";

const Shareholding = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus shareholding">
         <div className="heightcontrol">
            <h2>The People Behind the Shares: Key Players in Our Company's Shareholding Pattern</h2>
          
            <Fragment>
              <table>
                <thead>
                    <tr>
                        <th>Shareholders </th>
                        <th>% of Shareholding</th>
                    </tr>
                </thead>
                <tbody>
                {data.Share.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.percent}%</td>
                    </tr>
                 ))}
                </tbody>
              </table>
            </Fragment>
        
        </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Shareholding;
