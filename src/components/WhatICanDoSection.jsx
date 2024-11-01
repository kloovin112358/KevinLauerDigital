import React from 'react';
import WhatICanDoCard from './WhatICanDoCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Zoom, AttentionSeeker } from 'react-awesome-reveal';
import HowYourProjectCouldLook from './HowYourProjectCouldLook';
import { useAnimation } from '../AnimationContext'; // Use the animation context

function WhatICanDoSection() {
  const isXlScreen = useAnimation();
  return (
    <div className="pb-5">
    {isXlScreen ? (
      <AttentionSeeker effect={"pulse"}>
        <h1 className="fw-bold display-4 text-center" id="do">What I Can <span className="text-primary">Do</span> (for you)</h1>
      </AttentionSeeker>) : (
      <h1 className="fw-bold display-4 text-center" id="do">What I Can <span className="text-primary">Do</span> (for you)</h1>
    )}
    <div className="mt-3 mt-lg-4 d-flex justify-content-center flex-wrap">
      <WhatICanDoCard 
        icon="bi-window" 
        title="Full-Stack Web Development" 
        description="Complex web apps, static websites, I've got you. Built from scratch or changes to existing sites." 
        animationType="Slide"
        animationDirection="left"
      />
      <WhatICanDoCard 
        icon="bi-mouse3" 
        title="Process Automation" 
        description="Tools to make your life less annoying, like scripts, macros, and RPA."
        animationType="Zoom"
        animationDirection="up" 
      />
      <WhatICanDoCard 
        icon="bi-braces" 
        title="Miscellaneous" 
        description="Other digital projects you might have. I might not have the necessary experience, but feel free to ask!"
        animationType="Slide"
        animationDirection="right" 
      />
    </div>
    {isXlScreen ? (
    <Zoom duration={500}>
    <div className="text-center mt-5 mb-4">
      <h2 className="fw-bold display-6 beforeSubHeader">How Your Project Could Look</h2>
      <p className="font-monospace fs-4">Click the tabs below for samples.</p>
    </div>
    </Zoom>) : (
      <div className="text-center mt-5 mb-4">
      <h2 className="fw-bold display-6 beforeSubHeader">How Your Project Could Look</h2>
      <p className="font-monospace fs-4">Click the tabs below for samples.</p>
    </div>
    )}
    {isXlScreen ? (
    <Zoom duration={1000}>
      <HowYourProjectCouldLook />
    </Zoom>) : (
      <HowYourProjectCouldLook />
    )}
  </div>
  )
}

export default WhatICanDoSection;