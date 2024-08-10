import React from 'react';
import ComparisonTable from './ComparisonTable';
import ServiceLevelCards from './ServiceLevelCards';

const WhyImDifferentSection = () => (
  <div className="pb-5 mt-3 mt-lg-5">
    <div id="differentHeader">
      <h1 className="fw-bold display-4 text-center" id="different">Why I'm <span className="text-primary">Different</span> (from other firms)</h1>

    </div>
    <ComparisonTable />
    <ServiceLevelCards />
  </div>
);

export default WhyImDifferentSection;
