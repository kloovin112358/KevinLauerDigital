import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useAnimation } from '../AnimationContext'; // Use the animation context
import WhoIAmDescription from './WhoIAmDescription';

const WhoIAmSection = () => {
  const isXlScreen = useAnimation();
  return (
    <div className="pb-4 pb-lg-5 fs-4">
      {isXlScreen ? (
      <Fade duration={2000}>
        <h1 className="fw-bold display-4 mt-3 mt-lg-5 beforeSubHeader" id="am">Who I <span className="text-primary">Am</span></h1>
        </Fade>) :(
          <h1 className="fw-bold display-4 mt-3 mt-lg-5 beforeSubHeader" id="am">Who I <span className="text-primary">Am</span></h1>
        )}
        {isXlScreen ? (
        <Fade duration={2000}>
        <WhoIAmDescription />
        </Fade>) :(
          <WhoIAmDescription />
        )}
    </div>
  );
};

export default WhoIAmSection;
