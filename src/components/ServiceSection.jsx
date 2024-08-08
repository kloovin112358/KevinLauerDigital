import React from 'react';
import ServiceCard from './ServiceCard';
import ComplexWebAppSample from './ComplexWebAppSample';
import StaticWebsiteSample from './StaticWebsiteSample';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import AutomationScriptSample from './AutomationScriptSample';
import RPASample from './RPASample';
import MacroSample from './MacroSample';

function ServiceSection() {

  const [visibleSample, setVisibleSample] = useState("ComplexWebApp");

  const handleSampleChange = (sample) => {
      setVisibleSample(sample);
  };

  return (
    <div className="pb-5" id="do">
    <h1 className="fw-bold display-4 text-center">What I Can <span className="text-primary">Do</span> (for you)</h1>
    <Fade duration={2000} triggerOnce={true}>
    <div className="row mt-3">
      <ServiceCard 
        icon="bi-window" 
        title="Full-Stack Web Development" 
        description="Complex web apps, static websites, I've got you. Built from scratch or changes to existing sites." 
      />
      <ServiceCard 
        icon="bi-mouse3" 
        title="Process Automation" 
        description="Tools to make your life less annoying, like scripts, macros, and RPA." 
      />
      <ServiceCard 
        icon="bi-braces" 
        title="Miscellaneous" 
        description="Other digital projects you might have. I might not have the necessary experience, but feel free to ask!" 
      />
    </div>
    </Fade>
    <Fade duration={2000} triggerOnce={true}>
    <div className="text-center mt-5 mb-4">
      <h2 className="fw-bold display-6">How Your Project Could Look</h2>
      <p className="font-monospace fs-4">Click the tabs below for samples.</p>
    </div>
    </Fade>
    <Fade duration={2000} triggerOnce={true}>
    <div className="card shadow-lg mt-5 border border-primary">
      <div className="card-body">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button role="tab" className={`flex-sm-fill text-sm-center nav-link ${visibleSample === "ComplexWebApp" ? "active" : ""}`} onClick={() => handleSampleChange("ComplexWebApp")}>Complex Web App</button>
          </li>
          <li className="nav-item" role="presentation">
            <button role="tab" className={`flex-sm-fill text-sm-center nav-link ${visibleSample === "StaticWebsite" ? "active" : ""}`} onClick={() => handleSampleChange("StaticWebsite")}>Static Website</button>
          </li>
          <li className="nav-item" role="presentation">
            <button role="tab" className={`flex-sm-fill text-sm-center nav-link ${visibleSample === "AutomationScript" ? "active" : ""}`} onClick={() => handleSampleChange("AutomationScript")}>Automation Script</button>
          </li>
          <li className="nav-item" role="presentation">
            <button role="tab" className={`flex-sm-fill text-sm-center nav-link ${visibleSample === "Macro" ? "active" : ""}`} onClick={() => handleSampleChange("Macro")}>Automation Macro</button>
          </li>
          <li className="nav-item" role="presentation">
            <button role="tab" className={`flex-sm-fill text-sm-center nav-link ${visibleSample === "RPA" ? "active" : ""}`} onClick={() => handleSampleChange("RPA")}>RPA</button>
          </li>
        </ul>
        <div className="mt-3" style={{maxHeight:"40rem", overflowY:"auto"}}>
          {visibleSample === "ComplexWebApp" && <ComplexWebAppSample />}
          {visibleSample === "StaticWebsite" && <StaticWebsiteSample />}
          {visibleSample === "AutomationScript" && <AutomationScriptSample />}
          {visibleSample === "Macro" && <MacroSample />}
          {visibleSample === "RPA" && <RPASample />}
        </div>
      </div>
    </div>
    </Fade>
  </div>
  )
}

export default ServiceSection;