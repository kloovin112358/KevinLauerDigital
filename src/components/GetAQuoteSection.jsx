import React from 'react';

const GetAQuoteSection = () => {
  return (
    <div className="mt-3 mt-lg-5" id="getAQuoteSection">

        <h1 className="fw-bold display-4 beforeSubHeader" id="quote">Get a <span className="text-primary">Quote</span></h1>

        <div className="fs-3 font-monospace mt-2 mt-lg-3">

          <span>Send me an email with your project details to <a href="mailto:ktlauer@proton.me?subject=Software Development Work Inquiry" target="_blank" rel="noreferrer">ktlauer@proton.me</a> and 
          I'll provide you with a price and time estimate within 24 hours.<br></br></span>

        </div>
    </div>
  );
};

export default GetAQuoteSection;
