import React from 'react';
import PastProjectsGrid from './PastProjectsGrid';
import TechnologySummary from './TechnologySummary';
import ProfessionalHistory from './ProfessionalHistory';
import { Fade, AttentionSeeker } from 'react-awesome-reveal';

const WhatIveDoneSection = () => {
  return (
    <div className="pb-3 mt-3 mt-lg-5">
      <AttentionSeeker effect={"pulse"}>
      <h1 className="fw-bold display-4 text-center beforeSubHeader" id="done">What I've <span className="text-primary">Done</span></h1>
      </AttentionSeeker>
      <div>
        <Fade duration={1500} triggerOnce={true}>
          <PastProjectsGrid />
        </Fade>
        <TechnologySummary />
        <ProfessionalHistory />
      </div>
    </div>
  );
};

export default WhatIveDoneSection;
