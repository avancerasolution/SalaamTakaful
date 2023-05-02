import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";

const Investment = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus investment">
         <div className="heightcontrol">
            <h2>Investment Management   </h2>
          {data.Investment.map((item, index) => (
            <Fragment>
              <div key={index}>
              <h3>{item.title}</h3>
              <ul>
              { item.point1 ? <li>{item.point1}</li> : <></> }
              { item.point2 ? <li>{item.point2}</li> : <></> }
              { item.point3 ? <li>{item.point3}</li> : <></> }
              </ul>
              <table>
                <thead>
                    <tr>
                        <th>Factors</th>
                        <th>Conservative</th>
                        <th>Balanced</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.Factors}</td>
                        <td>{item.conservative}</td>
                        <td>{item.balance}</td>
                    </tr>
                    <tr>
                        <td>{item.Factors1}</td>
                        <td>{item.conservative1}</td>
                        <td>{item.balance1}</td>
                    </tr>
                </tbody>
              </table>
              </div>
            </Fragment>
          ))}
        </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Investment;
