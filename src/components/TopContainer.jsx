import React from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopContainer = () => (
  <div className="topContainer d-none d-xl-block" style={{ paddingTop: '5rem' }}>
    <div className="pb-5 pt-3">
      <div className="display-one-half font-monospace">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("I'm a freelance software developer who does business like a good car mechanic.")
              .pauseFor(1000)
              .changeDelay(65)
              .typeString(' My name is <strong>Kevin Lauer</strong>.')
              .start();
          }}
          options={{
            delay: 30,
            deleteSpeed: 20
          }}
        />
        <Fade delay={7000} duration={2500} triggerOnce={true}>
          <p className="display-5 pt-3 mx-auto"><i className="bi bi-arrow-down-square" style={{ fontSize: "7rem" }}></i></p>
        </Fade>
      </div>
    </div>
  </div>
);

export default TopContainer;
