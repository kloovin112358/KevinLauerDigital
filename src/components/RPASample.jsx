import React from 'react';

function RPASample () {
    return (
        <>
            <div className="container-fluid">
                <div className="mt-2 pb-4 text-center">
                    <h4>Microsoft Power Automate - Software Installation Automation</h4>
                    <small><i>Note: automating software installations in this manner is likely impractical at a large scale. Example is meant to demo tool capabilities.</i></small>
                </div>
                
                <video src={"/RPA_demo.mp4"} className="object-fit-contain d-block mx-auto" autoPlay controls style={{height:"33rem"}}></video>
            </div>
           
        </>
    )
}

export default RPASample;
