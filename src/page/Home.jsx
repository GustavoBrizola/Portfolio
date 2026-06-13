import React, { useEffect, useState } from 'react';

// TODO: Refactorate imports
import Bottom from 'components/elements/Footer';
import UserDisplay from 'components/elements/UserDisplay';

import Resume from 'components/elements/content/Resume';
import AboutMe from 'components/elements/content/AboutMe';
import Projects from 'components/elements/content/Projects';

/**
 * Portfolio Website
 *  
*/
export default
function Portfolio() {

  // Conditional import
  // This ensures the load of styles on demand
  // So the .css styles can set 
  // HTML elements(body, div, nav, etc.) per .css individually
  useEffect(() => {
    // @ts-ignore
    import('./Home.css');
  }, [])

  // Content Map
  // Section: ['sectionName', <content/>]
  const contentMap = {
    projects: ['Projects', <Projects/>],
    resume: ['Resume', <Resume/>],
    about: ['About', <AboutMe/>],
  };
  const [activeSection, setActiveSection] = useState('about');
  
  // Navigation System
  // TODO: transfer to a saparate js
  const renderNavigation = (
      <>
        {Object.entries(contentMap).map(([key, [label]]) => (
          <a key={key} href="#" onClick={(e) => { e.preventDefault(); setActiveSection(key); }}>
            {label}
          </a>
        ))}
      </>
  );
  const renderContent = (
    <>
      {contentMap[activeSection]?.[1] || <></>}
    </>
  )


  // TODO: Refactorate
  return (
    <main className='portfolio'>
      <div className='structure'>
        
        <nav className='navigationBar'>
          <UserDisplay/>
          <div className="navigationBar_section">

            {renderNavigation}            

          </div>
          <button>Contact Me</button>
        </nav>

        {/* Display Structure */}
        <section className='page'>
          <div className='page_content'>

            {renderContent}

          </div>
          <div className='page_bottom'><Bottom/></div>
        </section>

      </div>
    </main>
  )
}