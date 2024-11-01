import React from 'react';

const MaxCard = () => (
  <div style={{ width: "18em" }} className="me-2 my-1">
    <div className="card shadow-lg border border-primary">
      <div className="card-body px-4 py-4 d-flex flex-column justify-content-between align-items-between" style={{ minHeight: "20em" }}>
        <div>
          <div className="display-2 fw-bold text-primary">
            <i className="bi bi-window-stack"></i>
          </div>
          <div>
            <p className="pb-0 mb-0 fw-bold display-4 h1">Max</p>
            <span className="lead fs-6">Form, function, you name it. I'll really try to impress both you and your clients.</span><br />
          </div>
        </div>
        <div>
          <span><i className="bi bi-check-circle-fill text-success"></i> Best for client-facing projects</span>
        </div>
      </div>
    </div>
  </div>
);

export default MaxCard;
