import React, { useEffect, useState } from "react";
import {
  Hero,
  Client,
  Benefits,
  Features,
  Testimonial,
  WorkSample,
  Pricing,
  Faq,
  Platform,
} from "../components/index";
import Cta from "../components/Home/Cta";
import { HeroImg } from "../assets";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import Cookie from "../components/Cookie";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Show popup when component mounts (simulate user arrival)
    setShowPopup(true);
  }, []);

  return (
    <div className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
      <div className=" text-center ">
        Any kind of academic use is prohibited
      </div>
      <Hero
        subheading={"Welcome to craftessay"}
        heading={"Unlock Effortless Essay Writing"}
        description={
          "Need help with your writing? Our customized essays are crafted to fit your unique needs—stress-free and on time."
        }
        buttontext={"Let`s connect"}
        buttonURL={"/order"}
      />
      <Popup handleClose={handleClosePopup} show={showPopup} />
      <Client />
      <Platform />
      <WorkSample />
      <Features />
      {/* <Benefits /> */}
      <Pricing />
      <Testimonial />
      <Faq />
      <Cta />
    </div>
  );
}

export default Home;
