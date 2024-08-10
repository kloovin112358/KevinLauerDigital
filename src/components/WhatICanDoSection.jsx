import React from 'react';
import WhatICanDoCard from './WhatICanDoCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from 'react-awesome-reveal';
import HowYourProjectCouldLook from './HowYourProjectCouldLook';

function WhatICanDoSection() {
  return (
    <div className="pb-5">
    <h1 className="fw-bold display-4 text-center" id="do">What I Can <span className="text-primary">Do</span> (for you)</h1>
    <div className="d-none d-lg-block">
      <Fade duration={2000} triggerOnce={true}>
        <div className="row mt-2 mt-lg-3">
          <WhatICanDoCard 
            icon="bi-window" 
            title="Full-Stack Web Development" 
            description="Complex web apps, static websites, I've got you. Built from scratch or changes to existing sites." 
          />
          <WhatICanDoCard 
            icon="bi-mouse3" 
            title="Process Automation" 
            description="Tools to make your life less annoying, like scripts, macros, and RPA." 
          />
          <WhatICanDoCard 
            icon="bi-braces" 
            title="Miscellaneous" 
            description="Other digital projects you might have. I might not have the necessary experience, but feel free to ask!" 
          />
        </div>
      </Fade>
    </div>
    <div className="d-block d-lg-none">
      <div className="row mt-2 mt-lg-3">
        <WhatICanDoCard 
          icon="bi-window" 
          title="Full-Stack Web Development" 
          description="Complex web apps, static websites, I've got you. Built from scratch or changes to existing sites." 
        />
        <WhatICanDoCard 
          icon="bi-mouse3" 
          title="Process Automation" 
          description="Tools to make your life less annoying, like scripts, macros, and RPA." 
        />
        <WhatICanDoCard 
          icon="bi-braces" 
          title="Miscellaneous" 
          description="Other digital projects you might have. I might not have the necessary experience, but feel free to ask!" 
        />
      </div>
    </div>
    <Fade duration={2000} triggerOnce={true}>
    <div className="text-center mt-5 mb-4">
      <h2 className="fw-bold display-6">How Your Project Could Look</h2>
      <p className="font-monospace fs-4">Click the tabs below for samples.</p>
    </div>
    </Fade>
    <Fade duration={2000} triggerOnce={true}>
      <HowYourProjectCouldLook />
    </Fade>
  </div>
  )
}

export default WhatICanDoSection;