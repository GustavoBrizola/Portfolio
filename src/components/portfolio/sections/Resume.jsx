import React from "react"

import resume from '/pdf/Resume.pdf'

import ButtonLink from "components/elements/ButtonLink"
import PdfViewer from "components/elements/PdfViewer"

export default
function Resume()
{
    const buttonDownload = (<ButtonLink a_href={resume} string={"Donwload CV"}/>)

    return (    
        <div>
            <div>
                <h1>Download Resume</h1>
                <p>Here you can download my latest Curriculum Vitae.</p>
            </div>
            <div>
                {buttonDownload}
                <PdfViewer file={resume}/>
                {buttonDownload}
            </div>
        </div>
    )
}