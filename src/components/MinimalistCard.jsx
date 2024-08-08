import React from 'react';

const MinimalistCard = () => (
  <div style={{ width: "17em" }} className="me-2 my-1">
    <div className="card shadow-lg">
      <div className="card-body px-4 py-4" style={{ minHeight: "20em" }}>
        <strong>Minimalist</strong><br /><span>The absolute barebones: something functional, nothing more. Best for small internal apps when cost is your first priority.</span>
      </div>
    </div>
  </div>
);

export default MinimalistCard;
