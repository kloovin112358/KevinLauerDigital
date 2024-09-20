import React from 'react';
import { Bounce, Zoom } from 'react-awesome-reveal';
import ProfessionalHistoryTimeline from './ProfessionalHistoryTimeline';
import { useAnimation } from '../AnimationContext'; // Use the animation context


const ProfessionalHistory = () => {
  const isXlScreen = useAnimation();

  return (
    <>
    {isXlScreen ? (
    <Bounce>
        <div className="text-center mt-5">
          <h2 className="fw-bold display-6 beforeSubHeader">Professional History</h2>
          <p className="font-monospace fs-4">View the full details on <a href="https://www.linkedin.com/in/ktlauer/">LinkedIn</a>.</p>
        </div>
        </Bounce>) :(
          <div className="text-center mt-5">
          <h2 className="fw-bold display-6 beforeSubHeader">Professional History</h2>
          <p className="font-monospace fs-4">View the full details on <a href="https://www.linkedin.com/in/ktlauer/">LinkedIn</a>.</p>
        </div>
        )}
        {isXlScreen ? (
        <Zoom>
          <ProfessionalHistoryTimeline />
        </Zoom>) : (
          <ProfessionalHistoryTimeline />
        )}
    </>
  );
};

export default ProfessionalHistory;
