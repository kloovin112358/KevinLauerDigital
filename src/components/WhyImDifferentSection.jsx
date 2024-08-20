import React from 'react';
import ComparisonTable from './ComparisonTable';
import ServiceLevelCards from './ServiceLevelCards';
import { AttentionSeeker, JackInTheBox } from 'react-awesome-reveal';

const WhyImDifferentSection = () => (
  <div className="pb-5 mt-3 mt-lg-5">
    <AttentionSeeker effect={"pulse"}>
    <div id="differentHeader">
      <h1 className="fw-bold display-4 text-center beforeSubHeader" id="different">Why I'm <span className="text-primary">Different</span> (from other firms)</h1>
    </div>
    </AttentionSeeker>
    <JackInTheBox>
      <ComparisonTable />
    </JackInTheBox>
    <ServiceLevelCards />
  </div>
);

export default WhyImDifferentSection;
