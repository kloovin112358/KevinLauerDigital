import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhatICanDoCard = ({ icon, title, description }) => (
  <div className="col d-flex align-items-stretch">
    <div className="card shadow-lg mt-4 border border-primary" style={{ minWidth: "270px" }}>
      <div className="card-body p-4">
        <div className="text-center mb-4"><i className={`bi ${icon} display-1 fw-bold`} style={{ fontSize: "10em" }}></i></div>
        <p className="fw-bold text-center text-primary h4">{title}</p>
        <p className="text-center"><i>{description}</i></p>
      </div>
    </div>
  </div>
);

export default WhatICanDoCard;
