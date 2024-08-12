import React from 'react';

const MacroSample = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="mt-2 pb-4 text-center">
                <h4>Excel Macro - Aggregating Timesheets and Calculating Labor Cost</h4>
            </div>
            <video controls src={"/Macro_demo.mp4"} className="object-fit-contain d-block mx-auto" autoPlay style={{maxWidth:"100%", maxHeight:"35rem"}} muted loading="lazy"></video>
        </div>
    </>
  );
};

export default MacroSample;
