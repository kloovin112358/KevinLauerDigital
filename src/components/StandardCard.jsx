import React from 'react';

const StandardCard = () => (
  <div style={{ width: "18em" }} className="me-2 my-1">
    <div className="card shadow-lg">
      <div className="card-body px-4 py-4 d-flex flex-column justify-content-between align-items-between" style={{ minHeight: "20em" }}>
        <div>
          <h4>Standard</h4>
          <span><i>The must-haves, polished</i><hr /></span>
          Making the essential features more refined<br />
        </div>
        <div>
          <u className="font-monospace">Best for larger projects</u>
        </div>
      </div>
    </div>
  </div>
);

export default StandardCard;
