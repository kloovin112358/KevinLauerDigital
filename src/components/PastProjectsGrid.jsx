import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const PastProjectsGrid = () => {

  const [showElements, setShowElements] = useState(false);
  // Step 2: Toggle visibility when the button is clicked
  const handleToggle = () => {
    setShowElements(!showElements);
  };

  const projects = [
    {
      image: '/shoopboop_website.jpg',
      link: 'https://github.com/kloovin112358/ShoopBoop',
      title: 'ShoopBoop',
      description: 'Twitter-like social media application where “likes” can only be given after solving Captcha puzzles.',
      badge: 'Web'
    },
    {
      image: '/chipublibsearch_automation.jpg',
      link: 'https://github.com/kloovin112358/ChiPubLibSearch',
      title: 'ChiPubLib Search',
      description: 'Searches local Chicago Public Library branch for available books from “to-read” Goodreads list',
      badge: 'Automation'
    },
    {
      image: '/company_sample_website.png',
      link: 'https://github.com/kloovin112358/company-sample',
      title: 'Company Sample',
      description: 'Sample front-end design for a company website.',
      badge: 'Web'
    },
    {
      image: '/ledgestone_website.jpg',
      link: 'https://shopledgestone.com/',
      title: 'Ledgestone Disc Golf*',
      description: 'Supported Shopify upgrade for ecommerce site. *Note: I did not build the core of the site',
      badge: 'Web'
    },
    {
      image: '/palabrio_website.jpg',
      link: 'https://github.com/kloovin112358/palabrio',
      title: 'Palabrio',
      description: 'Text-based party game where players create a story out of randomly-generated words.',
      badge: 'Web'
    },
    {
      image: '/opening_roulette_website.png',
      link: 'https://github.com/kloovin112358/openingRoulette',
      title: 'Chess Opening Roulette',
      description: 'Tool that randomizes chess openings for the user during a game.',
      badge: 'Web'
    },
    {
      image: '/country_generator_website.jpg',
      link: 'https://github.com/kloovin112358/countryGenerator',
      title: 'Country Generator',
      description: 'Randomly generates countries based on probability of being born there.',
      badge: 'Web'
    },
    {
      image: '/extension_quiz_website.jpg',
      link: 'https://github.com/kloovin112358/extensionQuiz',
      title: 'Extension Quiz',
      description: 'Tests your knowledge of various file extensions.',
      badge: 'Web'
    },
    {
      image: '/memory_blast_website.png',
      link: 'https://github.com/kloovin112358/memoryblast',
      title: 'Memory Blast',
      description: 'Tests your short-term recall of displayed integers.',
      badge: 'Web'
    }
  ];

  const rows = [];
  const extraRows = [];

  for (let i = 0; i < 2; i += 3) {
    rows.push(
      <div className="row" key={i}>
        {projects.slice(i, i + 3).map((project, index) => (
          <div className="col d-flex align-items-stretch" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    );
  }

  for (let i = 3; i < projects.length; i += 3) {
    extraRows.push(
      <div className={`row hidden-elements ${showElements ? '' : 'hidden'}`} key={i}>
        {projects.slice(i, i + 3).map((project, index) => (
          <div className="col d-flex align-items-stretch" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    );
  }

  return <>
    {rows}
    {extraRows}
    <div className="d-grid d-block d-lg-none mt-2">
      <button className="btn btn-link" onClick={handleToggle}>{showElements ? 'Hide additional projects' : 'Show more projects'}</button>
    </div>
    
  </>;
};

export default PastProjectsGrid;