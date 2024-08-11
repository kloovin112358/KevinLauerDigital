import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import ComplexWebAppResultCard from './ComplexWebAppResultCard';


const blockLinkClick = (event) => {
    event.preventDefault();
};

function ComplexWebAppSample() {

    const [smallFiltersOpen, setSmallFiltersOpen] = useState(false);

    const initialTickets = [
        {
          ticketNumber: "09971565",
          submittedDate: "2024-07-29T12:22:00",
          priorityClass: "bg-danger",
          priorityText: "High",
          priorityNum: 1,
          issueTitle: "Water Not Flowing",
          issueDescription: "No water coming out of faucets in kitchen and bathroom",
          submitterName: "Vikram Singh",
          submitterAddress: "110 N. Dearborn, Unit 1104"
        },
        {
          ticketNumber: "02636247",
          submittedDate: "2024-07-25T08:10:00",
          priorityClass: "bg-primary",
          priorityText: "Medium",
          priorityNum: 2,
          issueTitle: "Bathtub Drain Clogged",
          issueDescription: "Tub takes a long time to drain. Sometimes reaches ankle high.",
          submitterName: "Carmen Sanchez",
          submitterAddress: "425 S. Halsted, Unit 202"
        },
        {
          ticketNumber: "06230564",
          submittedDate: "2024-07-22T22:51:00",
          priorityClass: "bg-secondary",
          priorityText: "Low",
          priorityNum: 3,
          issueTitle: "Broken Refrigerator Light",
          issueDescription: "Light no longer turns on when fridge door is open",
          submitterName: "Brett Johnson",
          submitterAddress: "1400 W. Diversey, Unit 2305"
        },
        {
          ticketNumber: "08230875",
          submittedDate: "2024-08-05T13:44:00",
          priorityClass: "bg-secondary",
          priorityText: "Low",
          priorityNum: 3,
          issueTitle: "Hole in Window Screen",
          issueDescription: "Screen needs replacement - has three-inch hole",
          submitterName: "Cindy Xu",
          submitterAddress: "1900 N. Lakeshore, Unit 1511"
        }
    ];

    const formatDate = (dateString) => {
        const options = {
            month: 'numeric',
            day: 'numeric',
            year: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
    
        const date = new Date(dateString);
        return date.toLocaleString('en-US', options).replace(',', ' at');
    };
    
    const [ticketNumberSearch, setTicketNumberSearch] = useState('');
    const [filteredTickets, setFilteredTickets] = useState(initialTickets);
    const [sortBy, setSortBy] = useState('P');
    const [locationFilter, setLocationFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');

    const handleInputChange = (event) => {
        setTicketNumberSearch(event.target.value);
    };

    const handleSortByChange = (event) => {
        const sortValue = event.target.value;
        setSortBy(sortValue);
    
        let sortedTickets = [...filteredTickets];
        if (sortValue === 'N') {
            sortedTickets.sort((a, b) => new Date(b.submittedDate) - new Date(a.submittedDate));
        } else if (sortValue === 'O') {
            sortedTickets.sort((a, b) => new Date(a.submittedDate) - new Date(b.submittedDate));
        } else {
            sortedTickets.sort((a, b) => a.priorityNum - b.priorityNum);
        }

        setFilteredTickets(sortedTickets);
    };
    
    const handleLocationFilterChange = (event) => {
        setLocationFilter(event.target.value);
    };
    
    const handlePriorityFilterChange = (event) => {
        setPriorityFilter(event.target.value);
    };

    function searchByTicketNumber() {
        const filtered = initialTickets.filter(ticket => 
            ticket.ticketNumber.includes(ticketNumberSearch)
        );
        setFilteredTickets(filtered);
    }

    const filterBtnClick = () => {
        let filteredTickets = initialTickets;
    
        if (locationFilter && locationFilter !== "Select a location") {
            filteredTickets = filteredTickets.filter(ticket => ticket.submitterAddress.includes(locationFilter));
        }
    
        if (priorityFilter && priorityFilter !== "Select a priority") {
            filteredTickets = filteredTickets.filter(ticket => ticket.priorityText.includes(priorityFilter));
        }
        setFilteredTickets(filteredTickets);
    };

    return (
        <>
            <div id="complexWebAppSample" className="border border-secondary">
                <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#" className="fw-bold" onClick={blockLinkClick}>Repair Tickets App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <button className="nav-link">Priority Tickets</button>
                                <button className="nav-link">Closed Tickets</button>
                            </Nav>
                            <Nav>
                                <button className="btn btn-outline-light">Create a Ticket</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="pb-5">
                    <div className="p-3 shadow-lg">
                        {/* For large screens */}
                        <div className="d-none d-lg-block">
                            <div className="w-100 d-flex">
                                <button type="submit" className="btn btn-primary btn-lg me-2" onClick={searchByTicketNumber}>Search</button>
                                <div className="flex-grow-1">
                                    <input type="text" className="form-control form-control-lg" id="search_text_lg" name="search_text" placeholder="Search for tickets by ticket number" value={ticketNumberSearch} onChange={handleInputChange}></input>
                                </div>
                            </div>
                        </div>
                        {/* For mobile layout */}
                        <div className="d-block d-lg-none">
                            <div className="w-100 d-flex">
                                <button type="submit" className="btn btn-primary btn me-1" onClick={searchByTicketNumber}>Search</button>
                                <div className="flex-grow-1">
                                    <input type="text" className="form-control form-control" id="search_text_sm" name="search_text" placeholder="Search for tickets" value={ticketNumberSearch} onChange={handleInputChange}></input>
                                </div>
                                <Button
                                    onClick={() => setSmallFiltersOpen(!smallFiltersOpen)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={smallFiltersOpen}
                                    variant="secondary"
                                    className="ms-1"
                                >
                                    Filters
                                </Button>
                            </div>
                            <div>
                                <Collapse in={smallFiltersOpen} className="mt-2">
                                    <div id="example-collapse-text">
                                        <div className="form-group mb-2">
                                            <label htmlFor="sortBySmall">Sort By</label>
                                            <select className="form-control form-control-sm" id="sortBySmall" value={sortBy} onChange={handleSortByChange}>
                                                <option value="P">Priority</option>
                                                <option value="O">Oldest First</option>
                                                <option value="N">Newest First</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="locationFilterSmall">Location</label>
                                            <select className="form-control" id="locationFilterSmall" value={locationFilter} onChange={handleLocationFilterChange}>
                                                <option>Select a location</option>
                                                <option value="1400 W. Diversey">1400 W. Diversey</option>
                                                <option value="1900 N. Lakeshore">1900 N. Lakeshore</option>
                                                <option value="425 S. Halsted">425 S. Halsted</option>
                                                <option value="110 N. Dearborn">110 N. Dearborn</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="priorityFilterSmall">Priority</label>
                                            <select className="form-control" id="priorityFilterSmall" value={priorityFilter} onChange={handlePriorityFilterChange}>
                                                <option>Select a priority</option>
                                                <option value="High">High</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Low">Low</option>
                                            </select>
                                        </div>
                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-secondary" type="button" id="filter_sm" onClick={filterBtnClick}>Filter</button>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="py-2">
                            <div className="d-flex">
                                <div className="me-3 d-none d-lg-block" style={{minWidth:"15rem"}}>
                                <div className="card shadow-lg">
                                    <div className="card-body">
                                    <p className="h6">Sort By</p>
                                    <select className="form-control" value={sortBy} onChange={handleSortByChange} id="sortLarge" aria-label="Sort By">
                                        <option value="P">Priority</option>
                                        <option value="O">Oldest First</option>
                                        <option value="N">Newest First</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="card shadow-lg mt-1">
                                    <div className="card-body">
                                        <h6>Filters</h6>
                                        <div className="form-row">
                                            <label htmlFor="locationFilter">Location</label>
                                            <select className="form-control" id="locationFilter" value={locationFilter} onChange={handleLocationFilterChange}>
                                                <option>Select a location</option>
                                                <option value="1400 W. Diversey">1400 W. Diversey</option>
                                                <option value="1900 N. Lakeshore">1900 N. Lakeshore</option>
                                                <option value="425 S. Halsted">425 S. Halsted</option>
                                                <option value="110 N. Dearborn">110 N. Dearborn</option>
                                            </select>
                                        </div>
                                        <div className="form-row mt-2">
                                            <label htmlFor="priorityFilter">Priority</label>
                                            <select className="form-control" id="priorityFilter" value={priorityFilter} onChange={handlePriorityFilterChange}>
                                                <option>Select a priority</option>
                                                <option value="High">High</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Low">Low</option>
                                            </select>
                                        </div>
                                        <button type="button" className="btn btn-secondary btn-sm mt-2 me-1" id="filter_lg" onClick={filterBtnClick}>Filter</button>
                                    </div>
                                </div>
                                </div>
                                <div className="flex-grow-1" style={{maxWidth:"45rem"}}>
                                {filteredTickets.length === 0 ? (
                                    <p className="text-center fw-bold mt-3">No results found.</p>
                                ) : (
                                    filteredTickets.map((ticket, index) => (
                                        <ComplexWebAppResultCard
                                            key={ticket.ticketNumber}
                                            ticketNumber={ticket.ticketNumber}
                                            submittedDate={formatDate(ticket.submittedDate)}
                                            priorityClass={ticket.priorityClass}
                                            priorityText={ticket.priorityText}
                                            issueTitle={ticket.issueTitle}
                                            issueDescription={ticket.issueDescription}
                                            submitterName={ticket.submitterName}
                                            submitterAddress={ticket.submitterAddress}
                                            isFirst={index === 0}
                                        />
                                    ))
                                )}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ComplexWebAppSample;