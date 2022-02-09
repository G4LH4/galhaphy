import React from "react";
import arrowIcon from "../img/arrowhead-up.png";
import MotionBtn from "./MotionBtn";

const FooterText = () => {
  return (
    <h6 className="float-left">
      Created with ♥ by
      <a href="https://github.com/G4LH4" target="_BLANK" rel="noreferrer">
        {" "}
        G4LH4
      </a>
    </h6>
  );
};

const Footer = () => {
  return (
    <div id="footer" className="flex items-center justify-center mt-10 ">
      <div>
        <FooterText />

        <MotionBtn
          addClass={"w-1/12 float-right"}
          title={<img src={arrowIcon} alt="go-top" className="w-2/3 mx-auto" />}
          fn={handleClick}
        />
      </div>
    </div>
  );
};

const handleClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export default Footer;
