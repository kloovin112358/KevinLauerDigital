import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ComparisonTable from './ComparisonTable';
import ServiceLevelCards from './ServiceLevelCards';

const WhyImDifferentSection = () => (
  <div className="pb-5 mt-3 mt-lg-5">
    <div className="mb-3">
      <h1 className="fw-bold display-4 text-center" id="different">Why I'm <span className="text-primary">Different</span> (from other firms)</h1>
      <Fade duration={2000} triggerOnce={true}>
      <div className="mt-4 text-center">
        <h2 className="fw-bold display-6">Quality work, transparent prices, quick turnaround.</h2>
        <p className="font-monospace fs-4">It's not that complicated.</p>
      </div></Fade>
    </div>
    <ComparisonTable />
    <ServiceLevelCards />
  </div>
);

export default WhyImDifferentSection;
