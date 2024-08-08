import React from 'react';
import DifferentHeader from './DifferentHeader';
import ComparisonTable from './ComparisonTable';
import ServiceOfferings from './ServiceOfferings';

const DifferentSection = () => (
  <div id="different" className="pb-5 mt-3 mt-lg-5">
    <DifferentHeader />
    <ComparisonTable />
    <ServiceOfferings />
  </div>
);

export default DifferentSection;
