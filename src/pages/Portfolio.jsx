import React from "react";
import { useState } from "react";

import'components/styles/Portfolio.css';

import portfolio from 'json/Portfolio_Info.json'
import avatar from '/images/photos/avatar_placeholder.png'

import Home from "components/elements/sections/Home";
import Projects from "components/elements/sections/Projects";
import Resume from "components/elements/sections/Resume";
import About from "components/elements/sections/About";
import Contact from "components/elements/sections/Contact";

export default
function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const pageMap = {
        home:       {label: 'Home', component: <Home/>},
        projects:   {label: 'Projects', component: <Projects/>},
        resume:     {label: 'Resume',   component: <Resume/>},
        about:      {label: 'About',    component: <About/>},
        contact:    {label: 'Contact',  component: <Contact/>},
    };

    return (
        <main className="portfolio">
            <nav className="navigationBar">
                <div>
                    <img src={avatar} alt={`${portfolio.developer} avatar`}/>
                    <span>{portfolio.developer}</span>
                </div>
                <div className='section'>
                    {Object.entries(pageMap).map(([key, value]) => (
                        <a key={key} href={value.label} onClick={(e) => { e.preventDefault(); setActiveSection(key); }}>
                            {value.label}
                        </a>
                    ))}
                </div>
            </nav>
            <section className="contentDisplay">
                <div className='content'>
                    {pageMap[activeSection]?.component || <></>}
                </div>
            </section>
            <footer className="footer">
                <span>©2026 design and developed by {portfolio.developer}</span>
                <div>
                    <a href='https://github.com/GustavoBrizola/Portfolio' target='_blank' rel='noopener noreferrer'>Repository</a>
                    <a href='https://github.com/GustavoBrizola/Portfolio/issues' target='_blank' rel='noopener noreferrer'>Report Bug</a>
                </div>
                <span>{portfolio.version}</span>
            </footer>
        </main>
    )
}