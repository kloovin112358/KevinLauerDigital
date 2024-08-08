import React from 'react';

const ProjectCard = ({ image, link, title, description, badge }) => {
  return (
    <div className="card shadow-lg mt-4 border border-primary" style={{ minWidth: '300px' }}>
      <div className="card-body p-4">
        <div className="text-center mb-4">
          <img src={image} className="img-thumbnail" alt={title} />
        </div>
        <h4 className="fw-bold text-center text-primary">
          <span className="badge bg-secondary rounded-pill">{badge}</span> <a href={link}>{title}</a>
        </h4>
        <p className="text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;