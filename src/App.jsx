
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React, { useState, useEffect } from 'react';

import ParticlesBackground from './components/ParticlesBackground';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import 'react-vertical-timeline-component/style.min.css';

import TopContainer from "./components/TopContainer";
import MobileTopContainer from "./components/MobileTopContainer";
import ServiceSection from "./components/ServiceSection";
import DifferentSection from "./components/DifferentSection";
import DoneSection from "./components/DoneSection";
import WhoIAmSection from "./components/WhoIAmSection";
import HireMeSection from "./components/HireMeSection";

const getStoredTheme = () => localStorage.getItem('theme');
const setStoredTheme = theme => localStorage.setItem('theme', theme);

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = theme => {
  if (theme === 'auto') {
    document.documentElement.setAttribute(
      'data-bs-theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
};

function App() {
  const [theme, setThemeState] = useState(getPreferredTheme());

  useEffect(() => {
    setTheme(theme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme());
      }
    });

    const handleDOMContentLoaded = () => {
      showActiveTheme(theme);
    };

    window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    return () => {
      window.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setStoredTheme(newTheme);
    setThemeState(newTheme);
    showActiveTheme(newTheme, true);
  };

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme');
    if (!themeSwitcher) {
      return;
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text');
    const activeThemeIcon = document.querySelector('.theme-icon-active use');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href');

    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });

    btnToActive.classList.add('active');
    btnToActive.setAttribute('aria-pressed', 'true');
    activeThemeIcon.setAttribute('href', svgOfActiveBtn);
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);

    if (focus) {
      themeSwitcher.focus();
    }
  };

  return (
    <>
      <header>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="fixed-top">
        <Container>
          <a className="navbar-brand" href="/">
            <img src={"/Logo.png"} alt={"Kevin Lauer Digital logo"} height="40"></img>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#do">What I Can Do</Nav.Link>
              <Nav.Link href="#different">Why I'm Different</Nav.Link>
              <Nav.Link href="#done">What I've Done</Nav.Link>
              <Nav.Link href="#am">Who I Am</Nav.Link>
            </Nav>
            <Nav>
              <a href="#hire" className="btn btn-success me-lg-1 mb-1 mb-lg-0">Get a Quote</a>
            <Button 
              variant="dark"
              onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <>
                  Use <i className="bi bi-brightness-high"></i> Light Mode
                </>
              ) : (
                <>
                  Use <i className="bi bi-moon"></i> Dark Mode
                </>
              )}
            </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
      <main>
      <Container>
        <ParticlesBackground theme={theme} />
        <section>
          <TopContainer />
        </section>
        <section>
          <MobileTopContainer />
        </section>
        <section>
          <ServiceSection />
        </section>
        <section>
          <DifferentSection />
        </section>
        <section>
          <DoneSection />
        </section>
        <section>
          <WhoIAmSection />
        </section>
        <section>
          <HireMeSection />
        </section>
      </Container>
      </main>
      <footer className="border-top footer bg-body-secondary" style={{zIndex:"999"}}>
            <div className="container">
            <div className="pt-3 fs-6" style={{paddingBottom:"8rem"}}>
                <small className="font-monospace fw-bold">Kevin Lauer Digital</small><hr></hr>
                <small>Connect with me on <a href="https://www.linkedin.com/in/ktlauer/" className="me-3" style={{textDecoration:"none"}}>LinkedIn <i className="bi bi-linkedin"></i></a></small><br></br>
                <small>View my full portfolio on <a href="https://github.com/kloovin112358" style={{textDecoration:"none"}}>GitHub <i className="bi bi-github"></i></a></small>
              </div>
            </div>
        </footer>
    </>
  );
}

export default App;
