import React from 'react';

const MacroSample = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="mt-2 pb-4 text-center">
                <h4>Excel Macro - Aggregating Timesheets and Calculating Labor Cost</h4>
                {/* <small><i>Note: video has been sped up for effect</i></small> */}
            </div>
            
            <video controls src={"/Macro_demo.mp4"} className="object-fit-contain d-block mx-auto" autoPlay style={{height:"33rem"}}></video>
        </div>
    </>
  );
};

export default MacroSample;
