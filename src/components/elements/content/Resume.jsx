import React from "react"

import resume from '/pdf/Resume.pdf'

export default
function Resume()
{
    const downloadButton = (
        <a href={resume} download="Gustavo Brizola - resume.pdf" target="_blank" rel="noreferrer">Download</a>
    )

    return (    
        <>
            {downloadButton}
            <iframe 
                src={resume} 
                width="100%" 
                height="900px" 
                title="Resume"
            />
            {downloadButton}
        </>
    )
}