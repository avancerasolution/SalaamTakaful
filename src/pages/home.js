import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import SideBar from "../Common/SideBar";
import LeftSideBar from "../Common/LeftSideBar";
import { useState } from "react";
import MobileMenu from "../Common/MobileMenu";
import Homepage from "../Components/Homepage";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [show, setshow] = useState(false);
  return (
    <React.Fragment>
<Fade right duration={1000}>
      {show ? <MobileMenu show={show} setshow={setshow} /> : <>


        <Header show={show} setshow={setshow} />
        <div className="container-fluid main">

          <SideBar />
          <Homepage/>
          <LeftSideBar />
<Footer />

        </div>
   


      </>
      }
</Fade>
    </React.Fragment>
  )
}
export default Home