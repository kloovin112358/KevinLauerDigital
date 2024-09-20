import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { useAnimation } from '../AnimationContext'; // Use the animation context


const ProjectCard = ({ image, link, title, description, badge }) => {
  const isXlScreen = useAnimation();

  return (
    <div className="card shadow-lg mt-4 border border-primary" style={{ minWidth: '300px' }}>
      <div className="card-body p-4">
      {isXlScreen ? (
        <Zoom duration={500}>
        <div className="text-center mb-4">
          <img src={image} className="img-thumbnail" alt={title} loading="lazy" />
        </div>
        <p className="fw-bold text-center text-primary h4">
          <span className="badge bg-secondary rounded-pill">{badge}</span> <a href={link}>{title}</a>
        </p>
        <p className="text-center">
          {description}
        </p>
        </Zoom>) : (
          <>
            <div className="text-center mb-4">
          <img src={image} className="img-thumbnail" alt={title} loading="lazy" />
        </div>
        <p className="fw-bold text-center text-primary h4">
          <span className="badge bg-secondary rounded-pill">{badge}</span> <a href={link}>{title}</a>
        </p>
        <p className="text-center">
          {description}
        </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
