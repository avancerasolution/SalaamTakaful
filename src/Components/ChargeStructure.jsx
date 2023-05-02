import React from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Fragment } from "react";

const Charge = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features aboutus charge">
         <div className="heightcontrol">
            <h2>Charge Structure    </h2>
          {data.Charge.map((item, index) => (
            <Fragment>
              <div key={index}>
              <h3>{item.title}</h3>
              <ul>
              { item.point1 ? <li>{item.point1}</li> : <></> }
              </ul>
              <table>
                <thead>
                    <tr>
                        <th>Fund Name</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.fund1}</td>
                        <td>{item.charges1}</td>
                    </tr>
                    <tr>
                        <td>{item.fund2}</td>
                        <td>{item.charges2}</td>
                    </tr>
                </tbody>
              </table>

              <ul>
              { item.point2 ? <li>{item.point2}</li> : <></> }
              </ul>
              <table>
                <thead>
                    <tr>
                        <th>Membership Year</th>
                        <th>TMC Charge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.membership1}</td>
                        <td>{item.tmc1}</td>
                    </tr>
                    <tr>
                        <td>{item.membership2}</td>
                        <td>{item.tmc2}</td>
                    </tr>
                    <tr>
                        <td>{item.membership3}</td>
                        <td>{item.tmc3}</td>
                    </tr>
                    <tr>
                        <td>{item.membership4}</td>
                        <td>{item.tmc4}</td>
                    </tr>
                    <tr>
                        <td>{item.membership5}</td>
                        <td>{item.tmc5}</td>
                    </tr>
                    <tr>
                        <td>{item.membership6}</td>
                        <td>{item.tmc6}</td>
                    </tr>
                    <tr>
                        <td>{item.membership7}</td>
                        <td>{item.tmc7}</td>
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
export default Charge;
