import React from "react";
import Footer from "../Common/Footer";
import Header from "../Components/AboutHeader";
import SideBar from "../Components/SideBarAbout";
import Fade from "react-reveal/Fade";
import MobileMenu from "../Common/MobileMenu";
import { useState } from "react";

const About = () => {
  const [show, setshow] = useState(false);

  return (
    <React.Fragment>
      {show ? (
        <MobileMenu show={show} setshow={setshow} />
      ) : (
        <>
          <Fade right duration={1000}>
            <div className=" AboutSection">
              <Header show={show} setshow={setshow} />
              <div className="d-flex justify-content-between">
                <SideBar />
              </div>
              <Footer />
            </div>
          </Fade>
        </>
      )}
    </React.Fragment>
  );
};
export default About;
