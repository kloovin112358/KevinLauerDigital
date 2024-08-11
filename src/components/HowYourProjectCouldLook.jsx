import AutomationScriptSample from './AutomationScriptSample';
import RPASample from './RPASample';
import MacroSample from './MacroSample';
import ComplexWebAppSample from './ComplexWebAppSample';
import StaticWebsiteSample from './StaticWebsiteSample';
import React, { useState, useEffect, useRef } from 'react';

function HowYourProjectCouldLook() {
    const [visibleSample, setVisibleSample] = useState("ComplexWebApp");
    const scrollableContainerRef = useRef(null);

    const handleSampleChange = (sample) => {
        setVisibleSample(sample);
    };

    useEffect(() => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTop = 0; // Scroll to the top
        }
    }, [visibleSample]);

    return (
        <>
            <div className="card shadow-lg mt-3 border border-primary">
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
                    <div ref={scrollableContainerRef} className="mt-3" style={{ maxHeight: "40rem", overflowY: "auto" }}>
                        {visibleSample === "ComplexWebApp" && <ComplexWebAppSample />}
                        {visibleSample === "StaticWebsite" && <StaticWebsiteSample />}
                        {visibleSample === "AutomationScript" && <AutomationScriptSample />}
                        {visibleSample === "Macro" && <MacroSample />}
                        {visibleSample === "RPA" && <RPASample />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowYourProjectCouldLook;