import React from 'react';
import ComparisonTable from './ComparisonTable';
import ServiceLevelCards from './ServiceLevelCards';
import { AttentionSeeker, Zoom } from 'react-awesome-reveal';
import { useAnimation } from '../AnimationContext'; // Use the animation context

const WhyImDifferentSection = () => {
  const isXlScreen = useAnimation();
  return (
    <div className="pb-5 mt-3 mt-lg-5">
      {isXlScreen ? (
      <AttentionSeeker effect={"pulse"}>
        <div id="differentHeader">
          <h1 className="fw-bold display-4 text-center beforeSubHeader" id="different">Why I'm <span className="text-primary">Different</span> (from other firms)</h1>
        </div>
      </AttentionSeeker>) : (
        <div id="differentHeader">
          <h1 className="fw-bold display-4 text-center beforeSubHeader" id="different">Why I'm <span className="text-primary">Different</span> (from other firms)</h1>
        </div>
      )}
      {isXlScreen ? (
      <Zoom>
        <ComparisonTable />
      </Zoom>) : (
        <ComparisonTable />
      )}
      <ServiceLevelCards />
    </div>
  )
  
};

export default WhyImDifferentSection;
