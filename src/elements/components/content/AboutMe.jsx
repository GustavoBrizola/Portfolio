import React from "react";

import SocialLinks from "../SocialLinks";
import ContactLinks from "../ContactLinks";

// @ts-ignore
import pPhoto from '/images/photos/PhotosProfilePic.png'

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