import React from 'react';
import MinimalistCard from './MinimalistCard';
import StandardCard from './StandardCard';
import MaxCard from './MaxCard';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const ServiceLevelCards = () => (
  <div className="text-center mt-5 mb-3">
    <Slide>
      <h2 className="fw-bold display-6 beforeSubHeader">My Service Levels</h2>
      <p className="font-monospace fs-4">Pick and choose what you need and what you pay for.</p>
    </Slide>
    <div className="d-flex flex-wrap justify-content-center mt-4 text-start">
      <Zoom cascade damping={0.35}> 
        <MinimalistCard />
        <StandardCard />
        <MaxCard />
      </Zoom>
    </div>
  </div>
);

export default ServiceLevelCards;
