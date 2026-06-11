import React from "react"

export default
function Resume()
{
    const downloadButton = (
        <a href="/resume.pdf" download="Gustavo Brizola - resume.pdf" target="_blank" rel="noreferrer">Download</a>
    )

    return (
        <>
            {downloadButton}
            <iframe 
                src="/resume.pdf" 
                width="100%" 
                height="900px" 
                title="Resume"
            />
            {downloadButton}
        </>
    )
}