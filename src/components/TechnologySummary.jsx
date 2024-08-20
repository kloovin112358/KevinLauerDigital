import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Fade, JackInTheBox } from 'react-awesome-reveal';

const TechnologySummary = () => {
  return (
    <>
        <JackInTheBox>
        <div className="text-center mt-5 mb-3">
            <h2 className="fw-bold display-6 beforeSubHeader">Technology Summary</h2>
            <p className="font-monospace fs-4">Click the rows below to expand.</p>
        </div>
        </JackInTheBox>
        <JackInTheBox>
        <div className="card mt-4 shadow-lg border border-primary mx-auto" style={{maxWidth:"40rem"}}>
            <div className="card-body">
            <div>
                <span className="badge bg-success rounded-pill mx-1 fw-bold">Expert</span>
                <span className="badge bg-primary rounded-pill mx-1">Advanced</span>
                <span className="badge bg-warning rounded-pill mx-1 text-dark">Intermediate</span>
                <span className="badge bg-danger rounded-pill mx-1">Beginner</span>
            </div>
            <Accordion className="text-dark mb-2 mt-2" alwaysOpen>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Programming Languages</Accordion.Header>
                <Accordion.Body bsPrefix={"accordionReset"}>
                    <ul className='list-group list-group-flush lead'>
                    <li className='list-group-item'>
                        <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>Python <i className="bi bi-filetype-py"></i></div>
                        <span className="badge bg-success rounded-pill">August 2019</span>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>C# <i className="bi bi-filetype-cs"></i></div>
                        <span className="badge bg-primary rounded-pill">May 2022</span>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>Java <i className="bi bi-filetype-java"></i></div>
                        <span className="badge bg-warning text-dark rounded-pill">August 2021</span>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>JavaScript <i className="bi bi-filetype-js"></i></div>
                        <span className="badge bg-success rounded-pill">September 2020</span>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>TypeScript <i className="bi bi-filetype-tsx"></i></div>
                        <span className="badge bg-warning text-dark rounded-pill">May 2022</span>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>Excel VBA <i className="bi bi-file-earmark-excel"></i></div>
                        <span className="badge bg-success rounded-pill">January 2020</span>
                        </div>
                    </li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Web</Accordion.Header>
                <Accordion.Body bsPrefix={"accordionReset"}>
                    <ul className='list-group list-group-flush lead'>
                    <li className='list-group-item'>
                        <span className='fw-bold'>Backend:</span> <span className="badge bg-success rounded-pill">Django <i className="bi bi-filetype-py"></i></span> <span className="badge bg-primary rounded-pill">ASP.NET <i className="bi bi-filetype-cs"></i></span> <span className="badge bg-success rounded-pill">Flask <i className="bi bi-filetype-py"></i></span> <span className="badge bg-primary rounded-pill">Node.JS <i className="bi bi-filetype-js"></i></span> <span className="badge bg-danger rounded-pill">Spring Boot <i className="bi bi-filetype-java"></i></span> <span className="badge bg-warning text-dark rounded-pill">Django REST Framework <i className="bi bi-filetype-py"></i></span>
                    </li>
                    <li className='list-group-item'>
                        <span className='fw-bold'>Frontend:</span> <span className="badge bg-success rounded-pill">React <i className="bi bi-filetype-jsx"></i></span> <span className="badge bg-success rounded-pill">HTML <i className="bi bi-filetype-html"></i></span> <span className="badge bg-success rounded-pill">CSS <i className="bi bi-filetype-css"></i></span> <span className="badge bg-primary rounded-pill">SASS <i className="bi bi-filetype-sass"></i></span> <span className="badge bg-success rounded-pill">Bootstrap <i className="bi bi-bootstrap"></i></span> <span className="badge bg-success rounded-pill">JQuery</span> <span className="badge bg-success rounded-pill">AJAX</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='fw-bold'>Miscellaneous:</span> <span className="badge bg-warning text-dark rounded-pill">Heroku</span> <span className="badge bg-primary rounded-pill">REST APIs</span> <span className="badge bg-primary rounded-pill">WebSockets</span>
                    </li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>Data</Accordion.Header>
                <Accordion.Body bsPrefix={"accordionReset"}>
                    <ul className='list-group list-group-flush lead'>
                    <li className='list-group-item'>
                        <span className='fw-bold'>Databases:</span> <span className="badge bg-success rounded-pill">PostgreSQL</span> <span className="badge bg-warning text-dark rounded-pill">Access <i className="bi bi-server"></i></span> 
                    </li>
                    <li className='list-group-item'>
                        <span className='fw-bold'>Tools:</span> <span className="badge bg-primary rounded-pill">SQL</span> <span className="badge bg-success rounded-pill">Excel <i className="bi bi-file-earmark-excel"></i></span> <span className="badge bg-primary rounded-pill">PowerBI <i className="bi bi-file-bar-graph"></i></span>
                    </li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>Other Software</Accordion.Header>
                <Accordion.Body>
                    
                <div className='lead'>
                    <span className="badge bg-warning text-dark rounded-pill">Git <i className="bi bi-git"></i></span> <span className="badge bg-primary rounded-pill">GitHub <i className="bi bi-github"></i></span> <span className="badge bg-danger rounded-pill">Jenkins</span> <span className="badge bg-danger rounded-pill">SonarQube</span> <span className="badge bg-success rounded-pill">Azure DevOps</span> <span className="badge bg-primary rounded-pill">Selenium</span> <span className="badge bg-danger rounded-pill">Minitab</span> <span className="badge bg-danger rounded-pill">Simio</span> <span className="badge bg-primary rounded-pill">Creo</span> <span className="badge bg-danger rounded-pill">Solidworks</span> <span className="badge bg-warning text-dark rounded-pill">AutoDesk Inventor</span>
                    </div>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>  
        </JackInTheBox>
    </>
  );
};

export default TechnologySummary;
