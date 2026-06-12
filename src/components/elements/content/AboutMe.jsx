import React from "react";

import SocialLinks from "components/elements/SocialLinks";
import ContactLinks from "components/elements/ContactLinks";

// That's how to import files from public folder
// https://vite.dev/guide/assets
import pPhoto from '/images/photos/avatar_placeholder.png'

export default
function AboutMe()
{
    return (
        <>
            <div>
                <img src={pPhoto}/>
            </div>
            <h3>Gustavo Silva Brizola</h3>
            <h5>Software Developer</h5>
            <p>
                Placeholder
            </p>

            <ContactLinks/>
            <SocialLinks/>
        </>
    )
}