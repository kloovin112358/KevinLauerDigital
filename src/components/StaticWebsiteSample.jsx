import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const blockLinkClick = (event) => {
    event.preventDefault();
};

function StaticWebsiteSample () {
    return (
        <div className="border border-secondary">
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="py-4">
                <Container>
                    <Navbar.Brand href="#" className="fw-bold" onClick={blockLinkClick}>Your Company</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <button className="nav-link">Solutions</button>
                            <button className="nav-link">Industries</button>
                            <button className="nav-link">Partners</button>
                        </Nav>
                        <Nav>
                            <button className="btn btn-outline-light">Contact Us</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="staticWebsiteStartDiv" style={{backgroundImage: "url(/jigar-panchal-unsplash-green.jpg)"}}>
                <div className="py-lg-5">
                    <div className="container p-5">
                    <h1 className="display-1 fw-bold text-white px-lg-5">Company branding message slogan.</h1>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-success-subtle">
                <div className="container mx-lg-5">
                    <div className="row">
                        <div className="col-lg-8 text-center">
                            <h1 className="display-1 fw-bold" >We help you do business <span className="text-success">better</span>.</h1>
                            <p className="lead">Other services are all fluff, but we don't think that's right.</p>
                        </div>
                        <div className="col-lg-4 mx-auto mt-md-3 text-center">
                            <img src={"/allec-gomes-unsplash.jpg"} className="img-thumbnail" alt={"Leaf"} style={{maxHeight:"20rem"}} loading="lazy"/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="py-5">
                <div className="container ps-lg-5">
                    <h3 className="display-3 fw-bold" >Our Services:</h3>
                    <div className="row mt-5">
                        <div className="col-lg d-flex align-items-stretch">
                            <div className="card">
                            <img src={"/maggie-ziegler-unsplash.jpg"} className="img-fluid" alt={"Abstract painting"} loading="lazy"/>
                                <div className="card-body">
                                    <h2 className="fw-bold">Service 1</h2>
                                    <p>Service 1 allows you to do your work better, and makes it easier to not fail</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg d-flex align-items-stretch mt-lg-0 mt-2">
                            <div className="card">
                                <img src={"/martin-martz-unsplash.jpg"} className="img-fluid" alt={"Abstract light"} loading="lazy"/>
                                <div className="card-body">
                                    <h2 className="fw-bold">Service 2</h2>
                                    <p>Service 2 gives you the confidence to work without worrying about money</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg d-flex align-items-stretch mt-lg-0 mt-2">
                            <div className="card">
                                <img src={"/zaka-ullah-unsplash.jpg"} className="img-fluid" alt={"Abstract plants"} loading="lazy"/>
                                    <div className="card-body">
                                        <h2 className="fw-bold">Service 3</h2>
                                        <p>Service 3 allows your business to grow without the issues that plague other companies</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="border-top footer bg-body-tertiary">
                <div className="container">
                    <div className="pt-3" style={{paddingBottom:"10rem"}}>
                        &copy; 2024 TechCompany
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default StaticWebsiteSample;
