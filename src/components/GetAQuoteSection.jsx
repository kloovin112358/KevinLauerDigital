import React from 'react';
import {Fade } from "react-awesome-reveal";

const GetAQuoteSection = () => {
  return (
    <div className="mt-3 mt-lg-5" id="getAQuoteSection">
        <h1 className="fw-bold display-4" id="quote">Get a <span className="text-primary">Quote</span></h1>
        <div className="fs-3 font-monospace mt-2 mt-lg-3">
          <Fade triggerOnce={true} duration={2000}>
          <span>Send me an email with your project details to <a href="mailto:ktlauer@proton.me?subject=Software Development Work Inquiry" target="_blank" rel="noreferrer">ktlauer@proton.me</a> and 
          I'll send you a price and time estimate within 24 hours.<br></br></span>
        </Fade>
        </div>
    </div>
  );
};

export default GetAQuoteSection;
