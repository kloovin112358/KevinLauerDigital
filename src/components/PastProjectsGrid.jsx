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
      image: '/theperfectstripe.jpg',
      link: 'https://theperfectstripe.com/',
      title: 'The Perfect Stripe',
      description: "Static site for a client's small business, utilizing Bootstrap, stock images, and background patterns.",
      badge: 'Web'
    },
    {
      image: '/sanctorum.jpg',
      link: 'https://sanctorumpodcast.com/',
      title: 'Sanctorum Podcast',
      description: "Static site for a client's podcast, utilizing Three.js, GSAP animations and Decap CMS.",
      badge: 'Web'
    },
    {
      image: '/ledgestone_website.jpg',
      link: 'https://shopledgestone.com/',
      title: 'Ledgestone Disc Golf*',
      description: 'Supported Shopify upgrade for ecommerce site. *Note: I did not build the site core.',
      badge: 'Web'
    },
    {
      image: '/kitchensink.jpg',
      link: 'https://kitchen-sink-static.netlify.app/',
      title: 'The Kitchen Sink',
      description: 'A sample static site with light/dark mode, translations in 3 languages, and GSAP animations.',
      badge: 'Web'
    },
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
      image: '/cryptofeet.jpg',
      link: 'https://github.com/kloovin112358/ModernCompanySiteWithImages',
      title: 'Crypto Feet',
      description: 'Modern company site sample with gradients, images, and a goofy theme.',
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
      image: '/apartmentsfastfilter.jpg',
      link: 'https://chromewebstore.google.com/detail/fast-filter-chicago-apart/ialcjmolcjcbgbkmdlfjofmpodcgefpa',
      title: 'Apts Fast Filter',
      description: 'Builds search URLs based on basic filters, integrating with 13 apartment listing sites.',
      badge: 'Extension'
    },
  ];

  const rows = [];
  const extraRows = [];

  for (let i = 0; i < 2; i += 3) {
    rows.push(
      <div className="row" key={i}>
        {projects.slice(i, i + 3).map((project, index) => (
          <div className="col d-flex align-items-stretch justify-content-center" key={index}>
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
          <div className="col d-flex align-items-stretch justify-content-center" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    );
  }

  return <div className="mt-lg-3 mt-2">
    {rows}
    {extraRows}
    <div className="d-grid d-block d-lg-none mt-2">
      <button className="btn btn-link" onClick={handleToggle}>{showElements ? 'Hide additional projects' : 'Show more projects'}</button>
    </div>
    
  </div>;
};

export default PastProjectsGrid;
