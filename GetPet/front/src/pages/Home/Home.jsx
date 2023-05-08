import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import Intro from "./Intro/Intro";
import FindFriend from "./FindFriend/FindFriend";
import AdoptToday from "./AdoptToday/AdoptToday";
import HowItWorks from "./HowWorks/HowItWorks";
import CardGroup from "./Cards/CardGroup";
import Footer from "./Footer/Footer";

import './Home.css'

const Home = () => {
  return (
    <div className="fw-bold" style={{overflowX: 'hidden'}}>
      <NavbarComponent>
        <div className='mt-5'>
          <section
            style={{
              height: "100%",
              backgroundColor: "#E2955C",
              minHeight: 500,
            }}
            className="shadow-sm rounded-bottom"
          >
            <div className="text-white">
              <Intro></Intro>
            </div>
          </section>

          <section
            style={{
              height: "100%",
              backgroundColor: "white",
              minHeight: 200,
            }}
          >
            <div className="text-dark">
              <FindFriend></FindFriend>
            </div>
          </section>

          <section
            style={{
              height: "100%",
              minHeight: 400,
            }}
            className="bg-light shadow-sm border-top"
          >
            <div className="text-dark">
              <AdoptToday></AdoptToday>
            </div>
          </section>

          <section
            style={{
              height: "100%",
              minHeight: 400,
            }}
            className="mb-3"
          >
            <div className="text-dark shadow-sm">
              <HowItWorks></HowItWorks>
            </div>
          </section>

          <section
            style={{
              height: "100%",
              minHeight: 400,
            }}
            className="mb-5"
          >
            <div className="text-dark">
              <CardGroup></CardGroup>
            </div>
          </section>
        </div>
        <footer
          className="shadow border-top rounded-top smallFooter"
          style={{
            maxHeight: 500,
            minHeight: 250,
            maxWidth: '100%',
            backgroundColor: "grey",
            overflow: "hidden",
          }}
        >
          <Footer></Footer>
        </footer>
      </NavbarComponent>
    </div>
  );
};

export default Home;
