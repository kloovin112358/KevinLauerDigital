import React from 'react';
import PropTypes from 'prop-types';

const ComplexWebAppResultCard = ({ ticketNumber, submittedDate, priorityClass, priorityText, issueTitle, issueDescription, submitterName, submitterAddress, isFirst = false }) => {
  return (
    <div className={`card shadow-lg ${!isFirst ? 'mt-2' : ''}`}>
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <div>
            Ticket #{ticketNumber}
          </div>
          <div>
            Submitted {submittedDate}
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5><span className={`badge ${priorityClass} rounded-pill`}>{priorityText}</span> {issueTitle}</h5>
        <p><i>"{issueDescription}"</i></p>
        <small>Submitted by: {submitterName} at {submitterAddress}</small>
      </div>
    </div>
  );
};

ComplexWebAppResultCard.propTypes = {
  ticketNumber: PropTypes.string.isRequired,
  submittedDate: PropTypes.string.isRequired,
  priorityClass: PropTypes.string.isRequired,
  priorityText: PropTypes.string.isRequired,
  issueTitle: PropTypes.string.isRequired,
  issueDescription: PropTypes.string.isRequired,
  submitterName: PropTypes.string.isRequired,
  submitterAddress: PropTypes.string.isRequired,
  isFirst: PropTypes.bool
};

export default ComplexWebAppResultCard;
