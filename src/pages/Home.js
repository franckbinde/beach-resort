import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

const Home = () => {
  return (
    <>
      <Fade>
        <Hero>
          <Zoom left delay={500} duration={1500}>
            <Banner
              title="luxurious rooms"
              subtitle="deluxe rooms starting at $299"
            >
              <Link to="/rooms" className="btn-primary">
                our rooms
              </Link>
            </Banner>
          </Zoom>
        </Hero>
      </Fade>
      <Slide right>
        <Services />
      </Slide>
      <Flip left>
        <FeaturedRooms />
      </Flip>
    </>
  );
};

export default Home;
