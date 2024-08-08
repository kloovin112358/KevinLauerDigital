import React from 'react';

const ServiceOfferingCard = ({ title, description, icon, highlight }) => (
  <div style={{ width: "17em" }} className="me-2 my-1">
    <div className={`card shadow-lg ${highlight ? 'border border-primary' : ''}`}>
      <div className="card-body px-4 py-4 d-flex flex-column justify-content-between align-items-between" style={{ minHeight: "20em" }}>
        {icon && (
          <div className="display-2 fw-bold text-primary">
            <i className={`bi ${icon}`}></i>
          </div>
        )}
        <div>
          <h1 className="pb-0 mb-0 fw-bold">{title}</h1>
          <span className="lead fs-6">{description}</span>
        </div>
        {highlight && (
          <div>
            <span><i className="bi bi-check-circle-fill text-success"></i> Best for client-facing apps</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ServiceOfferingCard;
