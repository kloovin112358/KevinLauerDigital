import React from 'react';
import { Fade } from 'react-awesome-reveal';


const DifferentHeader = () => (
  <div className="">
    <h1 className="fw-bold display-4 text-center">Why I'm <span className="text-primary">Different</span> (from other firms)</h1>
    <Fade duration={2000} triggerOnce={true}>
    <div className="mt-5 text-center">
      <h2 className="fw-bold display-6">Quality work, transparent prices, quick turnaround.</h2>
      <p className="font-monospace fs-4">It's not that complicated.</p>
    </div></Fade>
  </div>
);

export default DifferentHeader;