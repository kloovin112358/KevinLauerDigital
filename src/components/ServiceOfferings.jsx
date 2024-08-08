import React from 'react';
import MinimalistCard from './MinimalistCard';
import StandardCard from './StandardCard';
import MaxCard from './MaxCard';
import { Fade } from 'react-awesome-reveal';

const ServiceOfferings = () => (
  <div className="text-center mt-5 mb-4">
    <Fade duration={2000} triggerOnce={true}>
    <h2 className="fw-bold display-6">My Service Levels</h2>
    <p className="font-monospace fs-4">Pick and choose what you need and what you pay for.</p>
    </Fade>
    <Fade duration={2000} triggerOnce={true}>
    <div className="d-flex flex-wrap justify-content-center mt-5 text-start">
      <MinimalistCard />
      <StandardCard />
      <MaxCard />
    </div>
    </Fade>
  </div>
);

export default ServiceOfferings;
