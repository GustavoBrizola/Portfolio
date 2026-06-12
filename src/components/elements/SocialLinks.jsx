import React from "react";

import githubLogo from '/images/icons/Github_white.png'
import linkedinLogo from '/images/icons/Linkedin_white.png'

export default
function SocialLinks()
{
    return (
        <>
            <h4>Socials<hr/></h4>
            <a aria-label="Open GitHub profile" href="https://github.com/GustavoBrizola">
                <img src={githubLogo}/>
                <p>Github</p>
            </a>

            <a aria-label="Open LinkedIn profile" href="https://www.linkedin.com/in/gustavobrizola/">
                <img src={linkedinLogo}/>
                <p>LinkedIn</p>
            </a>
        </>
    )
}