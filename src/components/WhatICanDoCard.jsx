import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide, Zoom } from 'react-awesome-reveal';
import { useAnimation } from '../AnimationContext'; // Use the animation context

const WhatICanDoCard = ({ icon, title, description, animationType, animationDirection }) => {
  const isXlScreen = useAnimation();
  // Select the appropriate animation component based on the animationType prop
  const AnimationComponent = ({ children }) => {
    if (!isXlScreen) {
      return <>{children}</>
    }
    switch (animationType) {
      case 'Slide':
        return <Slide direction={animationDirection}>{children}</Slide>;
      case 'Zoom':
      default:
        return <Zoom>{children}</Zoom>;
    }
  };

  return (
    <div className="me-0 me-md-2 my-1">
      <AnimationComponent>
        <div className="card shadow-lg border border-primary whatICanDoCard">
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <i className={`bi ${icon} display-1 fw-bold`} style={{ fontSize: "10em" }}></i>
            </div>
            <p className="fw-bold text-center text-primary h4">{title}</p>
            <p className="text-center"><i>{description}</i></p>
          </div>
        </div>
      </AnimationComponent>
    </div>
  );
};

export default WhatICanDoCard;
