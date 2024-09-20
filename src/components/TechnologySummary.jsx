import React from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import { useAnimation } from '../AnimationContext'; // Use the animation context
import TechnologySummaryAccordion from './TechnologySummaryAccordion';

const TechnologySummary = () => {
    const isXlScreen = useAnimation();
  return (
    <>
    {isXlScreen ? (
        <JackInTheBox>
        <div className="text-center mt-5 mb-3">
            <h2 className="fw-bold display-6 beforeSubHeader">Technology Summary</h2>
            <p className="font-monospace fs-4">Click the rows below to expand.</p>
        </div>
        </JackInTheBox>) :(
            <div className="text-center mt-5 mb-3">
            <h2 className="fw-bold display-6 beforeSubHeader">Technology Summary</h2>
            <p className="font-monospace fs-4">Click the rows below to expand.</p>
        </div>
        )}
        {isXlScreen ? (
        <JackInTheBox>
            <TechnologySummaryAccordion />
        </JackInTheBox>) :(
            <TechnologySummaryAccordion />
        )}
    </>
  );
};

export default TechnologySummary;
