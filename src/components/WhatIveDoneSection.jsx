import React from 'react';
import PastProjectsGrid from './PastProjectsGrid';
import TechnologySummary from './TechnologySummary';
import ProfessionalHistory from './ProfessionalHistory';
import { Fade } from 'react-awesome-reveal';

const WhatIveDoneSection = () => {
  return (
    <div className="pb-3 mt-3 mt-lg-5">
      <h1 className="fw-bold display-4 text-center" id="done">What I've <span className="text-primary">Done</span></h1>
      <div>
      <Fade duration={2000} triggerOnce={true}>
        <div className="text-center mt-3 mt-lg-4 mb-2">
          <h2 className="fw-bold display-6">Past (non-work) Projects</h2>
          <p className="font-monospace fs-4">Or view my full portfolio on <a href="https://github.com/kloovin112358">GitHub</a>.</p>
        </div>
        </Fade>
        <Fade duration={2000} triggerOnce={true}>
          <PastProjectsGrid />
        </Fade>
        <TechnologySummary />
        <ProfessionalHistory />
      </div>
    </div>
  );
};

export default WhatIveDoneSection;