import React from 'react';
import PropTypes from 'prop-types';

const ComplexWebAppResultCard = ({ ticketNumber, submittedDate, priorityClass, priorityText, issueTitle, issueDescription, submitterName, submitterAddress, isFirst = false }) => {
  return (
    <div className={`card shadow-lg ${!isFirst ? 'mt-2' : ''}`}>
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <div>
            <span className="d-none d-lg-inline-block">Ticket</span> #{ticketNumber}
          </div>
          <div>
          <span className="d-none d-lg-inline-block">Submitted</span> {submittedDate}
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="h5"><span className={`badge ${priorityClass} rounded-pill mb-2 mb-lg-0`}>{priorityText} <span className="d-inline-block d-lg-none">Priority</span></span><br className="d-block d-lg-none"></br> {issueTitle}</p>
        <p><i>"{issueDescription}"</i></p>
        <small><span className="d-none d-lg-inline-block">Submitted by:</span> {submitterName} <br className="d-block d-lg-none"></br><span className="d-none d-lg-inline-block">at</span> {submitterAddress}</small>
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
