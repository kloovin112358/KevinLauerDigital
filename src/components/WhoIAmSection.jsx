import React from 'react';
import { Fade } from 'react-awesome-reveal';


const WhoIAmSection = () => {
  return (
    <div className="pb-4 pb-lg-5 fs-4">
      <Fade duration={2000}>
        <h1 className="fw-bold display-4 mt-3 mt-lg-5 beforeSubHeader" id="am">Who I <span className="text-primary">Am</span></h1>
        </Fade>
        <Fade duration={2000}>
        <div className="row">
            <div className="col-0 col-lg-2 d-none d-lg-block">
            <div style={{fontSize:"10rem", lineHeight:"100%"}}><i className="bi bi-chat-dots-fill"></i></div>
            </div>
            <div className="col col-lg-10 lead fs-4 ps-2 ps-lg-5 pt-0 pt-lg-4">
            <p className="fw-bold font-monospace ps-2">
            I'm a 23-year-old self-taught developer based out of Chicago, USA
            </p><hr></hr>
            <ul className="responsive-font-size">
              <li>I taught myself programming between classes my freshman year of college</li>
              <li>At my first internship, I started using that knowledge to automate work tasks I didn't want to do</li>
              <li>I taught myself web development when I wanted to make a video game (<a href="https://github.com/kloovin112358/palabrio">Palabrio</a>)</li>
              <li>Using that knowledge, I landed a job on a small team at Caterpillar that built web apps supporting manufacturing floor operations</li>
              <li>By the end of college I was building enhancements for <a href="https://www.uline.com/">uline.com</a>, which sees over $10M in transactions every day</li>
              <li>During my first full-time job as a tech consultant, I learned how business gets done</li>
              <li>I quit in August 2024 to pursue entrepreneurship</li>
            </ul>
            </div>
            
        </div>
        </Fade>
    </div>
  );
};

export default WhoIAmSection;
